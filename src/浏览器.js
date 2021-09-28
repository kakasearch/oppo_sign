// 签到
//搜索任务
//看资讯
//关注作者
//分享
//积分领取
//2021.9.28测试通过

//////tools
function click_item_zone(c){
    if (click(c.bounds().centerX(), c.bounds().centerY())) {
        return true
    }else{
        return false
    }
 }
 
function text_click(str){
    if (text(str).exists()) {
        log('click',str,click(str));
        return true
    }else{
        return false
    }
}
function id_wait_click(str){
    id(str).waitFor()
    if (id(str).exists()) {
        log('click',str,id(str).findOne().click());
        return true
    }else{
        return false
    }
}

function jump_ad(){
    text_click("跳过广告")
}

function swipe_up(){
    swipe(device.width/2, device.height-300, device.width/2, 300,1000)
}
function share_wechat(){
    //分享道微信然后返回
    id("WechatFriends").waitFor()
    id("WechatFriends").findOne().click()
    sleep(1000)
    text("多选").waitFor()
    back();
}

/////start

function browser_search(){
    //做搜索任务
    log("浏览器搜索任务")
    for(var i=1;i<4;i++){
        log("第",i,"次搜索")
        id("title_text").waitFor()
        id("title_text").findOne().click()
        sleep(1000);
        setText(String(i));
        text("搜索").findOne().click()
        sleep(1000)
        back();
    }
    log("浏览器搜索任务完成")
}
//browser_search()

function browser_article(){
    //做搜搜任务
    log("浏览器查看文章任务")
    var count = 0
    var total = 0
    console.hide()
    for(var str  of ["置顶","推荐"]){
        c = text(str).find()
        var k  = str == "推荐"?1:0
        for(;k<c.length;k++){
            if (total>6) {
                back();
                break
            }
            log("第",total+1,"篇文章",click(c[k].bounds().centerX()+device.width/4, c[k].bounds().centerY()));
            //分享
            if (count < 3) {
                id("share").waitFor()
                id("share").findOne().click()
                share_wechat()
                back();
                sleep(3000)
                count +=1
            }else{
                sleep(1000)
                back();
                sleep(3000)
            }
            click(c[k].bounds().centerX()+device.width/4, c[k].bounds().centerY());
            total += 1
        }
    }
    log("浏览器查看文章任务完成")
    console.show()
}
//browser_article()

function browser_video(){
    task = "分享视频"
    log(task)
    var follow_count = 0
    if(id("icon_play").exists()){
        click_item_zone(id("icon_play").findOne())
        sleep(1000)
        //进入视频播放页面
        for (let i = 0; i < 10; i++) {
            //关注3次
            //分享3次
            if(id("tv_follow").exists()){
                id_wait_click("tv_follow")
                sleep(300)
                text_click("不再关注")
                id("btn_immersive_more").findOne().click()
                id_wait_click("small_more_share")
                share_wechat()
                sleep(2000)
                follow_count += 1
                if (follow_count >3) {
                    back();
                  break
                }
            }
            //滑动，试图找下一个
            swipe_up()

        }
        
    }else{
        log("找不到视频页面")
    }
    log(task,"任务完成")
}
// browser_video()


function browser_sign_and_reward(){
    app.startActivity({
        action: "android.intent.action.VIEW",
        packageName:"com.heytap.browser",
        className: "com.heytap.browser.usercenter.integration.content.IntegrationActivity",
        root: true
     });
    sleep(3000);
    if (text("签到").exists()) {
        log('click 签到',click("签到"));
        sleep(2000);
        if (text("签到").exists()) {
            log('click 签到',click("签到"));
            sleep(1000)
            if (text("安全验证").exists()) {
                log('安全验证');
                sleep(10000);
                //////////////////////////////////////////////////////
            }
        }
    }else if (text("已签到").exists()) {
        log("已签");
    }
   //领取其他 的]
   log("开始领取日常任务奖励")
    swipe_up()
   c = id("task_item_container").find()
    for(k of [0,1,2,3,5,6]){
        click(c[k].bounds().right-40, c[k].bounds().centerY());
        sleep(2000)
        if (id("close_button").exists()) {
            back();
            sleep(2000)
        }
        
    }
    log("所有奖励全部领取完毕")
}

////main
function browser(){
    log("打开浏览器");
    if (app.launchPackage("com.heytap.browser")) {
        sleep(1000);
        browser_search()
        sleep(1000)
        browser_video()
        sleep(1000)
        browser_article()
        browser_sign_and_reward()
    } else {
        log("找不到浏览器，进行下一个");
    }

}

console.show()
browser()

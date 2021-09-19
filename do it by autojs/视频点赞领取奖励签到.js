function yoli(){if(app.launchPackage("com.heytap.yoli")) {
    sleep(3000);
    //点赞
    for(let i= 0,t=0 ;i<5;t++){
        if(id("rl_praise").boundsInside(device.width/2, 0, device.width, device.height/2).exists()){

            if(id("rl_praise").findOne().click()){
                i += 1;
                log('成功点赞',i)
            }
            swipe(device.width/2,device.height*2/3,device.width/2,device.height/3,1000);
        }else{
            if(t%5 == 0){
                swipe(device.width/2,device.height*3/5,device.width/2,device.height*4/5,1000);
            }
            swipe(device.width/2,device.height*4/5,device.width/2,device.height/5,1000);
        }
    }

    //领取奖励
    click("我的");
    click("任务中心")
    sleep(2000)
    for(let i=0;i<2;i++){
        if(text("领取").exists()){
            log("领取奖励",click("领取"));
            sleep(1000);
        }
        if(text("待领取").exists()){
            log("领取奖励",click("待领取"));
            sleep(1000)
        }else{
            log("not found 领取奖励");
            swipe(device.width/2,device.height*2/3,device.width/2,device.height/3,1000);
        }

    }
    swipe(device.width/2,device.height/3,device.width/2,device.height*2/3,1000);
    swipe(device.width/2,device.height/3,device.width/2,device.height*2/3,1000);
    //
    if (text("去签到").exists()) {
        log('click 签到',click("签到"));
        sleep(2000);
        if (text("签到").exists()) {
            log('click 签到',click("签到"));
            sleep(1000)
            if (text("安全验证").exists()) {
                log('安全验证');
                sleep(5000);
            }
            back();
        }
    }else if (text("明天见").exists()) {
        log("已签");
    }
    //
}
back();
back();
back();
back();
}
yoli();
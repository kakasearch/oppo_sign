function storeSign() {
    toast("打开欢太商城");
    if (app.launchPackage("com.oppo.store")) {
        sleep(3000);
        text("我的").waitFor();
        log('click 我的',click("我的"));
        sleep(1000);
        if (text("签到").exists()) {
            log('click 签到',click("签到"));
            sleep(4000);
            log('click 立即签到',click("立即签到"));
            if (text("签到成功").exists()) {
                log('签到成功');
            } 
        }else if (text("已签").exists()) {
            log("已签");
    
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");




}
function videoeditor(){
    toast("打开即录");
    if (app.launchPackage("com.coloros.videoeditor")) {
        sleep(3000);
        //var me = text("我的").boundsInside(0, 0, device.width, device.height).findOne();
        log('clicck 我的',click("我的"));
        sleep(1000);
        if (text("签到").exists()) {
            log('click 签到',click("签到"));
            sleep(2000);
            if (text("签到").exists()) {
                log('click 签到',click("签到"));
                sleep(1000)
                if (text("安全验证").exists()) {
                    log('安全验证');
                    sleep(3000);
                }
            }
        }else if (text("已签").exists()) {
            log("已签");
        }
    
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    
    
}

function healthSign() {
    toast("打开欢太商城");
    if (app.launchPackage("com.heytap.health")) {
        sleep(3000);
        text("我的").waitFor();
        log('click 我的',click("我的"));
        sleep(1000);
        if (text("领积分").exists()) {
            log('click 领积分',click("领积分"));
            sleep(4000);
            if (text("签到").exists()) {
                log('click 签到',click("签到"));
                if (text("签到成功").exists()) {
                    log('签到成功');
                } 
            }else{
                log('步数不足，无法签到');
            }
            
        }else if (text("已签").exists()) {
            log("已签");
    
        }
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");



}

function browser(){
    toast("打开浏览器");
    if (app.launchPackage("com.heytap.browser")) {
        sleep(1000);
        log('clicck 我的',click("我的"));
        sleep(1000);
        if (text("签到").exists()) {
            log('click 签到',click("签到"));
            sleep(2000);
            if (text("签到").exists()) {
                log('click 签到',click("签到"));
                sleep(1000)
                if (text("安全验证").exists()) {
                    log('安全验证');
                    sleep(3000);
                }
            }
        }else if (text("已签到").exists()) {
            log("已签");
        }
    
    } else {
        toast("软件不存在，进行下一个");
    }
    
    
    
    
}
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
            
        }
    }else if (text("明天见").exists()) {
        log("已签");
    }
    //
}




}

function market(){
    toast("打开软件商店");
    if (app.launchPackage("com.heytap.market")) {
        sleep(4000);
        log('clicck 我的',click("我的"));
        sleep(1000);
        if (text("签到").exists()) {
            log('click 签到',click("签到"));
            sleep(2000);
            if (text("签到").exists()) {
                log('click 签到',click("签到"));
                sleep(1000)
                if (text("安全验证").exists()) {
                    log('安全验证');
                    sleep(3000);
                }
            }
        }else if (text("已签").exists()) {
            log("已签");
        }
    
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
}



function gamecenter(){
    toast("打开打开游戏中心");
    app.startActivity({
        action: "android.intent.action.VIEW",
        packageName:"com.nearme.gamecenter",
        className: "com.heytap.uccreditlib.internal.CreditSignMainActivity",
        root: true
     });
    sleep(3000);
    if (text("签到").exists()) {
        click("签到");
        sleep(2000);
        if (text("签到").exists()) {
            click("签到");
            sleep(1000)
            if (text("安全验证").exists()) {
                log('安全验证');
                sleep(3000);
            }
        }
    }else if (text("已签到").exists()) {
        log("已签");
    }
    log("完成");
    
}
function speechassist(){
    toast("打开语音助手");
    if (app.launchPackage("com.heytap.speechassist")) {
        sleep(1000);
        text("我的").waitFor();
        //var me = text("我的").boundsInside(device.width/2, device.height/2, device.width, device.height).findOne();
        log('clicck 我的',click("我的"));
        sleep(1000);
        if (text("签到").exists()) {
            log('click 签到',click("签到"));
            sleep(2000)
        }else if (text("已签").exists()) {
            log("已签");
        }
    
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
    // 
    // 
}

function smarthome(){
    toast("打开智能家居");
        app.startActivity({
            action: "android.intent.action.VIEW",
            packageName:"com.heytap.smarthome",
            className: "com.heytap.uccreditlib.internal.CreditSignMainActivity",
            root: true
         });
        sleep(2000);
        if (text("签到").exists()) {
            log('click 签到',click("签到"));
            sleep(2000);
            if (text("签到").exists()) {
                log('click 签到',click("签到"));
                sleep(1000)
                if (text("安全验证").exists()) {
                    log('安全验证');
                    sleep(3000);
                }
            }
        }else if (text("已签到").exists()) {
            log("已签");
        }else{
            log('签到状态未知')
        }
}

function themestore(){
    toast("打开主题商店");
    if (app.launchPackage("com.heytap.themestore")) {
        sleep(3000);
        text("我的").waitFor();
        var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne().bounds();
        sleep(500);
        log('clicck 我的',click(me.centerX(), me.centerY()));
        sleep(1000);
        if (text("签到").exists()) {
            log('click 签到',click("签到"));
            sleep(2000);
            if (text("签到").exists()) {
                log('click 签到',click("签到"));
                sleep(1000)
                if (text("安全验证").exists()) {
                    log('安全验证');
                    sleep(3000);
                }
            }
        }else if (text("已签").exists()) {
            log("已签");
        }
    
    } else {
        toast("软件不存在，进行下一个");
    }
    toast("开始下一个，等待3秒钟");
}

function music(){
    toast("打开music");
    if (app.launchPackage("com.heytap.music")) {
        sleep(2000);
        text('我的').waitFor();
        log('clicck 我的',click("我的",0));
        sleep(2000);
        if (text("签到").exists()) {
            log('click 签到',click("签到"));
            sleep(2000);
            if (text("签到").exists()) {
                log('click 签到',click("签到"));
                sleep(1000)
                if (text("安全验证").exists()) {
                    log('安全验证');
                    sleep(3000);
                }
            }
        }else if (text("已签").exists()) {
            log("已签");
        }
    
    } else {
        toast("软件不存在，进行下一个");
    }
}
function community(){
    toast("打开智能家居");
        app.startActivity({
            action: "android.intent.action.VIEW",
            packageName:"com.oppo.community",
            className: "com.oppo.community.sign.SignActivity",
            root: true
         });
        sleep(2000);
        if (text("签到").exists()) {
            log('click 签到',click("签到"));
            sleep(2000);
            if (text("签到").exists()) {
                log('click 签到',click("签到"));
                sleep(1000)
                if (text("安全验证").exists()) {
                    log('安全验证');
                    sleep(3000);
                }
            }
        }else if (text("已签到").exists()) {
            log("已签");
        }else{
            log('签到状态未知')
        }
}

sign_functions = [community,music,themestore,smarthome,speechassist,gamecenter,market,yoli,browser,healthSign,videoeditor,storeSign];
for(i of sign_functions){
    log(i);
    i();
    sleep(3000);
    
    // try{
    //     i();
    //     sleep(3000);
    // }catch(err){
    // log("somethingerror!!\n error description",err.description);
    // log(i);
    // }
}
home();
recents();
sleep(1000);
log('清理后台',click("清除"));
// music();
// themestore();
// smarthome();
// speechassist();
// gamecenter();
// market();
// yoli();
// browser();
// healthSign();
// videoeditor()
// storeSign();
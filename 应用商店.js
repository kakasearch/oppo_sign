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
    back();
    back();
}

market()
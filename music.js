function music(){
    toast("打开music");
    if (app.launchPackage("com.heytap.music")) {
        sleep(2000);
        text('我的').waitFor();
        log('clicck 我的',click("我的",0));
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
}

music();
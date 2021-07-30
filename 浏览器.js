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
    back();
    back();
    back();
    back();
}

browser()
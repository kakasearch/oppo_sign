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
    back();
    back();
}
themestore()

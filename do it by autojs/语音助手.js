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
    // back();
    // back();
}
speechassist()

toast("打开钱包");
if (app.launchPackage("com.finshell.wallet")) {
    sleep(1000);
    text("我的").waitFor();
    log("找到了");
    sleep(1000);
    var me = text("我的").boundsInside(0, device.height * 3 / 4, device.width, device.height).findOne().bounds();
    log(me.centerX(), me.centerY())
    log(click(me.centerX(), me.centerY()));
    sleep(1000);
    if (text("签到").exists()) {
        click("签到");
        sleep(2000);
        if (text("签到").exists()) {
            click("签到");
        }
    }else if (text("已签").exists()) {
        log("已签");

    }

} else {
    toast("软件不存在，进行下一个");
}
toastLog("开始下一个，等待3秒钟");
back();
back();


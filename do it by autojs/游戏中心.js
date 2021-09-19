
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
    back();
}
gamecenter()

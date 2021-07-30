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
smarthome()

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
back();
back();
back();
}
healthSign();
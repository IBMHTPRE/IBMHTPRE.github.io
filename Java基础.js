while(true){
    var a =dialogs.input("小数取整2位")
    var s =true;
    if(a==null){
        toast("这是个"+a)
        continue;
        }else{
    var s =Number.isInteger(a)
        }
        if (s==true){
        dialogs.alert("这不是数字/小数")
        }else{
            a = a.toFixed(2);
            dialogs.alert("保留两位小数"+a)
            }break
}

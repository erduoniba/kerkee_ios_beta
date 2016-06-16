/* 
  redirect.js
  JSToOCDemo

  Created by Harry on 15/11/18.
  Copyright © 2015年 HarryDeng. All rights reserved.
*/

function buttonClick1(title, message){
    
    var iFrame;
    
    //重新建立新对象
    iFrame = document.createElement("iframe");
    
    //setAttribute()方法需要我们向它传递两个参数，obiect.setAttribute(attribute,value)，src属性规定外部脚本文件的 URL(http://www.w3school.com.cn/tags/att_script_src.asp)
    iFrame.setAttribute("src", "fdd://jsAction?title="+title+"&message="+message);
    
    //可向节点的子节点列表的末尾添加新的子节点
    document.body.appendChild(iFrame);
    
    // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
    iFrame.parentNode.removeChild(iFrame);
    
    iFrame = null;
}

function buttonClick2(title, message){
    javascriptAction(title, message);
}

var kerkeeJSManager; //需要全局申明
function buttonClick3(title, message){
    kerkeeJSManager.doSomeThing('js to os' + title + '  ' , message);
}

function buttonClick4(title, message){
    kerkeeJSManager.onePushSubmit('js to os' + title + '  ' , message);
}

function buttonClick5(s1, s2, s3, s4){
    kerkeeJSManager.morePraramters(s1, s2, s3, s4);
}

function ttt(){
    alert("ttttt");
}
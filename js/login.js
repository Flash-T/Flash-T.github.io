function $(id) { return document.getElementById(id); }

function checklogin() {
    var username = $("myname").value;
    var pwd = $("mypwd1").value;
    var checkright = true;
    if (username == "" || pwd == "") //两者中有一个为空
    {
        alert("请确认用户名和密码输入是否正确！！");
        checkright = false;
    } else //不为空，再判断用户名和密码的长度合法性
    {
        if (username.length < 8 || username.length > 20) {
            alert("用户名长度为8至20个字符！！");
            checkright = false;
            $("myname").focus();
        } else if (pwd.length < 8 || pwd.length > 20) {
            alert("密码长度为8至20个字符！！");
            checkright = false;
            $("mypwd1").focus();
        } else { checkright = true; }
    }
    return checkright;
}

function clearInfo() {
    var flag = confirm("确认要重置数据吗？");
    if (flag == true) {
        $("myname").value = "";
        $("mypwd1").value = "";
        // $("mypwd2").value = "";
        $("myname").focus();
    }
}
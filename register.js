


$("#rgbtn").click(function(){
    var un = $("#username").val();
    var pw = $("#password1").val();
    var cpw = $("#password2").val();
    var regexUn = /^[a-zA-Z ]{1,32}$/;
    var regexPw = /^[a-zA-Z0-9]{1,32}$/;
    if( (username.length!=0 && regexUn.test(un)) && (password1.length!=0 && regexPw.test(password1)) && password1 == password2 )
    {
        window.location.href="./index.html";
        
    }
    else
    {   if(username.length == 0 || password1.length == 0|| password2.length == 0)
        alert("Username and Password cannot be empty");
        if((!regexUn.test(un)) || (!regexPw.test(pw)) )
        alert("Please enter Username and Password in the correct format")
        if(!(pw == cpw))
        alert("Confirmed Password does not match");
    }
});
$("#lgbtn").click(function(){
    var un = $("#username").val();
    var pw = $("#password").val();
    var regexUn = /^[a-zA-Z ]{1,32}$/;
    var regexPw = /^[a-zA-Z0-9]{1,32}$/;
    if( (un.length!=0 && regexUn.test(un)) && (pw.length!=0 && regexPw.test(pw)) )
    {
        window.location.href="./index.html";
    }
    else
    {   if(un.length == 0 || pw.length == 0)
        alert("Username and Password cannot be empty");
        if((!regexUn.test(un)) || (!regexPw.test(pw)) )
        alert("Please enter Username and Password in the correct format")
    }
});
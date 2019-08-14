


$("#rgbtn").click(function(){ 
    var username = $("#username").val();
    var password1 = $("#password1").val();
    var password2 = $("#password2").val();
    var regexUn = /^[a-zA-Z]{1,32}$/;
    var regexPw = /^[a-zA-Z0-9 ]{1,32}$/;
    if( username.length!=0 && regexUn.test(username) && password1.length!=0 && regexPw.test(password1) && password1 == password2 )
    {
        window.location.href="./index.html";
        
    }
    else
    { 
        /* if(!regexUn.test(username)||!regexUn.test(password1))
            alert("Enter valid username and password"); */
         if(username.length == 0 || password1.length == 0|| password2.length == 0)
            alert("Username and Password cannot be empty");
        if((!regexUn.test(username)) || (!regexPw.test(password1)) )
            alert("Please enter Username or Password in the correct format")
        if(!(password1 == password2))
            alert("Confirmed Password does not match");
            
    }
});
function validation_login(){
    const email=document.getElementById("email").value;
    const password =document.getElementById("password").value;
   
    if(email==""&&password=="")
        {
            alert("your email and password is email empty");
            return false;
        }

        
        if ( password.length<5)
        {
        alert ("your password is too short");
    return false;
    }
   
    

return true;
    

}
function validation_infos(){
    const email=document.getElementById("email").value;
    const password =document.getElementById("password").value;
    const FirstName=document.getElementById("FirstName").value;
    const LastName =document.getElementById("LastName").value;
    const address=document.getElementById("address").value;
    if (email==" ")
    {
        alert("enter your email");
        return false;
    }
    if(password==" ")
    {
        alert("enter your password");
        return false;
    }
    if(FirstName=="")
    {
        alert("enter your firstname");
        return false;
    }
    if(LastName==""){
        alert("enter your email");
        return false;
    }
    if(address=="")
    {
        alert("enter your email");
        return false;
    }
    return true;
}
function validation_order(){
var iscomfirmed=confirm("do you confirm your color and quantity selections?");
return iscomfirmed;

}
let id=(id)=>document.getElementById(id);
let classes=(classes)=>document.getElementsByClassName(classes);
// let username = document.getElementById("username");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),//let form = document.getElementById("form");
errorMsg = classes("error"),
success = classes("success-icon"),
failure = classes("failure-icon");

//events
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    engine(username,0,"Username can't not be blank!");
    engine(email,1,"Email can't not be blank!");
    engine(password,2,"Password can't not be blank!");

});
// if(username.value.trim() === ''){
//     errorMsg[0].innerHTML="username can't not be blank";
//     failure[0].style.opacity="1";
//     success[0].style.opacity="0";
// }else{
//     errorMsg[0].innerHTML="";
//     failure[0].style.opacity="0";
//     success[0].style.opacity="1";
// }

let engine = (id,serial,messeage)=>{
    if(id.value.trim() === ''){
        errorMsg[serial].innerHTML=messeage;
        id.style.border="2px solid red";
        failure[serial].style.opacity="1";
        success[serial].style.opacity="0";
    }else{
        errorMsg[serial].innerHTML="";
        id.style.border="2px solid green";
        failure[serial].style.opacity="0";
        success[serial].style.opacity="1";
    }
};
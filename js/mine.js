var Name = document.getElementById("name");
var Email = document.getElementById("email");
var Password = document.getElementById("password");
var btn = document.getElementById("btn");
var succes = document.getElementById("succes")

if (JSON.parse( localStorage.getItem('emails')) == null){
  Emails = []
}else{
  Emails =JSON.parse( localStorage.getItem('emails'))
}
// sign up 
function signUp(){
  if(Name.value && Email.value && Password.value !==null){
  var emails = {
    name_1 : Name.value,
    email_1 : Email.value,
    password_1 : Password.value,
  };
  Emails.push(emails);
  localStorage.setItem("emails",JSON.stringify(Emails));
  succes.innerHTML = "Success"
  succes.classList.add("text-light")
}
else{
  succes.innerHTML = "failed"
  succes.classList.add("text-danger")
}
}
if(btn !== null){
  btn.addEventListener("click",signUp);
}


// ##################

var myemail = document.getElementById("myemail");
var mypassword = document.getElementById("mypassword");
var mybtn = document.getElementById("mybtn")
var welcome = document.getElementById("welcome")
var error1 = document.getElementById("error")


if (welcome){
  var getsession = localStorage.getItem("session")
  welcome.innerHTML = `welcome ${getsession}`
}
function Login(){
  for(var i=0;i<Emails.length;i++){
    if(myemail.value == Emails[i].email_1 && mypassword.value == Emails[i].password_1  ){
      localStorage.setItem("session",Emails[i].name_1)
      location.href = "home.html"
    }
    else{
      error1.innerHTML = "fix you inputs"
      error1.classList.add("text-danger")
    }
  }
  
}
if(mybtn !== null){
mybtn.addEventListener("click",Login)
}

var log = document.getElementById("log")

function logout(){
  localStorage.removeItem("session")
  location.href = "index.html"
}
if(log !== null){
log.onclick = logout
}

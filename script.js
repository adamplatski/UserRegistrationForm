function validate(){

    var email = document.getElementById('email').value
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var pass = document.getElementById('pass').value
    var pass2 = document.getElementById('pass2').value
    
   if(!email.match(emailRegex)) {
        alert("Please enter a valid email.");
        return false;
    }
    else if(email == "") {
        alert("You must enter your email to proceed.");
        return false;
    }
    else if(pass.length==0){
        alert("Please Enter Your Password");
        return false;
    }
    else if(pass!=pass2){
        alert("The passwords are not matching. Please try again");
        return false;
    }
    else if(document.getElementById('terms').checked==false){
        alert("Please accept the terms and conditions");
        return false; 
    }
    else{
        return true;
    }
}



  
function validation() {
   
    const fname = document.getElementById("first_name").value;
    const lname = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const data = fname || lname || email || phone || message;

    const error_message = document.getElementById("error_message");
    let exit = Boolean(true);
    var text;
    if(data.length == ''){
        text = "";
        error_message.innerHTML = text;
        return !exit;
    }else{
    if(fname.length == ''){
        text = "Please Enter Your First Name";
        error_message.innerHTML = text.toUpperCase();
        return !exit;
    }
    if(lname.length == ''){
        text = "Please Enter Your Last Name";
        error_message.innerHTML = text.toUpperCase();
        return !exit;
    }
    if(email.length == ''){
        text = "Please Enter Your Email Address";
        error_message.innerHTML = text.toUpperCase();
        return !exit;
    }
    if(phone.length < 10){
        text = "Please Enter Your Phone Number";
        error_message.innerHTML = text.toUpperCase();
        return !exit;
    }
    if(message.length < 5){
        text = "Please Write a Message";
        error_message.innerHTML = text.toUpperCase();
        return !exit;
    }
    else{   
            if(exit){               
                    
                    document.getElementById("add").className = "alert alert-success alert-dismissible fade show";
                    document.getElementById("addNewtx").innerHTML = "Email Sent";                    
                    document.getElementById("status").className = "false";
                    document.getElementById("chngStatus").innerHTML = "";
                    document.getElementById("rmMessage").innerHTML = "";              
                } else{               
                   
                    document.getElementById("status").className = "alert alert-success alert-dismissible fade show";
                    var txt = document.getElementById("chngStatus");
                    var rm = document.getElementById("rmMessage");
                    rm.innerHTML = "";
                    txt.innerHTML = "Email Sent";           
                   
                }
            }
        }      
    return true;          
}
$(document).ready(function() {
    if(validation() == true){
        document.getElementById("myForm").reset();
      }
  });

  


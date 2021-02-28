function validation() {
    const fname = document.getElementById("first_name").value;
    const lname = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const error_message = document.getElementById("error_message");
    let exit = Boolean(true);
    var text;

    if(fname.length < 2){
        text = "Please add first name";
        error_message.innerHTML = text;
        return !exit;
    }
    if(lname.length < 2){
        text = "Please add last name";
        error_message.innerHTML = text;
        return !exit;
    }
    if(email.length < 2){
        text = "Please add email address";
        error_message.innerHTML = text;
        return !exit;
    }
    if(phone.length < 5){
        text = "Please add phone number";
        error_message.innerHTML = text;
        return !exit;
    }
    if(message.length < 5){
        text = "Please add message";
        error_message.innerHTML = text;
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
                
                document.getElementById('first_name').value=''; 
                document.getElementById('last_name').value=''; 
                document.getElementById('email').value=''; 
                document.getElementById('phone').value=''; 
                document.getElementById('message').value=''; 
                return true;
}
  }



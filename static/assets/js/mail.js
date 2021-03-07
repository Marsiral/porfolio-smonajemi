$('form').on('submit', function(e) {
    if(grecaptcha.getResponse() == "") {
      e.preventDefault();
      alert("You can't proceed!");
    } else {
      alert("Thank you");
    }
  });
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
    } else{
    if(fname.length == '' && !isNaN(fname)){
        text = "Please Enter Your First Name!";
        error_message.innerHTML = text.toUpperCase();
        return !exit;
    }
    if(lname.length == '' && !isNaN(lname)){
        text = "Please Enter Your Last Name!";
        error_message.innerHTML = text.toUpperCase();
        return !exit;
    }
    if(email.length == ''){
        text = "Please Enter a Valid Email Address!";
        error_message.innerHTML = text.toUpperCase();
        return !exit;
    }
    if(phone.length < 10 && isNaN(phone)){
        text = "Phone Number has to be atleast 10 digits!";
        error_message.innerHTML = text.toUpperCase();
        return !exit;
    }
    if(message.length < 5){
        text = "Message field cannot be empty";
        error_message.innerHTML = text.toUpperCase();
        return !exit;
    }
 
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
        onloadCallback();
        }      
    return true;          
}


//   function emailvalidation()
// {

//     var input = document.form.email.value;

//     var atsign = input.indexOf("@");
//     var dotsign = input.lastIndexOf(".");

//     while (input != null || input.length > 5)
//     {
//     if(atsign < 1 || dotsign < atsign + 2 || dotsign + 2 >= input.length)
//     {
//         alert("Email not valid");
//         return false;
//     }          
//     else
//     {
//         return true;
//     }  
//     }        

// }

//   function isValid()
//   {
//       var flag = true;
  
//       flag &= emailvalidation();
    
  
//       if (flag)
//       {
//           return true;
//       }
//       else
//       {
//           return false;
//       }
  
//   } 

  $(document).ready(function() {
    if(validation() == true){
        document.getElementById("myForm").reset();
      }
  });
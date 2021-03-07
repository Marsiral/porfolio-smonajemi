// var onloadCallback = function() {
//     grecaptcha.render('google_recaptcha', {
//       'sitekey' : '6Lcj6XQaAAAAAI0s9ja70-abMFJy-LCUOjP2S5uh'
//     });
//   };

//   $("#myForm").click(function () {
//     if (checkifreqfld()) {
//       event.preventDefault();
//       var rcres = grecaptcha.getResponse();
//       if(rcres.length){
//         grecaptcha.reset();
//         alert("Form Submitted!","success");
//       }else{
//         alert("Please verify reCAPTCHA","error");
//       }
//     } else {
//         alert("Fill required fields!","error");
//     }
// });
// function validation() {
   
//     const fname = document.getElementById("first_name").value;
//     const lname = document.getElementById("last_name").value;
//     const email = document.getElementById("email").value;
//     const phone = document.getElementById("phone").value;
//     const message = document.getElementById("message").value;
//     const data = fname || lname || email || phone || message;
//     const error_message = document.getElementById("error_message");
//     let exit = Boolean(true);
//     var text;


//     if(data.length == ''){
//         text = "";
//         error_message.innerHTML = text;
//         return !exit;
//     }else{
//     if(fname.length == '' && !isNaN(fname)){
//         text = "Please Enter Your First Name!";
//         error_message.innerHTML = text.toUpperCase();
//         return !exit;
//     }
//     if(lname.length == '' && !isNaN(lname)){
//         text = "Please Enter Your Last Name!";
//         error_message.innerHTML = text.toUpperCase();
//         return !exit;
//     }
//     if(email.length == ''){
//         text = "Please Enter a Valid Email Address!";
//         error_message.innerHTML = text.toUpperCase();
//         return !exit;
//     }
//     if(phone.length < 10 && isNaN(phone)){
//         text = "Phone Number has to be atleast 10 digits!";
//         error_message.innerHTML = text.toUpperCase();
//         return !exit;
//     }
//     if(message.length < 5){
//         text = "Message field cannot be empty";
//         error_message.innerHTML = text.toUpperCase();
//         return !exit;
//     }
 
//     if(exit){           

//             document.getElementById("add").className = "alert alert-success alert-dismissible fade show";
//             document.getElementById("addNewtx").innerHTML = "Email Sent";                    
//             document.getElementById("status").className = "false";
//             document.getElementById("chngStatus").innerHTML = "";
//             document.getElementById("rmMessage").innerHTML = "";              
//         } else{               
            
//             document.getElementById("status").className = "alert alert-success alert-dismissible fade show";
//             var txt = document.getElementById("chngStatus");
//             var rm = document.getElementById("rmMessage");
//             rm.innerHTML = "";
//             txt.innerHTML = "Email Sent";           
            
//         }

//         }      
//     return true;          
// }


// //   function emailvalidation()
// // {

// //     var input = document.form.email.value;

// //     var atsign = input.indexOf("@");
// //     var dotsign = input.lastIndexOf(".");

// //     while (input != null || input.length > 5)
// //     {
// //     if(atsign < 1 || dotsign < atsign + 2 || dotsign + 2 >= input.length)
// //     {
// //         alert("Email not valid");
// //         return false;
// //     }          
// //     else
// //     {
// //         return true;
// //     }  
// //     }        

// // }

// //   function isValid()
// //   {
// //       var flag = true;
  
// //       flag &= emailvalidation();
    
  
// //       if (flag)
// //       {
// //           return true;
// //       }
// //       else
// //       {
// //           return false;
// //       }
  
// //   } 

//   $(document).ready(function() {
//     if(validation() == true){
//         document.getElementById("myForm").reset();
//       }
//   });


var onloadCallback = function() {
    grecaptcha.render('google_recaptcha', {
      'sitekey' : '6LfFSIUUAXXXXXXXXXXXDk7giXSN6Y8'
    });
  };
  
  $(function () {
    //Check if required fields are filled
    function checkifreqfld() {
            var isFormFilled = true;
            $("#test-form").find(".form-checkfield:visible").each(function () {
                var value = $.trim($(this).val());
                if ($(this).prop('required')) {
                    if (value.length < 1) {
                      $(this).closest(".field-wrapper").addClass("field-error");
                      isFormFilled = false;
                    } else {
                      $(this).closest(".field-wrapper").removeClass("field-error");
                    }
                } else {
                    $(this).closest(".field-wrapper").removeClass("field-error");
                }
            });
            return isFormFilled;
      }

    //Form Submit Event
    $("#submit-test-form").click(function () {
        if (checkifreqfld()) {
          event.preventDefault();
          var rcres = grecaptcha.getResponse();
          if(rcres.length){
            grecaptcha.reset();
            showHideMsg("Form Submitted!","success");
          }else{
            showHideMsg("Please verify reCAPTCHA","error");
          }
        } else {
            showHideMsg("Fill required fields!","error");
        }
    });

    //Show/Hide Message
    function showHideMsg(message,type){
      if(type == "success"){
        $("#message-wrap").addClass("success-msg").removeClass("error-msg");
      }else if(type == "error"){
        $("#message-wrap").removeClass("success-msg").addClass("error-msg");
      }

      $("#message-wrap").stop()
      .slideDown()
      .html(message)
      .delay(1500)
      .slideUp();
    }


    //Google Style InputFields
    $(".field-wrapper .field-placeholder").on("click", function () {
      $(this).closest(".field-wrapper").find("input").focus();
    });
    $(".field-wrapper input").on("keyup", function () {
      var value = $.trim($(this).val());
        if (value) {
          $(this).closest(".field-wrapper").addClass("hasValue");
        } else {
          $(this).closest(".field-wrapper").removeClass("hasValue");
        }
    });
  });
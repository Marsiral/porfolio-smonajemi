
function myFunction() {
    var res = grecaptcha.getResponse();
    var flag = false;
    if(res.length == 0) {
        document.getElementById('captcha').innerHTML="You can't leave Captcha Code empty";
        flag = false;
    } else {
        alert("SINA")
         flag = true;
    }
    return flag;
  }

//   <div class="g-recaptcha" id="rcaptcha" data-sitekey="6Lcj6XQaAAAAAI0s9ja70-abMFJy-LCUOjP2S5uh"></div>
//   <span id="captcha" style="margin-left:100px;color:red" />
//   <button onclick="myFunction()">Send</button>
//   <br><hr>
//   <input type="" id="submit" class="btn"></input>
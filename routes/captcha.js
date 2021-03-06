const express = require('express');
const router = express.Router();
var recaptcha = new Recaptcha('6LcO-HMaAAAAAOCceNR5rZt4rxHIp0F19c7mBdEA', '6LcO-HMaAAAAAKqjelidoiMWq2EoKzdbFjQyvyL4');
router.post('/',function(req,res){
  
  if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null || req.body === null) {
    return res.render("partials/contact.hbs", { errorMsg: "NOOO", title: 'Contact Me'});        
  } else{
    res.redirect('/thankyouPage');  
  }
  


  // var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
  // Hitting GET request to the URL, Google will respond with success or error scenario.
  // request(verificationUrl,function(error,response,body) {
  //   body = JSON.parse(body);
  //   // Success will be true or false depending upon captcha validation.
  //   if(body.success !== undefined && !body.success) {
  //     return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
  //   }
  //   return true;
  // });
});

module.exports = router;

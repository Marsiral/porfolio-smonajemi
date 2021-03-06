const e = require('express');
const express = require('express');
const router = express.Router();
// var recaptcha = new Recaptcha('SITE_KEY', 'SECRET_KEY');
// recaptcha.middleware.verify

router.post('/',function(req,res){

    var secretKey = "6LcO-HMaAAAAAKqjelidoiMWq2EoKzdbFjQyvyL4";
    // req.connection.remoteAddress will provide IP address of connected user.
    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl,function(error,response,body) {
      body = JSON.parse(body);
      // Success will be true or false depending upon captcha validation.
      if(body.success !== undefined && !body.success) {
        return false;
      }
      return true;      
    });
  });

  module.exports = router;

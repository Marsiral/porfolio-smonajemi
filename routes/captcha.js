const express = require('express');
const router = express.Router();
var Recaptcha = require('express-recaptcha').RecaptchaV3;
//import Recaptcha from 'express-recaptcha'
var recaptcha = new Recaptcha('SITE_KEY', 'SECRET_KEY');
//or with options
var options = {'hl':'de'};
var recaptcha = new Recaptcha('6LcO-HMaAAAAAOCceNR5rZt4rxHIp0F19c7mBdEA', '6LcO-HMaAAAAAKqjelidoiMWq2EoKzdbFjQyvyL4', options);

router.get('/', recaptcha.middleware.renderWith({'hl':'fr'}), function(req, res){
  res.render('index', { captcha:res.recaptcha });
});
router.post('/', recaptcha.middleware.verify, function(req, res){
  if (!req.recaptcha.error) {
    // success code
  } else {
    return res.render("partials/contact.hbs", { errorMsg: "Recaptcha Required!", title: 'Contact Me'});      
  }
});

  module.exports = router;
const e = require('express');
const express = require('express');
const router = express.Router();
var Recaptcha = require('express-recaptcha').RecaptchaV2;
//import Recaptcha from 'express-recaptcha'
var recaptcha = new Recaptcha('6LcO-HMaAAAAAOCceNR5rZt4rxHIp0F19c7mBdEA', '6LcO-HMaAAAAAKqjelidoiMWq2EoKzdbFjQyvyL4');
//or with options
var options = {'hl':'de'};
var recaptcha = new Recaptcha('6LcO-HMaAAAAAOCceNR5rZt4rxHIp0F19c7mBdEA', '6LcO-HMaAAAAAKqjelidoiMWq2EoKzdbFjQyvyL4', options);

router.post('/', function(req, res){
  recaptcha.verify(req, function(error, data){
    if (!req.recaptcha.error) {
      alert("DONE");
    } else {
      return res.render("partials/contact.hbs", { errorMsg: "Missing", title: 'Contact Me'});
    }
  });
});

module.exports = router;

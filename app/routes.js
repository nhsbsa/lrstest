var express = require('express');
var router = express.Router();
var attempt = 0;
module.exports = router;

//import the content
var Content = require('./content.js');
var content = Content.content;

var hasBen;

var resetAll = function () {

    content.updateContent("D");
    content.hasBen = 'no';
    console.log(hasBen);
    
};

// Route index page
router.get('/', function (req, res) {
    var hasBen;
  resetAll();
  res.render('index');
    console.log(hasBen);
});

router.get(/index/, function (req, res) {
  var hasBen;
    resetAll();
  res.render('index');
    console.log(hasBen);
});


router.get('/', function (req, res) {
  attempt = 0;
  res.render('index');
});

router.get(/index/, function (req, res) {
  attempt = 0;
  res.render('index');
});

router.get(/haha-handler/, function (req, res) {
  if (hasEmail) {
    res.redirect('mail-value');
  } else {
     res.redirect('accept');
  }
});

router.get(/pregnancy-handler/, function (req, res) {
  
  if (req.query.pregnant == 'yes'){ 
    content.pregnant = 'yes';
      res.redirect('mat-ben');
  } else {
      content.pregnant = 'no';
    res.redirect('cant-find-cert-decs');
  }
});

router.get(/mat-ben/, function (req, res) {
  res.render('hc3/lower2/mat-ben', {
    title : content.title,
      pregnant : content.pregnant,
      hasBen : content.hasBen,
      bens: req.query.benefits
  });
});

router.get(/endHc3/, function (req, res) {
  res.render('hc3/lower2/endHc3', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/dwpDecisionDecs/, function (req, res) {
  res.render('hc3/lower2/dwpDecisionDecs', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/mat-ben/, function (req, res) {
  res.render('hc3/higher/mat-ben', {
    title : content.title,
      pregnant : content.pregnant,
      hasBen : content.hasBen,
      bens: req.query.benefits
  });
});

router.get(/endHc3/, function (req, res) {
  res.render('hc3/higher/endHc3', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/dwpDecisionDecs/, function (req, res) {
  res.render('hc3/higher/dwpDecisionDecs', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/mat-ben/, function (req, res) {
  res.render('hc3/noPayment/mat-ben', {
    title : content.title,
      pregnant : content.pregnant,
      hasBen : content.hasBen,
      bens: req.query.benefits
  });
});

router.get(/endHc3/, function (req, res) {
  res.render('hc3/noPayment/endHc3', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/dwpDecisionDecs/, function (req, res) {
  res.render('hc3/noPayment/dwpDecisionDecs', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/mat-ben/, function (req, res) {
  res.render('hc3/same/mat-ben', {
    title : content.title,
      pregnant : content.pregnant,
      hasBen : content.hasBen,
      bens: req.query.benefits
  });
});

router.get(/endHc3/, function (req, res) {
  res.render('hc3/same/endHc3', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/dwpDecisionDecs/, function (req, res) {
  res.render('hc3/same/dwpDecisionDecs', {
    title : content.title,
    benType : content.benType
  });
});

router.get(/dwp-exemptions-handler/, function (req, res) {
  var bens = req.query.benefits;
  var topCat;
    var hasBen;

    if (bens == "is") {
      topCat = "IS";
        content.updateContent(topCat);
        res.redirect('dwpDecisionDecs');
    } else if (bens == "esa") {
      topCat = "ESA";
        content.updateContent(topCat);
        res.redirect('dwpDecisionDecs');
    } else if (bens == "jsa") {
      topCat = "JSA";
        content.updateContent(topCat);
        res.redirect('dwpDecisionDecs');
    } else if (bens == "pc") {
      topCat = "PC";
        content.updateContent(topCat);
        res.redirect('dwpDecisionDecs');
    } else if (bens == "no") {
        res.redirect('pregnant');
    }      

    
});
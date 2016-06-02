var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer');
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://unfriendzoneme%40gmail.com:unfriendzoned@smtp.gmail.com');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

// parse application/json
app.use(bodyParser.json())

app.post('/msg', function(req, res){
  var msg = req.body.msg; // the user's message
  var email = req.body.email // user's email
  console.log(email + ":" + msg); // log the msg to debug
  res.sendStatus(200); // default success status
  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: email + '<unfriendzoneme@gmail.com>', // sender address
      to: 'unfriendzoneme@gmail.com', // list of receivers
      subject: 'I need advice', // Subject line
      text: msg, // plaintext body
      html: msg // html body
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

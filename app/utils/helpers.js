var axios = require('axios');

var helpers = {
  sendMsg: function(message, email) {
    axios.post('/msg',  {
      msg: message,
      email: email
    })
    .then(function (response) {
      console.log("success");
    })
    .catch(function (response) {
      // console.log("failure"); // fails silently
    });
  }
}

module.exports = helpers;

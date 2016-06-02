var axios = require('axios');

var helpers = {
  sendMsg: function(message) {
    axios.post('/msg',  {
      msg: message
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

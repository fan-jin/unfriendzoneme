var axios = require('axios');

var helpers = {
  sendMsg: function(message) {
    axios.post('/msg',  {
      msg: message
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}

module.exports = helpers;

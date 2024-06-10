var axios = require("axios").default;

var options = {
  method: 'PATCH',
  url: 'https://dev-dkzkimwgxvq1q7r1.us.auth0.com/api/v2/clients/7JJlG358N7UzbwnpwOTPJ9MUzM50ut9V',
  headers: {
    'content-type': 'application/json',
    authorization: 'Bearer your_api2_access_token',
    'cache-control': 'no-cache'
  },
  data: {initiate_login_uri: 'https://yourapp.com/login'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

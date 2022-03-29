var axios = require('axios');
var data = JSON.stringify({
  "intent": "testando",
  "examples": [
    {
      "text": "Good morning"
    },
    {
      "text": "Hi there"
    }
  ]
});

var config = {
  method: 'post',
  url: 'https://api.us-east.assistant.watson.cloud.ibm.com/instances/ba1e38a7-e378-4966-9b9a-8915956c8424/v1/workspaces/d0845713-8816-4a0c-8999-e91e9a6aad45/intents?version=2020-04-01',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer ' + process.env.API_KEY  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

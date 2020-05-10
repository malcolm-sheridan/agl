const axios = require('axios');

module.exports = function (context, req) {    
    axios.get('http://agl-developer-test.azurewebsites.net/people.json')
        .then(response => {            
            
            context.res = {
                status: 200,
                body: response.data
            };
            
            context.done(); 
        })
        .catch(error => {
            console.log(error);
        });  
};
var axios = require("axios");
var Promise = require("bluebird");

var api_url = 'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6';

axios.get(api_url)
    .then(function (response) {
        console.log(response.data[0]);
    })
    .catch(function (error) {
        console.error(error);
    });
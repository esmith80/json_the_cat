const request = require('request');

const fetchBreedDescription = (breedName, cb) => {

  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {
    if (!response || error) {
      cb(error, null);
    } else if (response.statusCode !== 200) {
      cb(`Error: ${response.statusCode}`, null); // does this give status code?
    } else {
      const data = JSON.parse(body);
      cb(null, data);
    }
    
  });
};

module.exports = { fetchBreedDescription };
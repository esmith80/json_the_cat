const request = require('request');
const userInput = process.argv[2];

// print body content to terminal
request("https://api.thecatapi.com/v1/breeds/search?q=" + userInput, (error, response, body) => {
  
  if (!response || error) {
    console.log(`There was an error:\n`, error);
  } else if (response.statusCode !== 200) {
    console.log(`There was a response but it wasn't successful. Status code: ${response.statusCode}`);
  } else {
    const data = JSON.parse(body);
    if (!data.length) {
      console.log(`'${userInput}' is not a breed. Your search returned no results.`);
    } else {
      console.log(data[0]);
    }
  }
});
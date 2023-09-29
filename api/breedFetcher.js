const request = require('request');

const searchTerm = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?name=${searchTerm}`;



request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('HTTP Status Code:', response.statusCode);
    return;
  }

  // Parse the JSON string into a JavaScript object
  const data = JSON.parse(body);

  // Now you can access the properties of the JSON object
  console.log(data[0].description);
});
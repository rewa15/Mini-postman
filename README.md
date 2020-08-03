# Mini Postman

A simple application that offers a sleek user interface to make HTML requests (GET/ POST), without the hassle of writing a bunch of code just to test an API's functionality.


## 🚀 Description
###
***1. Enter url of the API you want to test.***
###
***2. Add JSON content / key-value pairs when using POST Request.***
###
***3. Send the request and API response will be available in the box provided. Copy the response for future use.***
###
***4. Take a demo of application [here](https://rewa15.github.io/Mini-postman/)***
###
***5. For testing local API's, we need to enable the CORS policy.***
###

```
Enabling the testing of your localhost API's like: localhost:3000/api/users)

# Allow the CORS (Cross Origin Resource Sharing) in your API. 

# For example while using Node.js, Access-Control-Allow-Origin lets you easily perform cross-domain Ajax requests in web applications. 

# Simply activate the add-on and perform the request. CORS or Cross Origin Resource Sharing is blocked in modern browsers by default (in JavaScript APIs).

```
### Example: Using Node.js to create a REST API 

Just include the code snippet to your server.js file and test the API using Mini-postman

```
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
```
Read more about CORS [here](https://web.dev/cross-origin-resource-sharing/)

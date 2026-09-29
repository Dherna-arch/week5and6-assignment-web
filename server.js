const express = require("express");
const app = express();
const PORTNO = 3000;

// ** Required Middlewate
// Add here app.use statements
app.use(express.urlencoded({ extended: false }));//default
app.use(express.static('public'));

//*** Routes
app.get("/search", function (req, res) {
  const keyword = req.query.keyword; //attatches to query string bc its a get and adds to the query string in the url
  res.send(`<p>${keyword} - Response from localhost:${PORTNO}</p>`);//html string
});

app.post("/register", function (req, res) {
    const userName = req.body.userName; //storing from body bc its a post that takes from the payload
    const email = req.body.email; 
    res.send(`<p>Username: ${userName} Email: ${email}  - Response from localhost:${PORTNO}</p>`);//needs backtick to use the java scirpt template
});

app.listen(PORTNO, function () {
  console.log(`Listening on Port: ${PORTNO}`);
});

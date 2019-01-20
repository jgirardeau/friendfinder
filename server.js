// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/survey.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/home.html"));
  });

  app.get("/data", function (req, res) {
    decode_form();
});
  
  // app.get("/add", function(req, res) {
  //   res.sendFile(path.join(__dirname, "add.html"));
  // });
  
  // Displays all characters
//   app.get("/public/survey", function (req, res) {
//       return res.json(current_survey);
//   });
  
//   // Displays a single character, or returns false
//   app.get("/api/waitlist", function (req, res) {
//       return res.json(wait_list);
  
//   });
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
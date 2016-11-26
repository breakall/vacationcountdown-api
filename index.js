var express = require('express')
var app = express()
var bodyParser = require('body-parser') 

app.use(bodyParser.urlencoded({
  extended: true
})); //for parsing body of post


var vacationDates = [
  { id  : 0,   date: '8/31/2017' }
]



// ==================================================
// Get status of API
// ==================================================

app.get('/', function(req, res) {
  res.format = 'text/plain';
  res.send('Up');
});




// ==================================================
// Get all vacation dates (for debugging)
// ==================================================

app.get('/alldates', function(req, res) {

  res.json(vacationDates);
});




// ==================================================
// Post new vacation date
// ==================================================

app.post('/new', function(req, res) {

  var newDate = {
    id : req.body.id,
    date : req.body.date 
  };


  vacationDates.push(newDate);

  res.json(true);
});



// ==================================================
// Get vacation date by id
// ==================================================
app.get('/:id', function(req, res) {

  reqDate = vacationDates.find(function (d) {
    return d.id == req.params.id;
  }).date;
   
  res.contentType='text/plain';
  res.json(reqDate);

  
});


app.listen(3000, function () {
  console.log('Vacation Countdown running...')
})

/*
debugging

  // console.log('State of array:');
  // for(i=0;i<vacationDates.length;i++){
  //   console.log('ID: ' + vacationDates[i].id);
  //   console.log('Date: ' + vacationDates[i].date);
  // }


  // console.log('Array length: ' + vacationDates.length);
  // console.log(req.body.id);
  // console.log(req.body.date);


  // if(req.params.id < 0) {
  //   res.statusCode = 404;
  //   return res.send('Error 404: No date found');
  // }



*/


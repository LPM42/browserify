var $ = require('jquery');
var mean = require('./mean');
var median = require('./median');
var mode = require('./mode');

var numbers = [1, 2, 2];

$(document).ready(function() {
  $('#mean').append('<p>' + mean(numbers) + '</p>'); 
  $('#median').append('<p>' + median(numbers) + '</p>'); 
  $('#mode').append('<p>' + mode(numbers) + '</p>'); 
});


console.log(mean(numbers)); 
console.log(median(numbers)); 
console.log(mode(numbers)); 

module.exports = function(numbers) {
  numbers.sort(function (a,b){
    return a - b;
  });
  var half = Math.floor(numbers.length/2);

  if (numbers.length % 2) {
    return numbers[half];
  }
  else {
    return (numbers[half - 1] + numbers[half])/ 2;
  }
};

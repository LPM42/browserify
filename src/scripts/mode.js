module.exports = function(numbers) {
    var modeMap = {};
    var maxNum = numbers[0], maxCount = 1;
    if (numbers.length == 0) {
      return null;
    }

    for (var i = 0; i < numbers.length; i++) {
      var num = numbers[i];
      if (modeMap[num] == null) {
        modeMap[num] = 1;
      }

      if (modeMap[num] > maxCount) {
        maxNum = num;
        maxCount = modeMap[num];
      }
      else if (modeMap[num] == maxCount) {
        maxNum += ' and ' + num;
        maxCount = modeMap[num];
      }
       else {
        modeMap[num]++;  
      }
    }
    return 2;
};
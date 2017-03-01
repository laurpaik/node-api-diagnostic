// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//
// A sample callback we will use to test your code is:
// const callback =  function (error, sum) {
//   if (error || sum !== 88) {
//     error = error || new Error(`sum is ${sum}`);
//   }
//
//   done(error);
// };
//
// Use `grunt test` to test your code.

'use strict';

const fs = require('fs'); // jshint ignore: line

const sumLines = (filename, callback) => {
  let sum = 0;
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(err.stack);
      return;
    }
    let array = data.split('\n');
    array.forEach((num) => {
      sum += +num;
    });
    if (sum) {
      callback(null, sum);
      console.log(sum);
    }
    else {
      callback(new Error('line is not a number.'));
    }
  });
};

module.exports = {
  sumLines,
};

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

// const sumLines = (filename, callback) => {
//   let sum = 0;
//   fs.readFile(filename, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err.stack);
//       return;
//     }
//     let array = data.split('\n');
//     array.forEach((num) => {
//       sum += +num;
//     });
//     if (sum) {
//       callback(null, sum);
//       console.log(sum);
//     }
//     else {
//       callback(new Error('line is not a number.'));
//     }
//   });
// };

const sumLines = (filename, callback) => {
  // let's read a file <3
  fs.readFile(filename, { encoding: 'utf8' }, (error, data) => {
    // if there's an error with reading the file, send us an error
    // like, if the thing we pass in is not a file, for example
    if (error) {
      callback(error);
    }
    // define numbersArray as the data in the file we wanted split into an array
    // each element decided by a new line
    let numbersArray = data.split('\n');

    // get rid of that extra last line because it's blank LOL
    numbersArray.pop();

    // define a sum
    // when we use .reduce, the first argument is a callback function,
    // second argument is the initial value (line 76)
    // memo and currentValue are the callback's parameters in .reduce
    const sum = numbersArray.reduce((memo, currentValue) => {
      // here she's converting the currentValue to a number, I believe
      const line = Number(currentValue);
      // if the line is a valid number ( or, not-Not-a-Number)
      // add the line to the accumulator (memo)
      if (!isNaN(line)) {
      // the second plus coerces the string into a number
      // it's a unary operator
      // could also do `memo + Number(currentValue)`
      // or `memo + parse(currentValue)`
        return memo + (+line);
      }
      // when we reduce here, we add all the numbers
      //determined in the if statement to the initial value, 0
    }, 0);
    if (!isNaN(sum)) {
      // if the sum is legit, we can callback(null, sum)
      // null is the argument for the error parameter on line 51
      // sum is the argument for the data parameter on line 51
      callback(null, sum);
    } else {
      // otherwise callback a new error that tells us the line ain't shit
      callback(new Error('line not a number'));
    }
  });
};


module.exports = {
  sumLines,
};

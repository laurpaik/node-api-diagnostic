[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Node API Diagnostic

This diagnostic assesses your ability to use the Node documentation and the File
System module to write a command-line script using JavaScript.

## Prerequisites

-   [ga-wdi-boston/node-api](https://github.com/ga-wdi-boston/node-api)

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Install dependencies.
1.  Create and checkout a new branch, named `response`.
1.  Follow the directions given in [`lib/diagnostic.js`](lib/diagnostic.js).
1.  Before the alotted time is up, push to your fork and issue a pull request.

Your pull request description should contain a "fist to five" for comfort and
clarity. Additionally, you should mention the resources you used to help you
complete this assessment. For example:

```md
Comfort: 3
Clarity: 3

I used Google and my class notes to help with this assessment.
```

You may wish to refer to ["How do I submit diagnostics?"](https://github.com/ga-wdi-boston/meta/wiki/Diagnostics)
and other [FAQs](https://github.com/ga-wdi-boston/meta/wiki/) related to
[forking, cloning](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone),
and [pull requests](https://github.com/ga-wdi-boston/meta/wiki/PullRequest).

You may use **any resource** other than each other to complete this diagnostic.
This includes referencing talk materials, appropriate documentation, and
searching for help online.

You should be running `grunt nag` before diagnosing any bugs, since it finds
some of the most common sources of errors.

Test your code by running `grunt test`.

## Notes on Wei's solution
```javascript

const sumLines = (filename, callback) => {
  // define sum in the outer scope
  // start sum out as 0
  let sum = 0;
  // let's read a file <3
  fs.readFile(filename, 'utf8', (err, data) => {
    // if there's an error reading the file, console error
    if (err) {
      console.error(err.stack);
      return;
    }
    // define array as the data in our file split into an array by new lines
    let array = data.split('\n');
    // for each element (num) in the array
    // add it to the sum (which starts out as 0)
    // and reassign sum as that new number
    array.forEach((num) => {
      sum += +num;
    });
    // if the sum is legit, we can callback the sum
    // the error is null if it works, obvi LOL
    if (sum) {
      callback(null, sum);
      // log our sum, bc why not
      console.log(sum);
    }
    // otherwise callback the error that tells us the line isn't a number!
    else {
      callback(new Error('line is not a number.'));
    }
  });
};

```

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

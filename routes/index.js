const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/:upper_limit', (req, res, next) => {
    try{
      const {upper_limit} = req.params;
      const primes = eratosthenes(upper_limit);
      res.send(JSON.stringify({primes}));
    } catch (err){
      res.status(400).send('Got an error');
    }

});




let eratosthenes = (n)=> {
  // small hack
    n++;
    // Eratosthenes algorithm to find all primes under n
    let array = [], upperLimit = Math.sqrt(n), output = [];
    if (n>=2){
      output.push(2);
    }
    // Make an array from 2 to (n - 1)
    for (let i = 0; i < n; i++)
        array.push(1);

    // Remove multiples of primes starting from 2, 3, 5,...
    for (let i = 3; i <= upperLimit; i += 2) {
        if (array[i]) {
            for (let j = i * i; j < n; j += i*2)
                array[j] = 0;
        }
    }

    // All array[i] set to 1 (true) are primes
    for (let i = 3; i <= n; i += 2) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};
module.exports = router;

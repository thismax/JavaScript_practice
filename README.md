# Read Me

binarySearch
---------------------

chunkString
---------------------

flatten
---------------------

Takes a multidimensional array's elements and returns them in a one-dimensional array.


largestOrLongest
---------------------

maxMinAvg
---------------------

nextPrimes
---------------------

Takes an array of integers and determines if an element in the array is prime.  If it is, that element is changed to the next largest prime.  Returns the updated array.

```javascript
nextPrimes([5,6,7,8,9,10]) //=> [ 7, 6, 11, 8, 9, 10 ]
```

oddEvenOutlier
---------------------

Takes a string of even and odd numbers seperated by single spaces and returns the location of either the sole even or sole odd number.

```javascript
detectOutlierValue("1 3 5 6 7") //=> 4, since the fourth number is even while the rest are odd.
```

scoreToGrade
---------------------


sumDigits
---------------------
Takes an integer and returns the sum of its digits.  If the integer is negative, the leading digit is assumed to be negative for purposes of summation.

```
sumDigits(-182374) //=> 23 (-1+8+2+3+7+4=23)
```



twoLongest
---------------------
Takes a string of English words seperated by spaces (also known as a sentence) and returns an array of the two longest words.

```javascript
twoLongest('However beautiful the strategy, you should occasionally look at the results.') //=> [ 'occasionally', 'strategy,' ]
```
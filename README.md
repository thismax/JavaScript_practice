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

twoLongest
---------------------
Takes a string of English words seperated by spaces (also known as a sentence) and returns an array of the two longest words.

```javascript
twoLongest('However beautiful the strategy, you should occasionally look at the results.') //=> [ 'occasionally', 'strategy,' ]
```

xbonacci
---------------------

The fibonacci sequence takes the previous two numbers in the sequence and add them together to create the next number.  In xbonacci, the sum of the previous `x` numbers (instead of the previous 2 numbers) of the sequence becomes the next number in the sequence.  This method takes two arguments: the starting sequence with `x` number of elements and an integer `n`. The method then returns the first `n` elements in the given sequence.

```javascript
xbonacci([1, 1], 5) //=> [1, 1, 2, 3, 5]
xbonacci([1, 1, 1, 1], 8) //=> [1, 1, 1, 1, 4, 7, 13, 25]
```


# Read Me

binarySearch
---------------------

Searches a soreted array for a specified value by taking the following steps:

1. Select the midpoint.
2. If the specified value is higher than the midpoint, consider the upper half of the array.  Else, consider the lower half.
3. Pick the midpoint of the new array and repeat.
4. If, at any point, the current value matches our specified value, return its index.
5. Return null if the value is not found.


chunkString
---------------------
Takes a string and an integer paramenter `n` as input and returns an array of strings, wherein each element is an `n`-sized chunk of the origninal string.

```javascript
chunkString('When you come to a fork in the road, take it.', 4) //=> [ 'When', ' you', ' com', 'e to', ' a f', 'ork ', 'in t', 'he r', 'oad,', ' tak', 'e it', '.' ]
```

flatten
---------------------

Takes a multidimensional array's elements and returns them in a one-dimensional array.


largestOrLongest
---------------------

Takes a mixed array with strings and numbers and returns either the longest string or the largest number.  The longest string is returned if its length is greater than the largest number.

```javascript
largestOrLongest(['Stockholm', 1,'Oslo', 8]) //=> 'Stockholm'
largestOrLongest(['Stockholm', 1,'Oslo', 9]) //=> 9
```

maxMinAvg
---------------------

Takes an array of integers and returns an array containing the maximum value, minimum value, and average of the input array's elements, in that order.

```javascript
maxMinAvg([1,2,3,4,5,6]) //=> [ 6, 1, 3.5 ]
```

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
Takes a percentage and returns a letter grade.

```javascript
scoreToGrade(79) //=> 'C+'
```

sumDigits
---------------------
Takes an integer and returns the sum of its digits.  If the integer is negative, the leading digit is assumed to be negative for purposes of summation.

```javascript
sumDigits(-182374) //=> 23 (-1+8+2+3+7+4=23)
```

twoLongest
---------------------
Takes a string of English words seperated by spaces (also known as a sentence) and returns an array of the two longest words.

```javascript
twoLongest('However beautiful the strategy, you should occasionally look at the results.') //=> [ 'occasionally', 'strategy,' ]
```
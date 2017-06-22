function isPrime(n) {

	var counter = 0;

	for (var i = 2 ; i < n ; i++) {
		if (n%i === 0) counter += 1;
	}

	return counter === 0 && n > 1;

}


function nextPrime(n) {

	var x = n+1
	
	while (!isPrime(x)) {
		x += 1;
	}

	return x;

}


function nextPrimes(array) {

	for (var i in array) {

		if (isPrime(array[i])) {
			array[i] = nextPrime(array[i]);
		}

	}

	return array;

}
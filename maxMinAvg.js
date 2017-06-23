function maxMinAvg(arr) {

    var sum = 0;
    var max = arr[0];
    var min = arr[0];

    for (var i = 0; i<arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
            sum += arr[i]
        }
        else if (arr[i] < min) {
            min = arr[i];
            sum += arr[i]
        }
        else {
          sum += arr[i]
        }

    }

    var avg = sum/arr.length
    var arrnew = [max, min, avg];

    return arrnew; 

}




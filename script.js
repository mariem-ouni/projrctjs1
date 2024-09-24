var str = "example";
var reversed = '';
for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed); // Output: "elpmaxe"

var str2 = "count me";
var count = 0;
for (var i = 0; i < str2.length; i++) {
    count++;
}
console.log(count); // Output: 8

var sentence = "hello world from js";
var words = sentence.split(' ');
var capitalizedSentence = '';
for (var i = 0; i < words.length; i++) {
    var word = words[i];
    capitalizedSentence += word.charAt(0).toUpperCase() + word.slice(1);
    if (i !== words.length - 1) {
        capitalizedSentence += ' ';
    }
}
console.log(capitalizedSentence); // Output: "Hello World From Js"

var arr = [10, 5, 3, 12, 7];
var max = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max); // Output: 12

var min = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min); // Output: 3

var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum); // Output: 37

var condition = function(num) { return num > 5; };
var filtered = [];
for (var i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
        filtered.push(arr[i]);
    }
}
console.log(filtered); // Output: [10, 12, 7]
var n = 5;
var result = 1;
for (var i = 2; i <= n; i++) {
    result *= i;
}
console.log(result); // Output: 120


var num = 29;
var isPrime = num > 1;
for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime); // Output: true

var fibTerms = 7;
var fibSequence = [0, 1];
for (var i = 2; i < fibTerms; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
}
console.log(fibSequence.slice(0, fibTerms)); // Output: [0, 1, 1, 2, 3, 5, 8]

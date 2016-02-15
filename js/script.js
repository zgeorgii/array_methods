// .isArray()

var string1 = 'Test';
var object1 = {'name': 'test'};
var array1 = [0, 1, 2, 3, 4, 5];

var testString = Array.isArray(string1);
var testObj = Array.isArray(object1);
var testArray = Array.isArray(array1);

output1.innerHTML = 'String: ' + testString + '<hr>';
output1.innerHTML += 'Object: ' + testObj + '<hr>';
output1.innerHTML += 'Array: ' + testArray;

// .length

var array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayLen = array2.length;

output2.innerHTML = 'Length: ' + arrayLen;

// .indexOf()

var arrayIdx = [1,2,3,1,2,3,1,2,3];
var indexOfThree;

output3.innerHTML = 'Index of 3: ' + indexOfThree + '<hr>';

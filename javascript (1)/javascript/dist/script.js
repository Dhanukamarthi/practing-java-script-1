var sum = 3 + 8 + 5
console.log(sum);

var num1 = 20;
var num2 = 30;
var num3 = 80;
num1 + num2 + num3
var sum = num1 + num2 + num3 ;
console.log(sum);

//subraction
var sub = num1 - num2
console.log(sub);

//multiply
var multiply = num1 * num2 * num3
console.log(multiply);

//division
var division = num1 / num2 
console.log(division)
var division = num3/0
console.log(division);


var firstname = 0
console.log(firstname);

var firstname = 'Dhanu'
console.log(firstname);

var firstname = "Dhanu"
console.log(firstname);
var multiply = num3 * 'HELLO'
console.log(multiply);

var firstname = 'math$'
console.log(firstname);

var num1 = 10;
var num2 = 'Dhanu'
var multiply = num1 * num2
console.log(multiply);
console.log(typeof(num2));
var num1 = 10;
var num2 = 10.50;
//tostring() number as input and returns as string as output
//console.log(typeof(num1.tostring()))

var strNum1 = "20"
var strNum2 = "11.5"
var strNum2 = "ABC"

//parseInt() string numeral as input and returns a number
console.log(typeof(strNum1))
console.log(parseInt(strNum1))
console.log(parseInt(strNum2))

//parseFloat() string numral as input and returns a floating number
//console.log(parseFloat(strNum2))
//console.log(parseFloat(strNum3))

//to fixed() taken floating number and round it off to given position
var strFloat = 10.366789
console.log(strFloat.toFixed(0))
console.log(strFloat.toFixed(2))
console.log(strFloat.toFixed(5))
console.log(strFloat.toFixed(12))

var mystring = "Dhanush"
console.log(mystring)
console.log(typeof(mystring))
//what if string contains double quotes
var doublequotesstring = "we are safe/'not/'/'java/'"
console.log(doublequotesstring)
//what if string contains double quotes
var singlequotesstring = "we are safe/'not/'/'java/'"
console.log(singlequotesstring)

var myfirststring = "iam dhanush my name is dhanush dhanush is"
//returns the length of the string
console.log(myfirststring)
console.log(myfirststring.length)
//find index of astring inside another string
console.log(myfirststring.indexOf('dhanush'))
console.log(myfirststring.indexOf('name'))
console.log(myfirststring.lastIndexOf('dhanush'))
console.log(myfirststring.lastIndexOf('is'))
//get a part of our string slice(start, end)
console.log(myfirststring.slice(0,11))
console.log(myfirststring.slice(11,22))
console.log(myfirststring.slice(-11))
//get sub string function -subtrsct(starpos, length)
console.log(myfirststring.substr(0,4))
console.log(myfirststring.substr(5,10))
var myFirststring = "iam dhanush my name is dhanush dhanush is"
//toUppercase() - It convert string into uppercase
console.log(myFirststring.toUppercase)
//tolowercase() - It convert string into lowercase
console.log(myFirststring.toLowercase)
//concat() - it merges two or more strings
var firstName = "dhanu"
var lastName = "sh"
console.log(firstName.concat(lastName, myFirststring))
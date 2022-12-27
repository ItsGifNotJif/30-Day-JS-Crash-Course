
{
    //Function declaration 
    function functionNoname() {   // declaring a function with no parameters
        // executable code written here
    }

    functionNoname(); // calling the function by its name and with parentheses, without paramenters

}

{
    //Function without a parameter and return   -------- Some functions can be called without parameters and without returns
    function square() {
        let num = 2;
        let sq = num * num;
        console.log(sq);
    }
    square(); // returns the value gained from execution block of function square()
}

{
    // Function without parameter
    function addTwoNumbers() {
        let numOne = 10;
        let numTwo = 20;
        let sum = numOne + numTwo;

        console.log(sum);
    }
    addTwoNumbers();  // returns the value of the mathematical operation in function "addTwoNumbers" execution block
}

{
    function printFullName() {
        let firstName = "Dorian";
        let lastName = "Ashgray";
        let space = " ";
        let fullName = firstName + space + lastName;
        console.log(fullName);
    }

    printFullName(); // Calls a function that prints full name based on variables declared in the execution block of the function
}

{
    // Function can return values. If faction doesn't return a value, the function value is considered undefined.
    function printFullName() {
        let firstName = "Dorian";
        let lastName = "Ashgray";
        let space = " ";
        let fullName = firstName + space + lastName
        return fullName
    }
    console.log(printFullName());
}

{
    function addTwoNumbers() {
        let numOne = 1;                // variables defined in function execution block
        let numTwo = 2;
        let total = numOne + numTwo;         // mathematical operation involving declared variables
        return total;                   // return of the result of mathematical operation
    }
    console.log(addTwoNumbers());               //console logging the result 
}

{
    // Function with a parameter.   Within function, datatypes such as strings, numbers, booelans, objects or other functions can be passed as parameters
    // function functionName(parameter1, optional parameter 2){
    //executable code goes here
    // }
    // functionNoname(parameter1, optional parameter 2)  //invokes function with provided parameters
}

{
    function areaOfCircle(r) {         // declares  function with parameter
        let area = Math.PI * r;         // mathematical operation in execution block
        return area;             // returns value gained from math operation
    }

    console.log(areaOfCircle(12));  // console.logs the result of a function with given paremeter
}

{
    function square(number) {
        return number * number;
    }

    console.log(square(20));
}

{
    // Functions with 2 parameters. 
    // function functionName( parameter1, parameter2){
    //     code for execution here
    //     return result of code 
    // }
    // console.log(functionName(parameter1, parameter2))
}

{
    function sumTwoNumbers(a, b) {
        return a + b;
    }

    console.log(sumTwoNumbers(20, 52));
}

{
    function printFullName(firstName, lastName) {
        return `${firstName} ${lastName}`
    }
    console.log(printFullName("Dorian", "Ashgray"));
}

{
    // Functions with many parameters
    // function functionName(par1, par2, par3, par4...){
    //     code to be executed goes into execution block
    // }
    // functionName(par1, par2, par3, par4...)
}

{
    function sumArrayValues(arr) {   // function with an array as parameter
        let sum = 0;                // declaring initial variable with initial value
        for (let i = 0; i < arr.length; i++) {    // creating "for" loop and defining iteration conditions
            sum = sum + arr[i];             // variable "sum" will get value of "sum" plus array index value. so if array[i] is 7, sum will be 7, as sum(7) = sum(0) + array[7]
        }
        return sum;
    }
    const array = [1, 2, 2, 3, 421, 12, 42, -122, 421, 7];

    console.log(sumArrayValues(array));


    const areaOfCircle = (radius) => {
        let area = Math.PI * radius * radius;
        return area;
    }
    console.log(areaOfCircle(29));
}

{
    //Functions with unlimited parameters. Used in cases where exact number of parameters is not known
    function sumAllNums() {
        console.log(arguments);
    }
    sumAllNums(1, 2, 3, 4, 51, 12, 29, 2);
}

{
    function sumAllNums() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
    console.log(sumAllNums(1, 2, 3, 4, 5, 6, 1))
    console.log(sumAllNums(10, 20, 4124, 421120, 898571))
    console.log(sumAllNums(1.5, 2.5, 9.2, 44.21, 15.2))
}

{
    // Arrow functions with unlimited parameters 

    const sumAllNums = (...args) => {
        //console.log(arguments), arguments object not found in arrow function
        //instead we use a parameter followed by spread operator (...)
        console.log(args);
    }
    sumAllNums(1, 2, 3, 4);
}

{
    // function declaration

    const sumAllNums = (...args) => {
        let sum = 0;
        for (const element of args) {
            sum += element
        }
        return sum
    }
    console.log(sumAllNums(1, 2, 3, 4))
    console.log(sumAllNums(10, 20, 30, 40))
    console.log(sumAllNums(1, 94, 29, -1, 24, 41))
}

{
    // Anonymous functions. 
    const anonymousFun = function () {
        console.log(
            "I am an anonymous function and my value is stored in anonymousFun"
        )
    }
}

{
    // Expression functions. These are anonymous functions. These functions are assigned to a variable, to call the function, the variable is called
    const square = function (n) {
        return n * n
    }
    console.log(square(2))
}

{
    // Self invoking functions. These are anonymous functions that don't need to be called to return a value
    (function (n) {
        console.log(n * n)
    })(2)

    let squaredNum = (function (n) {
        return n * n
    })(10);

    console.log(squaredNum);
}

{
    // Arrow Function. Alternative way to write a function. Uses "=>" instead of word "function" to declare a function. 

    //Normal function example
    function square(n) {
        return n * n
    }
    console.log(square(2));

    //Same function rewritten as an arrow function

    const square1 = n => {
        return n * n
    }
    console.log(square1(3));

    //It can be shortened even further, if only one line of code is written in the execution block. Explicit return
    const square3 = n => n * n
    console.log(square3(42));
}

{
    const changeToUpperCase = arr => {
        const newArr = []
        for (const element of arr) {
            newArr.push(element.toUpperCase())
        }
        return newArr
    }
    const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"]
    console.log(changeToUpperCase(countries));
}

{
    const printFullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`
    }

    console.log(printFullName("Dorian", "Ashgray"));

    // Since function above only has a return statement, it can be explicitly return with arrow function

    const printFullName1 = (firstName, lastName) => `${firstName} ${lastName}`;
    console.log(printFullName("Dorian", "Asghray"));
}

{
    // Functions with default parameters. Functions with parameters that will be used by default if no custom parameters are passed
    function functionName(param = value) {
        //code in execution block
    }
    //Calling the function
    // functionName()
    // functionName(arg)
}

{
    function greetings(name = "Peter") {
        let message = `${name}, welcome to 30 Days of Javascript!`
        return message
    }
    console.log(greetings());   // Returns default value for "name"
    console.log(greetings("Dorian"))    // Returns passed value for "name" parameter
}

{
    function generateFullname(firstName = "Dorian", lastName = "Ashgray") {
        let space = " ";
        let fullname = firstName + space + lastName;
        return fullname
    }
    console.log(generateFullname())   // Returns default name, last name
    console.log(generateFullname("Elric", "Melnibone")) // Returns passed parameters as names
}

{
    function calculateAge(birthYear, currentYear = 2022) {
        let age = currentYear - birthYear;
        return age;
    }
    console.log("Age", calculateAge(1994));

}

{       // Passng custom parameters will overwrite any default parameters in respective positions
    function weightOfObjects(mass, gravity = 9.81) {
        let weight = mass * gravity + " N";
        return weight;
    }
    console.log("Weight of an object in Newtonian Physics: ", weightOfObjects(100)) // Returns custom passed parameter multiplied by default second parameter
    console.log("Weight of an object in Newtonian Physics: ", weightOfObjects(100, 1.62)) // Returns custom passed first parameter multiplied by second custom passed parameter
}

{   // Same functions as above converted to arrow functions
    const weightOfObjects = (mass, gravity = 9.81) => {
        return weight = mass * gravity
    }
    weightOfObjects();
    weightOfObjects(20);
    weightOfObjects(20, 41);


    console.log(weightOfObjects());         // returns NaN value, as no numeric parameters have been passed for equation to be true
    console.log(weightOfObjects(20));   // returns value of custom passed first parameter multiplied by default second parameter value
    console.log(weightOfObjects(20, 41));   // returns value of custom first and custom second passed parameters 
}

{
    const calculatedAge = (birthYear, currentYear = 2022) => currentYear - birthYear;
    console.log(calculateAge(1994, 2022));

    const weightOfObjects = (mass, gravity = 9.81) => mass * gravity + "N "
    console.log("Weight of objects in Newtonian Physics: ", weightOfObjects(10)) // returns value of custom passed first parameter multiplied by default second parameter value
    console.log("Weight of objects in Newtonian Physics: ", weightOfObjects(10, 240)) // returns value of custom first and custom second passed parameters
}


{
    function fullName() {
        return "Dorian Ashgray"
    }
    console.log(fullName());
}

{
    function returnName(firstName, lastName) {
        const space = ' '
        return firstName + space + lastName
    }
    console.log(returnName("Dorian", 'Ashgray'))
}
{
    function addNumbers(a, b) {
        return a + b
    }
    console.log(addNumbers(20, 4));
}

{
    function areaTri(a, b) {
        return a * b;
    }
    console.log(areaTri(2, 44.5))
}
{
    function perimeter(a, b) {
        return 2 * (a * b)
    }
    console.log(perimeter(10, 2));
}

{
    function volumeRectangle(length, width, height) {
        return length * width * height
    }
    console.log(volumeRectangle(2, 4, 1.2))
}

{
    function circleArea(r) {
        return Math.PI * r * r
    }
    console.log(circleArea(20));
}

{
    function circleCircumference(r) {
        return 2 * Math.PI * r
    }
    console.log(circleCircumference(20));
}

{
    function density(mass, volume) {
        return mass / volume
    }
    console.log(density(40, 51));
}

{
    function speed(distance, time) {
        return distance / time

    }
    console.log(speed(200, 2))
}

{
    function weight(mass, gravity = 9.81) {
        return mass * gravity
    }
    console.log(weight(10));
}

{
    function celsiusToFahrenheit(celsius) {
        let Fahrenheit = (celsius * 9 / 5) + 32
        return Fahrenheit
    }
    console.log(celsiusToFahrenheit(0));
}

{
    function BMI(weight, height) {
        const BMI = weight / (height * height)
        return BMI
        if (BMI < 18.5) {
            return "Underweight"
        } else if (BMI < 24.9) {
            return "Normal"
        } else if (BMI < 29.9) {
            return "Overweight"
        } else if (BMI >= 30) {
            return "Obese"
        } else {
            return "not a number"
        }
    }
    console.log(BMI(130, 1.85))
}

{
    function checkSeason(month) {
        if (month == "january" || month == "february" || month == "march") {
            return "winter"
        } else if (month == "april" || month == "may" || month == "june") {
            return "spring"
        } else if (month == "july" || month == "august" || month == "september") {
            return "summer"
        } else if (month == "october" || month == "november" || month == "december") {
            return "autumn"
        }
    }
    console.log(checkSeason('december'))
}
{
    function findMax(a, b, c) {
        if (a > b && a > c) {
            return a
        } else if (b > a && b > c) {
            return c
        } else if (c > a && c > b) {
            return c
        }
    }
    console.log(findMax(10, 20, 301))
    console.log(findMax(-2, -1, 0))
    console.log(findMax(654, -35153, 54))
}

{
    function solveLinEquation(a, b, c, x, y) {
        let value = a * x + b * y + c
        return value
    }

    console.log(solveLinEquation(1, -2, 24, 42, 1));
    console.log(solveLinEquation(2, 3, -5, 4, 6));
}

{
    let firstArr = [1, 2, 3, 4, 5, 6, 7]

    function printArray(arr) {
        return firstArr
    }

    console.log(printArray(firstArr));
}

{
    function showDateTime() {
        const date = new Date();
        return date;
    }
    console.log(showDateTime());
}

{
    function swapValues(x, y) {
        const initial1 = x;
        const initial2 = y;
        let result = initial2 + " " + initial1;
        return result;
    }
    console.log(swapValues(3, 4));
    console.log(swapValues(2, 5));
    console.log(swapValues(1, 0));
}

{
    let array1 = [1, 2, 3, 4, 5, 6, 7]
    let array2 = ['a', 'b', 'c', 'd']
    function reverseArray(a) {
        let initialArray = a;
        let reversedArray = [];
        for (let i = initialArray.length - 1; i >= -0; i--) {
            reversedArray.push(initialArray[i]);
        }
        return reversedArray;
    }
    console.log(reverseArray(array1))
    console.log(reverseArray(array2))
}

{
    let array2 = ['a', 'b', 'c', 'd']
    function capitalizeArray(arr) {
        let upperArr = [];
        for (i = 0; i < arr.length; i++) {
            upperArr.push(arr[i].toUpperCase());
        }
        return upperArr;
    }

    console.log(capitalizeArray(array2));
}

{
    function addItem(item, item2) {
        let array = [];
        array.push(item, item2);
        return array;
    }
    console.log(addItem("one", 'two'));
}

{
    let array = [1, 2, 3, 4, 5, 6, 7, 8]
    function removeItem(index) {
        array.splice(index, 1);
        return array;
    }
    console.log(removeItem(2));
}

{
    function sumOfNumbers(arr) {
        if (arr[0] > arr[1])
            arr.sort((a, b) => a - b)

        const newArr = []

        for (let i = arr[0]; i <= arr[1]; i += 1)
            newArr.push(i)

        return newArr.reduce((acc, cur) => acc + cur)
    }
    console.log(sumOfNumbers([1, 10]))
}

{
    function sumOfOdds(arr) {
        if (arr[0] > arr[1])
            arr.sort((a, b) => a - b)

        const newArray = []
        for (let i = arr[0]; i < arr[1]; i += 1) {
            if (arr[i] % 2 !== 0) {
                newArray.push(i)
            }
        }
        return newArray.reduce((accumulator, currentValue) => accumulator + currentValue)
    }
    console.log(sumOfOdds([2, 10]))
}

{
    function sumOfEvens(arr) {
        if (arr[0] > arr[1])
            arr.sort((a, b) => a - b)
        const newArray = [];
        for (let i = arr[0]; i <= arr[1]; i++) {
            if (arr[i] % 2 === 0) {
                console.log("notEven")
            } else {
                newArray.push(i);
            }
        }
        return newArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    }
    console.log(sumOfEvens([1, 10]));
}

{
    function evensAndOdds(arr) {
        let newEvens = 0;
        let newOdds = 0;
        for (let i = 0; i <= arr; i++) {
            if (i % 2 === 0) {
                newEvens++;
            } else {
                newOdds++;
            }
        }
        console.log(`With ${arr} as parameter, the number of evens is ${newEvens}, and the amount of odds is ${newOdds}`)
    }
    evensAndOdds(100);
    evensAndOdds(4222);
    evensAndOdds(52145);
}

{
    function sumOfArguments(...arguments) {
        return arguments.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
    console.log(sumOfArguments(1, 2, 3, 4, 5, 6, 7, 8, 9));

}

{
    function randomUserIP() {
        let ip1 = Math.floor(Math.random() * 255);
        let ip2 = Math.floor(Math.random() * 255);
        let ip3 = Math.floor(Math.random() * 255);
        let ip4 = Math.floor(Math.random() * 255);
        return ip1 + "." + ip2 + "." + ip3 + "." + ip4
    }
    console.log(randomUserIP())
}

{
    function randomMacAdress(){
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let string1 = "";
        let string2 = "";
        let string3 = "";
        let string4 = "";
        let string5 = "";
        let string6 = "";
        for(let i = 0; i < 2; i++){
            string1 += characters.charAt(Math.floor(Math.random() * characters.length));
            string2 += characters.charAt(Math.floor(Math.random() * characters.length));
            string3 += characters.charAt(Math.floor(Math.random() * characters.length));
            string4 += characters.charAt(Math.floor(Math.random() * characters.length));
            string5 += characters.charAt(Math.floor(Math.random() * characters.length));
            string6 += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return (string1 + "-" + string2 + "-" + string3 + "-" + string4 + "-" + string5 + "-" + string6).toUpperCase();
    }
    console.log(randomMacAdress())
}
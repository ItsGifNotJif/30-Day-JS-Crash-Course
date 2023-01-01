//Higher order functions - functions that take other functions as parameters or return functions as a value. The function passed as a parameter is called a "Callback"

{
    //Callback. Callback functions is passed as a parameter, callback function could have any name
    const callback = (n) => {
        return n ** 2;
    }

    //Function that takes other fuctions as a callback
    function cube(callback, n) {
        return callback(n) * n
    }

    console.log(cube(callback, 2))
}

{
    //Higher order functions can return function as a value
    const higherOrder = n => {
        const doSomething = m => {
            const doWhatEver = t => {
                return 2 * n + 3 * m + t
            }
            return doWhatEver
        }
        return doSomething
    }

    console.log(higherOrder(2)(3)(10));
}

{
    //usage of callback function with forEach method
    const numbers = [1, 2, 3, 4, 5]        //Array of values
    const sumArray = arr => {         //function - parameter 
        let sum = 0                 //declaring initial value for variable
        const callback = function (element) {       // function (parameter)
            sum += element              //element argument gets added to "sum" variable, and "sum" is initialized at value "0" before forEach loop begins.
        }
        arr.forEach(callback)
        return sum          //  after each "forEach" loop has completed, returns "sum" value to "sumArray" function. This function sums up all values in the numbers array
    }

    console.log(sumArray(numbers))     //Returns "15" as a value of array of numbers from 1 to 5
}

{
    //Above function can be simplified further as follows:
    const number = [1, 2, 3, 4, 5];
    const sumArray = arr => {
        let sum = 0
        arr.forEach(function (element) {
            sum += element
        })
        return sum
    }
    console.log(sumArray(number));
}

{
    //Setting time in Javascript
    //setInterval
    //setTimeout

}

{
    //Setting interval using setInterval function
    //setInterval higher order  function is used to do some activity continiously within set interval of time. setInterval function takes callback function and duration as a parameter. Duration is set in milliseconds.
    function callback() {
        // executable code here
    }
    // setInterval(callback, duration)

    function sayHello() {
        console.log("Hello")
    }
    // setInterval(sayHello, 1000)   //prints "Hello" every 1000ms, which is every 1s
}

{
    //Setting a time using setTimeout
    //setTimeout higher order function is used to executed action at some time in the future. setTimeout takes a callback function and duration as parameter. Duration is in milliseconds, and callback will wait that amount of time before executing
    function callback() {
        //executable code here
    }
    // setTimeout(callback, duration)   // duration in milliseconds

    function sayHello() {
        console.log("Hello")
    }
    setTimeout(sayHello, 5000) // prints "Hello" after waiting 5000 milliseconds, or 5 seconds
}

{
    //--------------------Functional Programming---------------//
    //Instead of loops, built-in methods can be used to solve a problem. ALl methods take callback functions as parameters.
    //These built-in methods are: forEach, map, filter, reduce, find, every, some, sort
}
{
    //forEach. Iterates over array elements. Only used with arrays. Takes callback function with elements, index parameter and array itself. Index and array are optional
    // arr.forEach(function (element, index, arr) {
    //     console.log(index, element, arr);
    // })
    //This can also be written as arrow function
    // arr.forEach((element, index, arr) => {
    //     console.log(index, element, arr)
    // })
    //This can also be written as an arrow function using explicit return
    // arr.forEach((element, index, arr) => console.log(index, element, arr)) 

    //----------------------//
    const numbers = [1, 2, 3, 4, 5];       //.forEach method runs provided function once for each array element. Doesn't return a new array, just iterates function over every element in an indicated array
    numbers.forEach(num => console.log(num));

    numbers.forEach((element, index) => {      //parameter name (can be any name), 2nd parameter name (can be any name). 
        //First parameter is always "element", or value. 2nd parameter is always index. Third parameter is optional, its the array the forEach method was called upon. 
        console.log(`Element at index ${index} is ${element}`);
    })

    numbers.forEach((value, index, arr) => {
        console.log(value, index, arr)
    })
    {
        let sum = 0;
        numbers.forEach(item => {
            sum += item
        })
        console.log(sum)
    }

    const countries = ["Japan", "Thailand", "China", "Nepal", "India"]
    countries.forEach(country => {
        console.log(country.toUpperCase())
    })
}

{
    //map method. Executes action on every element in an array, and returns a new array with final values. Takes callback function with element, index, array parameters and returns a new array from that
    //     const modifiedArray = arr.map(function (element, index, arr) {
    //         return element
    //     })
    // 

    //map method with arrow function and explicit returns
    //const  modifiedArray = arr.map((element, index) => element)

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    const numbersSquare = numbers.map((num) => num * num);
    console.log(numbersSquare);

    const names = ["Dorian", "Ashgray", "Elric", "Erekose"]
    const namesToUpperCase = names.map((person) => person.toUpperCase());
    console.log(namesToUpperCase);

    const countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya',
    ]
    const countriesToUpperCase = countries.map((country) => country.toUpperCase());
    console.log(countriesToUpperCase);

    /*Arrow function
    const countriesToUpperCase = countries.map((country) =>{
        return country.toUpperCase()
    });
    //Explicit return arrow function
    const countriesToUpperCase  = countries.map(country => country.toUpperCase());
    */

    const countriesFirstThreeLetters = countries.map((country) => country.slice(0, 3).toUpperCase());
    console.log(countriesFirstThreeLetters);
}
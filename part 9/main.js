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
    //.forEach method. Iterates over array elements. Only used with arrays. Takes callback function with elements, index parameter and array itself. Index and array are optional
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
    //.map method. Executes action on every element in an array, and returns a new array with final values. Takes callback function with element, index, array parameters and returns a new array from that
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

{
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
    //.filter array method. Filters out items which fulfill filter conditions, and returns a new array.
    //Filter countries containing land 
    const countriesContainingLand = countries.filter((country) =>
        country.includes("land"));
    console.log(countriesContainingLand);

    const countriesHaveFiveLetters = countries.filter((country) =>
        country.length === 5)
    console.log(countriesHaveFiveLetters);

    const countriesEndsByia = countries.filter((country) => country.endsWith("ia"));
    console.log(countriesEndsByia);

    const scores = [
        { name: 'Asabeneh', score: 95 },
        { name: 'Lidiya', score: 98 },
        { name: 'Mathias', score: 80 },
        { name: 'Elias', score: 50 },
        { name: 'Martha', score: 85 },
        { name: 'John', score: 100 },
    ]

    const scoresGreaterThanEighty = scores.filter((score) => score.score > 80)
    console.log(scoresGreaterThanEighty);
}

{
    //.reduce method. Reduce takes a callback function and applies it to an iterable, reducing it to a single value. 
    /* Applies the function to first two elements of the iterable, then applies to the result of that operation and so on ujtil the end of iterable
    reduce has (accumulator) as the first parameter, and (currentValue) as the second parameter. It will iterate first over these two parameters, then over the result of these to parameters
    It's advisable to declare intial value of the accumulator, otherwise first value of an array will be taken as de-facto initial value */
    // arr.reduce((accumulator, currentValue) =>{
    //executable code goes into execution block
    //     return
    // }, intialValue)

    const numbers = [1, 2, 3, 4, 5, 6, 8]
    const sum = numbers.reduce((acc, cur) => acc + cur, 0)
    console.log(sum)
}

{
    //.every method. Checks if all elements are similar in one aspect. It returns a boolean
    const names = ["Dorian", "Ashgray", "Elric", "Erekose"]
    const areAllStrings = names.every((name) => typeof name == 'string');
    console.log(areAllStrings)
}

{
    //.find method. Returns the first element which satisfies a condition.

    const ages = [24, 22, 25, 32, 35, 18, 4, 2, 1, 42, 22, 11]
    const agesBelow20 = ages.find((age) => age < 20);
    console.log(agesBelow20);

    const names = ["Dorian", "Ashgray", "Elric", "Erekose", "Jack", "John"]
    const result = names.find((name) => name.length > 7)
    console.log(names);

    const scores = [
        { name: 'Asabeneh', score: 95 },
        { name: 'Mathias', score: 80 },
        { name: 'Elias', score: 50 },
        { name: 'Martha', score: 85 },
        { name: 'John', score: 100 },
    ]

    const score = scores.find((user) => user.score > 80)
    console.log(score);
}

{
    //.findIndex method. Returns the position of the first element that satisfies a condition
    const names = ["Dorian", "Ashgray", "Elric", "Erekose", "Jack", "John"]
    const ages = [24, 22, 25, 32, 35, 18, 4, 2, 1, 42, 22, 11]
    const result = names.findIndex((name) => name == "Elric")
    console.log(result)
    const namesLongerThan5 = names.findIndex((name) => name.length > 5)
    console.log(namesLongerThan5);
    const agesBelow20 = ages.findIndex((age) => age < 20);
    console.log(agesBelow20);
}

{
    //.some method. Checks if some of the elements are similar in one aspect. Returns a boolean.
    const names = ["Dorian", "Ashgray", "Elric", "Erekose", "Jack", "John"]
    const bools = [true, true, true, true, true, true]

    const areSomeTrue = bools.some((name) => name === true);
    console.log(areSomeTrue)

    const areSomeNamesStrings = names.some((name) => typeof name == "number");
    console.log(areSomeNamesStrings);
}

{
    /*.sort method
    Arranges the array elements in either ascending or descending order. By default, sort() sorts elements as strings, in ascending order. Modifies the original array.
    */
    const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
    console.log(products.sort());

    /*Sorting numeric values (numbers). By default, sorts elements in ascending order. Considers numeric values as strings, so [2, 4, 100] would be sorted as [100, 2, 4].
    To sort by actual numeric value, not by string, a function has to be called on sorted elements to compare their values */
    const numbers = [9.81, 10, 22, -42, 12, 2442, 3.14]
    console.log(numbers.sort())  //sorts values by default sorting parameters, in ascending order, with elements treated as strings.
    numbers.sort(function (a, b) {
        return a - b                // compares values in indicated array as actual numbers, not as strings, returns values in ascending order (a - b)
    })
    console.log(numbers)

    numbers.sort(function (a, b) {
        return b - a                // compares values in indicated array as actual numbers, not as strings, by changing order of parameters in comparison, changes sorting direction to descending value sort (b - a)
    })
    console.log(numbers);
}
{
    /*Object arrays themselves can be sorted, by comparing object keys. */
    // objArr.sort(function (a, b) {
    //     if (a.key < b.key) return -1
    //     if (a.key > b.key) return 1
    //     return 0
    // })

    //or

    // objArr.sort(function (a, b) {
    //     if (a["key"] < b["key"]) return -1
    //     if (a["key"] > b["key"]) return 1
    //     return 0
    // })

    const users = [
        { name: 'Asabeneh', age: 150 },
        { name: 'Brook', age: 50 },
        { name: 'Eyob', age: 100 },
        { name: 'Elias', age: 22 },
    ]
    users.sort((a, b) => {
        if (a.age < b.age) return -1
        if (a.age > b.age) return 1
        return 0
    })
    console.log(users)  //sorts in ascending order
}

{
    const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const products = [
        { product: 'banana', price: 3 },
        { product: 'mango', price: 6 },
        { product: 'potato', price: ' ' },
        { product: 'avocado', price: 8 },
        { product: 'coffee', price: 10 },
        { product: 'tea', price: '' },
    ]
}

{
    const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const products = [
        { product: 'banana', price: 3 },
        { product: 'mango', price: 6 },
        { product: 'potato', price: ' ' },
        { product: 'avocado', price: 8 },
        { product: 'coffee', price: 10 },
        { product: 'tea', price: '' },
    ]

    function callback() {

    }
    console.log(countries.forEach((country) => {
        console.log(country)
    }))

    console.log(names.forEach((name) => {
        console.log(name);
    }))

    console.log(numbers.forEach((number) => {
        console.log(number)
    }))

    let uppercaseCountries = countries.map(function (country) {
        return country.toUpperCase()
    })
    console.log(uppercaseCountries);

    let countriesLength = countries.map(function (country) {
        return country.length
    })
    console.log(countriesLength);

    let squaredNumbers = numbers.map(function (num) {
        return num * num
    })
    console.log(squaredNumbers);

    let uppercaseNames = names.map(function (name) {
        return name.toUpperCase()
    })
    console.log(uppercaseNames);

    let prices = products.map(product => product.price)
    console.log(prices);

    let countriesLand = countries.filter((country) =>
        country.includes("land")
    )
    console.log(countriesLand);

    let countriesSixLetters = countries.filter((country) =>
        country.length == 6)
    console.log(countriesSixLetters);

    let countriesSixOrMore = countries.filter((country) =>
        country.length >= 6)
    console.log(countriesSixOrMore);

    let countriesStartWithE = countries.filter((country) =>
        country.startsWith("E"))
    console.log(countriesStartWithE);

    let priceWithValues = products.filter((product) =>
        typeof product.price == "number")
    console.log(priceWithValues);


    function getStringLists(arr) {
        return toString(arr);
    }

    let numberSum = numbers.reduce((acc, cur) => acc + cur)
    console.log(numberSum);

    let sentence = countries.reduce((acc, country, index) => {
        if (index === countries.length - 2) {
            return `${acc}${country} and `
        } else if (index === countries.length - 1) {
            return `${acc}${country} are north European Countries.`
        } else {
            return `${acc}${country}, `
        }
    }, "Estonia, ");
    console.log(sentence)

    let checkNames = countries.some((name) => name.length > 7);
    let checkNames2 = countries.some((name) => name.length < 7);
    console.log(checkNames);
    console.log(checkNames2);

    let checkCountriesForLand = countries.every((country) => country.includes("land"));
    console.log(checkCountriesForLand);

    let countryAtSix = countries.find((country) => country.length = 6)
    console.log(countryAtSix)

    let indexOfCountrySix = countries.findIndex((country) => country.length = 6)
    console.log(indexOfCountrySix)

    let indexNorway = countries.findIndex((country) => country === "Norway")
    console.log(indexNorway)

    let indexRussia = countries.findIndex((country) => country === "Russia")
    console.log(indexRussia)
}

{
    const products = [
        { product: 'banana', price: 3 },
        { product: 'mango', price: 6 },
        { product: 'potato', price: ' ' },
        { product: 'avocado', price: 8 },
        { product: 'coffee', price: 10 },
        { product: 'tea', price: '' },
    ]

    let totalPrice = products
        .reduce((acc, cur) => {
            const price = Number(cur.price)
            if (!isNaN(price)) {
                acc += price
            }
            return acc
        }, 0)
    console.log(totalPrice)
}


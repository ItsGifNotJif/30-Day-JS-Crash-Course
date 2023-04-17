{ //Basic destructuring, declaring values via an array, then assigning indexes of the array to certain elements with "let" declaration
    {
        const numbers = [1, 2, 3]
        let [numOne, numTwo, numThree] = numbers;

        console.log(numbers)
        console.log(numOne, numTwo, numThree)
    }

    {
        const names = ["Dorian", "Ashgray", "Tokyo", "Japan"]
        let [firstName, secondName, thirdName, fourthName] = names;
        console.log(firstName, secondName, thirdName, fourthName)
    }

    {
        const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
        let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;
        console.log(e, pi, gravity, bodyTemp, boilingTemp)
    }

    {
        const fullStack = [
            ['HTML', 'CSS', 'JS', 'React'],
            ['Node', 'Express', 'MongoDB']
        ]
        const [frontEnd, backEnd] = fullStack;

        console.log(backEnd, frontEnd)
    }
}

{
    //Skipping values in the arrays with comma ",". Comma omits the value of the specific index\
    {
        const numbers = [1, 2, 3]
        let [numOne, , numThree] = numbers;
        console.log(numOne, numThree)
    }

    //Assigning default values in case that value is not defined in index of an array
    {
        const names = [undefined, 'Dorian', 'Ashgray'];
        let [
            firstPerson = 'Tokyo', //Default value
            secondPerson,
            thirdPerson,
            fourthPerson = "Japan"  //default value
        ] = names;

        console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)
    }
}
{
    //Using spread operator to get values for all the other indexes that aren't assigned to elements 
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let [numOne, numTwo, numThree, ...rest] = nums //..rest <--- spread operator
    console.log(numOne, numTwo, numThree)
    console.log(rest)   //displays all the other indexes in a seperate entry in the console.
}

{
    //Destructuring during  iteration
    const countries = [["Finland", 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
    for (const [country, city] of countries) {  //For loop, takes "country" and "city" values from 1 index position in the "countries" array with every loop and logs to console
        console.log(country, city)
    }

    const fullStack = [['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB']]
    for (const [first, second, third] of fullStack) {    //For loop, takes 'first, second, third' values from indexes of main array and logs them to console with every loop
        console.log(first, second, third)                //Loop is active for as long as there are indexes in main array "fullStack"
    }
}

{
    //During destructure, the name of the variable used to destructure should be the same as the key or property of the object 
    const rectangle = {
        widht: 20,
        height: 10,
        area: 200
    }
    let { widht, height, area, perimeter } = rectangle
    console.log(widht, height, area, perimeter) //"Perimeter" is undefined, and logs as such to console

}

{
    {  //Renaming during structuring
        const rectangle = {
            widht: 20,
            height: 10,
            area: 200
        }

        let { widht: w, height: h, area: a, perimeter: p } = rectangle //Assing properties different names via formula "original name: new name"
        console.log(w, a, h, p) //Logs original properties under new names to console

    }
    {
        //If key is not found in the object, variable will be assigned the value of "undefined". When key is not in the object, a default value can be given instead 

        const rectangle = {
            width: 20,
            height: 10,
            area: 200
        }

        let { width, height, area, perimeter = 60 } = rectangle  //assigns "perimeter" a default value of "60"
        console.log(width, height, area, perimeter)  //logs to console values from "rectangle" object plus default value of "60" for perimeter
    }
}

{
    //Object parameters without desctructuring 
    const rect = {
        width: 20,
        height: 10
    }
    const calculatePerimeter = rectangle => {
        return 2 * (rectangle.width + rectangle.height)
    }
    console.log(calculatePerimeter(rect))
}
{
    const person = {
        firstName: "Dorian",
        lastName: "Ashgray",
        age: 250,
        contry: "Japan",
        job: "Student of programming",
        skills: [
            "HTML",
            "CSS",
            "Javascript",
            "React",
            "Redux",
            "Node",
            "MongoDB",
            "D3.js"
        ],
        languages: ["English", "Lithuanian", "Russian"]

    }
    //Function that gives information about "person" object without destructuring
    const getPersonInfo = ({
        firstName,
        lastName,
        age,
        country,
        job,
        skills,
        languages
    }) => {
        const formattedSkills = skills.slice(0, -1).join(", ")
        const formattedLanguages = languages.slice(0, -1).join(', ')

        personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
            }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

        return personInfo

    }
    console.log(getPersonInfo(person))
}

{
    //Object parameters with destructuring
    const rect = {
        width: 20,
        height: 10
    }

    const calculatePerimeter = ({ width, height }) => {
        return 2 * (width + height)
    }

    console.log(calculatePerimeter(rect))
}

{
    //Destructuring object during iteration
    const todoList = [
        {
            task: 'Prepare JS test',
            time: "4/1/2020 8:30",
            completed: true
        }, {
            task: "Give JS test",
            time: "4/1/2020 10:00",
            complete: false
        }, {
            task: "Asses Test Result",
            time: "4/1/2020 1:00",
            completed: false
        }
    ]
    for (const { task, time, completed } of todoList) {
        console.log(task, time, completed)
    }
}


{
    //Spread or rest operator. ...rest - spread operator, used to get the rest of elements as an array. Can be used to spread array elements to another array
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let [num1, num2, num3, ...rest] = nums

    console.log(num1, num2, num3)
    console.log(rest)

    const countries = [
        "Germany",
        "France",
        "Belgium",
        "England",
        "Finland",
        "Sweden",
        "Norway",
        "Denmark",
        "Iceland"
    ]

    let [germ, fra, , ...nordicCountries] = countries
    console.log(germ)
    console.log(fra)
    console.log(nordicCountries)
}

{
    //Spread operator to copy array
    const evens = [0, 2, 4, 6, 8, 10]
    const evenNumbers = [...evens]

    const odds = [1, 3, 5, 7, 9]
    const oddNumbers = [...odds]

    const wholeNumbers = [...evens, ...odds]

    console.log(evenNumbers)
    console.log(oddNumbers)
    console.log(wholeNumbers)

    const frontEnd = ["HTML", "CSS", "JS", "React"]
    const backEnd = ["Node", "Express", "MongoDB"]
    const fullstack = [...frontEnd, ...backEnd]

    console.log(frontEnd)
    console.log(backEnd)
    console.log(fullstack)
}


{
    //Spread operator to copy object

    const user = {
        name: "Dorian",
        title: "Student",
        country: "Lithuania",
        city: "Vilnius"
    }
    const copiedUser = { ...user }

    console.log(copiedUser)
}

{
    //Modifying or changing the object while copying 

    const user = {
        name: "Dorian",
        title: "Student",
        country: "Lithuania",
        city: "Vilnius"
    }

    const copiedUser = { ...user, title: "programmer" }   //changes the value of "title" 
    console.log(copiedUser)
}

{
    //Spread operator with arrow function. 
    //To create an arrow function with unlimited arguments, spread operator has to be used. 

    const sumAllNums = (...args) => {
        let sum = 0;
        for (const num of args) {
            sum += num
        }
        return sum
    }
    console.log(sumAllNums(1, 2, 3, 4, 5))  //returns the sum of all provided numbers by passing them to "sumAllNums" function 

}
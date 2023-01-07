//------------Desctructuring and Spreading-------------//

{
    //Destructuring is a way to extract data from arrays and objects into distinct variables
    //Desctructuring arrays
    const numbers = [1, 2, 3]
    let [numOne, numTwo, numThree] = numbers;
    console.log(numOne, numTwo, numThree)

    const names = ["Dorian", "Ashgray", "Tokyo", "Japan"]
    let [one, two, three, four] = names;
    console.log(one, two, three, four);

    const scienceConstants = [2.72, 3.14, 9.81, 37, 100]
    let [e, pi, gravity, bodyTemp, boilingTemp] = scienceConstants;
    console.log(e, pi, gravity, bodyTemp, boilingTemp)

    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
    ]
    let [frontEnd, backEnd] = fullStack;
    console.log(frontEnd, backEnd);
}
{
    //To skip assigning values to variables, additional comma can be used. Comma ommits values at the specific index.
    const numbers = [1, 2, 3]
    let [one, , three] = numbers;
    console.log(one, three)

    const names = ['Asabeneh', 'Brook', 'David', 'John']
    let [, secondPerson, , fourthPerson] = names;
    console.log(secondPerson, fourthPerson)

    //In case where value of array element is undefined, default values can be assigned to those variables
    const name = [undefined, "Dorian", "Ashgray"]
    let [firstName = "Hawkmoon", secondName, thirdName, fourthName = "Elric"] = name;
    console.log(firstName, secondName, thirdName, fourthName)
}

{
    //In cases where not all array values can get their own variable, several elements can be assigned to unique variables, while the rest are assigned to single variable with spread operator "..." and become a new array
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let [first, second, third, ...rest] = nums;
    console.log(first, second, third)
    console.log(rest)
}

{
    //Destructuring during iteration. Destructuring can be used during loops to iterate over arrays and destructure current element at each iteration
    const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
    for (const [country, city] of countries) {
        console.log(country, city)
    }
    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
    ]
    for (const [first, second, third] of fullStack) {
        console.log(first, second, third)                       //React is not logged as it was the fourth element and wasn't assigned to a variable, only first three elements were
    }
}

{
    //Destructuring objects. When objects are being destructured, name of the variable should be the same as key or property of an object.
    const rectangle = {
        width: 20,
        height: 10,
        area: 200
    }
    let { width, height, area, perimeter } = rectangle;
    console.log(width, height, area, perimeter)
}
{
    //Renaming during structuring. Variables can be renamed during destructurisation
    const rectangle = {
        width: 20,
        height: 10,
        area: 200
    }
    let { width: w, height: h, area: a, perimeter: p } = rectangle;  // Renaming during destructurisation. "old name : new name"
    console.log(w, h, a, p)
}

{
    //If the key is not found in object the variable will be assigned to undefined by default. In cases where key is not in the object, we can assign a default value to varuable during declaration
    const rectangle = {
        width: 20,
        height: 10,
        area: 200
    }

    let { width, height, area, perimeter = 60 } = rectangle;   //Declares "perimeter" variable and gives it the default value of "60"
    console.log(width, height, area, perimeter)
}

{   //By assigning default values, the original value doesn't change, but in case originally assigned value doesn't exist or gets deleted, the default value will be used
    const rectangle = {
        width: 20,
        height: 10,
        area: 200,
        perimeter: 80,
    }
    let { width, height, area, perimeter = 60 } = rectangle;              //default value of "60" is assigned to "perimeter" variable
    console.log(width, height, area, perimeter)         //console still logs "80" because that's the original value, but if that was removed, default value of "60" would be logged instead
    console.log(rectangle)
}

{
    //Object parameters without destructuring. 
    const rect = {                  //defining object "rect"
        width: 20,
        height: 10
    }

    const calculatePerimeter = rectangle => {           //defining function  "calculatePerimeter", which takes object as argument
        return 2 * (rectangle.width + rectangle.height)         //execution block code accesses "rect" object properties using dot notation
    }

    console.log(calculatePerimeter(rect))           //logging result of "calculatePerimeter" function to console

    //Function to extract information from object without desctructuring
    const person = {                //defining object "person"
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        age: 250,
        country: 'Finland',
        job: 'Instructor and Developer',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Redux',
            'Node',
            'MongoDB',
            'Python',
            'D3.js'
        ],
        languages: ['Amharic', 'English', 'Suomi(Finnish)']
    }
    const getPersonInfo = obj => {              //Defining "getPersonInfo" function, which takes "person" object as argument
        const skills = obj.skills                                                                       //accessing various properties of "person" object using dot notation
        const formattedSkills = skills.slice(0, -1).join(', ')              //formats "skills" array into a string
        const languages = obj.languages
        const formattedLanguages = languages.slice(0, -1).join(', ')            //formats "languages" array into a string

        personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${obj.age                //Defining a template string, using placeholders and accessing "person" object info with dot notation
            } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]
            }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

        return personInfo
    }
    console.log(getPersonInfo(person))

    //Object parameter with desctructuring 
    const calculatePerimeter1 = ({ width, height }) => {
        return 2 * (width + height)
    }
    console.log(calculatePerimeter1(rect))

    //Function that gives info about object with desctructuring
    const getPersonInfo1 = ({           //Declaring a function that immediately desctructures object upon definition
        firstName,
        lastName,
        age,
        country,
        job,
        skills,
        languages
    }) => {
        const formattedSkills = skills.slice(0, -1).join(", ")          //uses slice and join methods to format "skills" array into string
        const formattedLanguages = languages.slice(0, -1).join(", ")    //uses slice and join methods to format "languages" array into string

        personInfo = `${firstName}${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]}.    
        He speaks ${formattedLanguages} and a little bit of ${languages[2]}`        //Defining a template literal, with placeholders for object properties
        return personInfo
    }
    console.log(getPersonInfo1(person))     //logging results of template literal to console, with object properties accessed via placeholders

    //Destructuring object during iteration
    const todoList = [          //defining object "todoList"
        {
            task: 'Prepare JS Test',
            time: '4/1/2020 8:30',
            completed: true
        },
        {
            task: 'Give JS Test',
            time: '4/1/2020 10:00',
            completed: false
        },
        {
            task: 'Assess Test Result',
            time: '4/1/2020 1:00',
            completed: false
        }
    ]

    for (const { task, time, completed } of todoList) {     //for-of loop iterates over "todoList" object, accessing new element on every iteration, destructuring task, time and completed properties into variables
        console.log(task, time, completed) //logs destructured variables to console
    }
}

{
    //Spread or rest operator. When destructuring, spread operator "..." can be used to access the rest of elements as an array under single variable. Spread operator is also used to spread array elements to another array
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let [num1, num2, num3, ...rest] = nums     //desctructuring "nums" array into num1, num2 and num3 variables, and the rest of the array into "rest" variable
    console.log(num1, num2, num3)   //logging num1, num2, num3 variables
    console.log(rest)   //logging the rest of "nums" array as "rest" variable


    const countries = [
        'Germany',
        'France',
        'Belgium',
        'Finland',
        'Sweden',
        'Norway',
        'Denmark',
        'Iceland'
    ]

    let [ger, fra, , ...nordicCountries] = countries    //destructures "Germany" to "ger", "France" to "fra", skips "Belgium" element by using comma, assigns the rest of countries to "nordicCountries" variable
    console.log(ger, fra)
    console.log(nordicCountries)

    //Spread operator to copy array
    const evens = [0, 2, 4, 6, 8, 10]
    const evenNumbers = [...evens]          //Spread operator (...) copies "evens" array into new variable evenNumbers

    const odds = [1, 3, 5, 7, 9]
    const oddNumbers = [...odds]           //Spread operator (...) copies "odds" array into new variable oddNumbers

    const wholeNumbers = [...evens, ...odds]        //wholeNumbers variable uses "evens" and "odds" copied arrays to create a new array including all the elements from each array
    console.log(evenNumbers)
    console.log(oddNumbers)
    console.log(wholeNumbers);

    const frontEnd = ["HTML", "CSS", "JS", "React"]
    const backEnd = ["Node", "Express", "MongoDB"]
    const fullStack = [...frontEnd, ...backEnd]

    console.log(frontEnd)
    console.log(backEnd)
    console.log(fullStack)


    //Spread operator to copy objects
    const user = {
        name: "Dorian",
        title: "Programmer",
        country: "Lithuania",
        city: "Vilnius"
    }
    const copiedUser = { ...user, title: 'instructor' }  //copies "user" object properties using spread operator, changes value of "title" element to "instructor"
    console.log(copiedUser);

    //Spread operator with arrow functions
    const sumAllNums = (...args) => {        //function uses spread operator (...) to accept unlimited amount of arguments 
        console.log(args)
    }
    sumAllNums(1, 2, 3, 4, 5, 6, 7)

    const sumAllNums1 = (...args) => {      //uses spread operator to accept unlimited amount of arguments
        let sum = 0;        //declares initial variable
        for (const num of args) {   //loop iterats over every element in function arguments
            sum += num  //adds sum of all previous iterations to current iteration value
        } return sum  //returns total sum of all elements from all iterations
    }
    console.log(sumAllNums1(1, 2, 3, 4, 5, 6, 7, 8, 12, 21, 4, 1, 2, 21, 1, 2, 4, 1, 4, 4))
}


{
    const constants = [2.72, 3.14, 9.81, 37, 100]
    let [e, pi, gravity, humanBodyTemp, boilinTemp] = constants;
    console.log(e, pi, gravity, humanBodyTemp, boilinTemp)

    const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
    let [fin, est, swe, den, nor] = countries;
    console.log(fin, est, swe, den, nor)


    const rectangle = {
        width: 20,
        height: 10,
        area: 200,
        perimeter: 60
    }

    let { width, height, area, perimeter } = rectangle;
    console.log(width, height, area, perimeter)

    const users = [
        {
            name: 'Brook',
            scores: 75,
            skills: ['HTM', 'CSS', 'JS'],
            age: 16
        },
        {
            name: 'Alex',
            scores: 80,
            skills: ['HTM', 'CSS', 'JS'],
            age: 18
        },
        {
            name: 'David',
            scores: 75,
            skills: ['HTM', 'CSS'],
            age: 22
        },
        {
            name: 'John',
            scores: 85,
            skills: ['HTML'],
            age: 25
        },
        {
            name: 'Sara',
            scores: 95,
            skills: ['HTM', 'CSS', 'JS'],
            age: 26
        },
        {
            name: 'Martha',
            scores: 80,
            skills: ['HTM', 'CSS', 'JS'],
            age: 18
        },
        {
            name: 'Thomas',
            scores: 90,
            skills: ['HTM', 'CSS', 'JS'],
            age: 20
        }
    ]
    for (const user of users) {
        let { name, scores, skills, age } = user;
        console.log(name, scores, skills, age)
    }
    const lessThanTwoSkills = users.filter((user) => user.skills.length < 2)
    console.log(lessThanTwoSkills)


}

{
    const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
    const [name, skills, [, , jsScore, reactScore, scores]] = student;
    console.log(name, skills, jsScore, reactScore)
}

{
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
    ]

    function convertArrayToObject(arr) {
        return arr.map(([name, skills, scores]) => ({ name, skills, scores }));
    }
    console.log(convertArrayToObject(students));


    const newStudents = students.map(([name, skills, scores]) => {
        return {
            ...{ name, skills, scores },
            frontEndSkills: [...skills, { name: 'Bootstrap', level: 8 }],
            backEndSkills: [...skills, { name: 'Express', level: 9 }],
            databaseSkills: [...skills, { name: 'SQL', level: 8 }],
            dataScienceSkills: [...skills, { name: 'SQL' }]
        };
    });
    
    console.log(newStudents)



}
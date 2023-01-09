//--------------------------JSON - JavaScript Object Notation---------------------------------//

{
    /*JSON. JSON (JavaScript Object Notation) is a light-weight data interchange format for storing and transporting data.
    JSON is easy for humans to read, and is usually used to send data from a server to the client.
    JSON format used "JSON" object, a standard JavaScript library object.
    JSON object can ONLY be a string or a text.  */

    //example JSON object
    //JSON object keys should be inside double quotes, or they should be a string. JSON can be converted into object, and object can be converted into JSON


    //To convert JSON into regular object, we need to use JSON.parse() method. To convert Object into JSON, we need to use JSON.stringify() method

    // JSON.parse(json[, reviver])
    //JSON or text
    //reviver is an optional callback function
    /*JSON.parse(json, (key, value) =>{

    })
    */


    {
        const usersText = `{
            "users": [
            {
                "firstName": "Asabeneh",
                "lastName": "Yetayeh",
                "age": 250,
                "email": "asab@asb.com"
            },
            {
                "firstName": "Alex",
                "lastName": "James",
                "age": 25,
                "email": "alex@alex.com"
            },
            {
                "firstName": "Lidiya",
                "lastName": "Tekle",
                "age": 28,
                "email": "lidiya@lidiya.com"
            }
        ]
    }`
        const usersObj = JSON.parse(usersText, undefined, 4)
        console.log(usersObj)
    }
}

{
    /*Using a reviver function in JSON. Reviver function is an optional second argument in JSON.parse() method. 
    Its called for each key-value pair in the object and is used to transform the value before its added to final object.
    To use a reviver function as a formatter, the properties that need to be trasformed are entered with key first and value second.

    */

    const usersText = `{
        "users": [
        {
            "firstName": "Asabeneh",
            "lastName": "Yetayeh",
            "age": 250,
            "email": "asab@asb.com"
        },
        {
            "firstName": "Alex",
            "lastName": "James",
            "age": 25,
            "email": "alex@alex.com"
        },
        {
            "firstName": "Lidiya",
            "lastName": "Tekle",
            "age": 28,
            "email": "lidiya@lidiya.com"
        }
    ]
}`

    const usersObj = JSON.parse(usersText, (key, value) => {
        let newValue =
            typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
        return newValue
    })
    console.log(usersObj)

}

{
    //Converting Object to JSON. To convert regular object to JSON, we need JSON.stringify() method. This method takes one required parameter and two optional parameters. 
    //The Replacer is used as filter and the space is an indentation. If filter isn't needed, an "undefined" can be passed as a parameter
    // JSON.stringify(obj, replacer, space)
    //json text or data
    {
        const users = {
            Alex: {
                email: 'alex@alex.com',
                skills: ['HTML', 'CSS', 'JavaScript'],
                age: 20,
                isLoggedIn: false,
                points: 30
            },
            Asab: {
                email: 'asab@asab.com',
                skills: [
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'Redux',
                    'MongoDB',
                    'Express',
                    'React',
                    'Node'
                ],
                age: 25,
                isLoggedIn: false,
                points: 50
            },
            Brook: {
                email: 'daniel@daniel.com',
                skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
                age: 30,
                isLoggedIn: true,
                points: 50
            },
            Daniel: {
                email: 'daniel@alex.com',
                skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
                age: 20,
                isLoggedIn: false,
                points: 40
            },
            John: {
                email: 'john@john.com',
                skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
                age: 20,
                isLoggedIn: true,
                points: 50
            },
            Thomas: {
                email: 'thomas@thomas.com',
                skills: ['HTML', 'CSS', 'JavaScript', 'React'],
                age: 20,
                isLoggedIn: false,
                points: 40
            },
            Paul: {
                email: 'paul@paul.com',
                skills: [
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'MongoDB',
                    'Express',
                    'React',
                    'Node'
                ],
                age: 20,
                isLoggedIn: false,
                points: 40
            }
        }

        const txt = JSON.stringify(users, undefined, 4)
        console.log(txt) // text means JSON- because json is a string form of an object.
    }
}

{
    //Using filter array with JSON.stringify
    //using replacer as a filter. Keys we want to keep are put into an array, and used in place of the replacer
    const user = {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        country: 'Finland',
        city: 'Helsinki',
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
        age: 250,
        isLoggedIn: false,
        points: 30
    }

    const txt = JSON.stringify(user, ["firstName", "lastName", "country", "city", "age"], 4)
    console.log(txt)
}

{
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
    let age = 250;
    let isMarried = true
    const student = {
        firstName: 'Asabeneh',
        lastName: 'Yetayehe',
        age: 250,
        isMarried: true,
        skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
    }
    const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

    const strigifiedJSON = JSON.stringify(skills, undefined, 3)
    console.log(strigifiedJSON)

    const strigifiedAGE = JSON.stringify(age, undefined, 2)
    console.log(strigifiedAGE)
    const strigifiedMarried = JSON.stringify(isMarried, undefined, 2)
    console.log(strigifiedMarried)
    const strigifiedStudent = JSON.stringify(student, undefined, 2)
    console.log(strigifiedStudent)

    const stringifyFiltered = JSON.stringify(student, ["firstName", "lastName", "skills"], 2)
    console.log(stringifyFiltered)


    const txtObject = JSON.parse(txt, undefined, 4)
    console.log(txtObject)
}
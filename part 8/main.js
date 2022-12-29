let a = "Javascript" // Global scope object, accessible anywhere within the file;
let b = 10; // Global scope object, accessible anywhere within the file;

{   // Window Global Object
    a = 10;                // Declaring a variable without const, let or var makes it available in window as global scope object 
    b = 11;             // Declaring a variable without const, let or var makes it available in window as global scope object 

    function letsLearnScope() {
        console.log(a, b)
        if (true) {
            console.log(a, b)
        }
    }
    console.log(letsLearnScope())
}

{
    function letsLearnScope() {
        console.log(a, b)       //Javascript 10, values accesed from global variable
        if (true) {
            let a = "Python";
            let b = 100;
            console.log(a, b)   //Python 100, values re-assigned within function code execution block, console logged within function to display newly assigned values
        }
        console.log(a, b)
    }
    letsLearnScope();
    console.log(a, b);   //Global values accessed again, values assigned within function were not saved.
}

{
    // -------------Local scope objects. Such objects can only be accessed within certain code block. --------
    //Block scope
    //Function scope

    function letsLearnScope1() {
        console.log(a, b)  // Values accessed from global scope objects
        let value = false;
        if (true) {                // Variables declared from outside function can be accessed within function, but objects declared within function are local, and thus can't be accessed outside of the function
            let a = "Python";
            let b = 20;
            let c = 30;
            let d = 40;
            value = !value;
            console.log(a, b, c, value) // Python 20 30 true; Accessing values assigned within function, thus making the values local. They exist only within this function's execution block
        }
        console.log(a, b, c, value) // variable "c" can't be accessed, as it was declared within function execution block, and thus doesn't exist outside of it
    }
    // letsLearnScope1()
    // console.log(a, b, c, value)   //Javascript 10 is accessible as global scope object values, "c" and "value" dont exist outside of the function they were declared in
}

{
    //var variable is scope to either function only, or global scope. Only accessible as global variable if declared outside of function, or only accessible within the function it was declared in


    function letslearnScope1() {
        var gravity = 9.81;
        console.log(gravity)
    }
    console.log(gravity) //<-------- Not accessible, var isn't accessible outside of function if defined within it 

    if (true) {
        var gravity = 9.81
        console.log(gravity)
    }
    console.log(gravity);           //<------ "gravity" is accessible, since it's being acccessed while still in function block.

    for (var i = 0; i < 3; i++) {
        console.log(i)
    }
    console.log(i)
}
//const and let are only available as global variables if declared outside the function, or accessible only within code block in which they were declared
{

    function letsLearnScopeJS() {
        const gravity = 9.81
    }
    console.log(gravity)      //<------- "gravity" can't be accessed, as its declared within function block and can't be accessed from outside

    if (true) {
        const gravity = 9.81
        console.log(gravity)
    }
    console.log(gravity) //<------"gravity" can't be accessed, as its declared within function block and can't be accessed from outside


    for (let i = 0; i < 3; i++) {
        console.log(i)
    }
}

{
    //Objects. 
    //This is an example of an empty object
    const person = {}
}

{
    //Object with values. All the properties in this object are key - value pairs. First  paremeter is key, second parameter is a value;
    const rectangle = {
        lenght: 20,            //Key - length. Value - 20
        width: 20                 //Key - width. Value - 20
    }
    console.log(rectangle)



    //Object with multiple key - value pairs, and an "skills" key with an array as a value, and a boolean 

    const person = {
        firstName: "Dorian",                           //Key - firstName. Value - "Dorian"
        lastName: "Ashgray",                              //Key - lastName. Value - "Ashgray"
        age: 28,
        country: "Japan",
        city: "Tokyo",
        skills: [                                 //Key - skills.  Value - array of values
            "HTML",
            "CSS",
            "Javascript",
            "React",
            "Node.js",
            "MongoDB",
            "Python",
            "D3.js"
        ],
        isMarried: true                             //Boolean. key - isMarried. Value - true;
    }

    console.log(person);
}

{
    //Accessing values from an object. Can be accessed using either a square bracket and a quote, or "." followed by key-name if the key-name is one word.

    const person = {
        firstName: "Dorian",                           //Key - firstName. Value - "Dorian"
        lastName: "Ashgray",                              //Key - lastName. Value - "Ashgray"
        age: 28,
        country: "Japan",
        city: "Tokyo",
        skills: [                                 //Key - skills.  Value - array of values
            "HTML",
            "CSS",
            "Javascript",
            "React",
            "Node.js",
            "MongoDB",
            "Python",
            "D3.js"
        ],
        getFullName: function () {
            return `${this.firstName}${this.lastName}`
        },
        phoneNumber: "+5448443444198",
        isMarried: true                             //Boolean. key - isMarried. Value - true;
    }

    //Accessing values from singe-word key-names using "."
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.skills);
    console.log(person.getFullName());
    console.log(person.phoneNumber);

    //Accessing values using brackets and quotes
    console.log(person["firstName"]);
    console.log(person["lastName"]);
    console.log(person["skills"]);
    console.log(person["phoneNumber"]);
    console.log(person["getFullName"]());
}

{
    //Creating Object Methods
    //getFullname function is an object property. "this" word refers to the object itself. Can be used to access different properties of the object.
    //Arrow functions cannot be used as object methods.
    const person = {
        firstName: "Dorian",                           //Key - firstName. Value - "Dorian"
        lastName: "Ashgray",                              //Key - lastName. Value - "Ashgray"
        age: 28,
        country: "Japan",
        city: "Tokyo",
        skills: [                                 //Key - skills.  Value - array of values
            "HTML",
            "CSS",
            "Javascript",
            "React",
            "Node.js",
            "MongoDB",
            "Python",
            "D3.js"
        ],
        getFullName: function () {                 // Object property, a.k.a. object method
            return `${this.firstName}${this.lastName}`       // "this" refers to object itself
        },
        phoneNumber: "+5448443444198",
        isMarried: true                             //Boolean. key - isMarried. Value - true;
    }
    console.log(person.getFullName());       //"person" identifies the object to get values from, "getFullName" is the method to get values with.
}


{
    // Contents of an object can be changed after object was created
    const person = {
        firstName: "Dorian",                           //Key - firstName. Value - "Dorian"
        lastName: "Ashgray",                              //Key - lastName. Value - "Ashgray"
        age: 28,
        country: "Japan",
        city: "Tokyo",
        skills: [                                 //Key - skills.  Value - array of values
            "HTML",
            "CSS",
            "Javascript",
            "React",
            "Node.js",
            "MongoDB",
            "Python",
            "D3.js"
        ],
        getFullName: function () {
            return `${this.firstName}${this.lastName}`
        },
        phoneNumber: "+5448443444198",
        isMarried: true,            //Boolean. key - isMarried. Value - true;
    }
    person.nationality = "Japanese"                 //Adds a new property "nationality" with a value "Japanese" to the object
    person.country = "China"                        //Modifies property "country" by changing value to "China"
    person.title = "student"                        //Adds a new property "title" with the value "student" to the object
    person.skills.push("Meteor")                    //Modifies "skills" property by pushing value "Meteor" to the value array
    person.skills.push("SaSS")                      //Modifies "skills" property by pushing value "SaSS" to the value array
    person.isMarried = false;                       //Modifies "isMarried" boolean by adding value "false"

    person.getPersonInfo = function () {            //"getPersonInfo" is a method that belongs to "person" object. When called, returns info about object
        let skillsWithoutLastSkill = this.skills    //"skillsWithoutLastSkill" creates new variable from skills array with last element removed
            .splice(0, this.skills.length - 1)          //Splice removes all array elements except for the last one, beginning with element with index [0]
            .join(", ")                                 //Joins resulting array into a string
        let lastSkill = this.skills.splice(this.skills.length - 1)[0];   //"lastSkill" variable gets assigned the value of last item in skills array

        let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
        let fullName = this.getFullName();          //new variable "fullName" assigned "getFullName" method on "person" object
        let statement = `${fullName} is a ${this.title}. \n He lives in ${this.country}. \n He studies ${skills}.\n He is of a ${this.nationality} nationality`
        return statement;
    }
    console.log(person);
    console.log(person.getPersonInfo());
}

{
    //Object Methods

    //Object.assign method  - copies the object without modifying the original object.
    const person = {
        firstName: "Dorian",
        lastName: "Ashgray",
        age: 28,
        country: "Japan",
        city: "Tokyo",
        skills: [
            "HTML",
            "CSS",
            "Javascript",
            "React",
            "Node.js",
            "MongoDB",
            "Python",
            "D3.js"
        ],
        address: {
            street: "2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan",
            poBox: "PQ7W+WM Taito City",
            city: "Tokyo"

        },
        getPersonInfo: function () {
            return `I am ${this.firstName}, I live in ${this.country}. I am ${this.age}. I really like ${this.city}`
        },
        phoneNumber: "+5448443444198",
        isMarried: true,
    }

    const copyPerson = Object.assign({}, person)  //Copies "person" object to a new variable "copyPerson"
    console.log(copyPerson);

    //Object.keys - gets the keys or properties of an object as an array
    const keys = Object.keys(copyPerson);
    console.log(keys);
    const address = Object.keys(copyPerson.address);
    console.log(address)

    //Object.values - gets the values of a an object as an array
    const values = Object.values(copyPerson);
    console.log(values);

    //Object.entries - gets keys AND values from an object as an array
    const entries = Object.entries(copyPerson);
    console.log(entries);

    //hasOwnProperty - checks if specific key or property exists within object. Returns a "true" or "false" boolean as an answer
    console.log(copyPerson.hasOwnProperty("score"));
    console.log(copyPerson.hasOwnProperty("city"));
    console.log(copyPerson.hasOwnProperty("Tokyo"));
}

{
    const dog = {
        name: "Cerberus",
        legs: 4,
        color: "Ice White",
        bark: function () {
            return "Woof woof"
        }
    }
    console.log(dog);

    const getValues = Object.values(dog);
    console.log(getValues);
    console.log(dog.name)
    console.log(dog.legs)
    console.log(dog.color)
    console.log(dog.bark())

    dog.breed = "Hellhound",
        dog.getDogInfo = function () {
            let statement = `${this.name}, ${this.legs}, ${this.breed}, ${this.color}`
            return statement;
        }
    console.log(dog.getDogInfo())
}

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
            skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
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
            skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
            age: 20,
            isLoggedIn: false,
            points: 40
        }
    }


    let manySkills = 0;
    let userMaxSkills;

    for (const user in users) {
        if (users[user].skills.length > manySkills) {
            manySkills = users[user].skills.length;
            userMaxSkills = user;
        }
    }
    console.log(`user with most skills is ${userMaxSkills}`)


}

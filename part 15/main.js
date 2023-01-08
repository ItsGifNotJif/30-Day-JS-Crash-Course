//-----------------------------Classes--------------------//

{
    /*Classes. Classes are functions used to create objects in Javascript. Everything in JS is an object, with its own properties and methods.
    Classes are basically templates for object creation. Classes contain all details about object properties and behaviours. Classes help reduce repetition of code, and increase readability and accessibility of JS code.
    Classes are created with "class" keyword, followed by the name of the class. */

    class className {
        //code goes here. This is where behaviours and properties are defined.
    }
}

{
    //Example class creation
    class person {
        //some code here
    }
}
{
    //Class instantiation. This means creation of an object from a class. This is done with keyword "new" followed by name of the class().
    class Person {
        //some code here
    }
    const person = new Person()
    console.log(person);
}

{
    //Class constructor. Constructor is JS built-in functin that allows creation of a blueprint for an object. This starts with keyword "constructor" followed by (). Inside () properties of the to-be-created object are defined.
    //.this keyword is used to attach constructor parameters to the class.

    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    const person = new Person()
    console.log(person)

    const person1 = new Person("Dorian", "Ashgray")         //we can pass values when instantiating the class
    console.log(person1)  //returns created person1 object, using parameters from "Person" class and values passed from instantiation 

    //Class instantiation can be used to create as many new objects as necessary, all having different values but using exactly the same structure as original class template
    const person2 = new Person("Dorian", "Hawkmoon")
    const person3 = new Person("Elric", "Melnibone")
    const person4 = new Person("Oswald", "Bastable")

}

{
    //Creating class with multiple different properties
    class Person {
        constructor(firstName, lastName, age, country, city) {
            this.firstName = firstName,
                this.lastName = lastName,
                this.age = age,
                this.country = country,
                this.city = city
        }
    }
    const person1 = new Person("Dorian", "Ashgray", 28, "Japan", "Tokyo")
    console.log(person1)
}

{
    //Default values with classes constructor. These values will be the default values of no other values are entered, just like with regular objects
    class Person {
        constructor(
            firstName = "Dorian",
            lastName = "Ashgray",
            age = 28,
            country = "Japan",
            city = "Tokyo"
        ) {
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.country = country
            this.city = city
        }
    }
    const person1 = new Person()
    const person2 = new Person("Elric", "Melnibone", 35, "Shenzen", "China")
    console.log(person1)            //default values will be assigned and logged to console
    console.log(person2)            //values passed during instantiation of the class will be assigned and logged to console
}

{
    //Class methods. Within classes, we can create class methods. Methods are JS functions defined inside the class. These can be used to perform an action, a calculation, or to return a value. Class methods are called on the class itself.
    class Person {
        constructor(firstName, lastName, age, country, city) {
            this.firstName = firstName,
                this.lastName = lastName,
                this.age = age,
                this.country = country,
                this.city = city
        }
        getFullName() {
            const fullName = this.firstName + " " + this.lastName
            return fullName
        }
    }

    const person1 = new Person("Dorian", 'Ashgray', 28, "Japan", "Tokyo")
    const person2 = new Person("Elric", "Melnibone", 35, "Shenzen", "China")

    console.log(person1.getFullName())              //Function is called on class object itself
    console.log(person2.getFullName())
}

{
    //Properties with initial value. Sometimes we need properties to have some initial value, e.g. if playing a game, initial score should be 0. These initial values are set within class constructor.
    class Person {
        constructor(firstName, lastName, age, country, city) {
            this.firstName = firstName,
                this.lastName = lastName,
                this.age = age,
                this.country = country,
                this.city = city,
                this.score = 0,
                this.skills = []
        }
        getFullName() {
            const fullName = this.firstName + " " + this.lastName
            return fullName
        }
    }
    const person1 = new Person("Dorian", 'Ashgray', 28, "Japan", "Tokyo")
    const person2 = new Person("Elric", "Melnibone", 35, "Shenzen", "China")

    console.log(person1)
    console.log(person1.score)          //logging initial value of "score", which is "0"
    console.log(person1.skills)         //logging initial value of "skills", which is nothing, as there are no elements in the array
    console.log(person2)
    console.log(person2.score)          //logging initial value of "score", which is "0"
    console.log(person2.skills)         //logging initial value of "skills", which is nothing, as there are no elements in the array

}

{
    //Getter. Getter is a method that gets the value of object's property. Getter is defined using "get" keyword, followed by a function that returns the value of the property.
    class Person {
        constructor(firstName, lastName, age, country, city) {
            this.firstName = firstName,
                this.lastName = lastName,
                this.age = age,
                this.country = country,
                this.city = city,
                this.score = 0,
                this.skills = []
        }
        getFullName() {
            const fullName = this.firstName + " " + this.lastName
            return fullName
        }
        get getScore() {
            return this.score
        }
        get getSkills() {
            return this.skills
        }
    }
    const person1 = new Person("Dorian", 'Ashgray', 28, "Japan", "Tokyo")
    const person2 = new Person("Elric", "Melnibone", 35, "Shenzen", "China")
    console.log(person1)
    console.log(person1.getScore)       //Don't need parentheses to call getter method
    console.log(person1.getSkills)      //logs empty array, as "skills" property doesn't contain any elements 
    console.log(person2)
    console.log(person2.getScore)           //logs "0" because "score" property has a value of 0
    console.log(person2.getSkills)

}

{
    //Setter. Setters allow modification of certain values. Setters are written using "set" keyword, followed by a function
    class Person {
        constructor(firstName, lastName, age, country, city) {
            this.firstName = firstName,
                this.lastName = lastName,
                this.age = age,
                this.country = country,
                this.city = city,
                this.score = 0,
                this.skills = []
        }
        getFullName() {
            const fullName = this.firstName + " " + this.lastName
            return fullName
        }
        get getScore() {
            return this.score
        }
        get getSkills() {
            return this.skills
        }
        set setScore(score) {
            this.score += score
        }
        set setSkills(skill) {
            this.skills.push(skill)
        }
    }

    const person1 = new Person("Dorian", 'Ashgray', 28, "Japan", "Tokyo")
    const person2 = new Person("Elric", "Melnibone", 35, "Shenzen", "China")

    person1.setScore = 1;           //modifies value of "score" property and saves it to person1 object
    person1.setSkills = "HTML"      //modifies values of "skills" property and saves them to person1 object
    person1.setSkills = "CSS"
    person1.setSkills = "JS"

    person2.setScore = 2;           //modifies value of "score" property and saves it to person2 object
    person2.setSkills = "React";    //modifies values of "skills" property and saves them to person2 object
    person2.setSkills = "SCSS";
    person2.setSkills = "MongoDB";

    console.log(person1)
    console.log(person1.getScore)       //Don't need parentheses to call getter method
    console.log(person2)
    console.log(person2.getScore)       //logs score of "2" because "score" property was modified with setter method and given a value of "2"
    console.log(person2.getSkills)
}

{
    class Person {
        constructor(firstName, lastName, age, country, city) {
            this.firstName = firstName,
                this.lastName = lastName,
                this.age = age,
                this.country = country,
                this.city = city,
                this.score = 0,
                this.skills = []
        }
        getFullName() {
            const fullName = this.firstName + " " + this.lastName
            return fullName
        }
        get getScore() {
            return this.score
        }
        get getSkills() {
            return this.skills
        }
        set setScore(score) {
            this.score += score
        }
        set setSkills(skills) {
            this.skills.push(skills)
        }
        getPersonInfo() {
            let fullName = this.getFullName()
            let skills =
                this.skills.length > 0 &&
                this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
            let formattedSkills = skills ? `He knows ${skills}` : ''

            let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
            return info
        }
    }
    const person1 = new Person("Dorian", 'Ashgray', 28, "Japan", "Tokyo")
    const person2 = new Person("Elric", "Melnibone", 35, "Shenzen", "China")
    const person3 = new Person("Corum", "Jailyn", 75, "RedCastle", "Middle-Earth")

    person1.setScore = 1;           //modifies value of "score" property and saves it to person1 object
    person1.setSkills = "HTML"      //modifies values of "skills" property and saves them to person1 object
    person1.setSkills = "CSS"
    person1.setSkills = "JS"

    person2.setScore = 2;           //modifies value of "score" property and saves it to person2 object
    person2.setSkills = "React";    //modifies values of "skills" property and saves them to person2 object
    person2.setSkills = "SCSS";
    person2.setSkills = "MongoDB";

    console.log(person1.getScore)
    console.log(person2.getScore)

    console.log(person1.getSkills)
    console.log(person2.getSkills)
    console.log(person3.getSkills)

    console.log(person1.getPersonInfo())
    console.log(person2.getPersonInfo())
    console.log(person3.getPersonInfo())
}

{
    //Static method. Static method is a method that is associated wiht a class, rather than with the instance of a class. Static methods are called on the class itself, not on the instance of a class.
    //To define a static method, "static" keyword is used.
    class Person {
        constructor(firstName, lastName, age, country, city) {
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.country = country
            this.city = city
            this.score = 0
            this.skills = []
        }
        getFullName() {
            const fullName = this.firstName + ' ' + this.lastName
            return fullName
        }
        get getScore() {
            return this.score
        }
        get getSkills() {
            return this.skills
        }
        set setScore(score) {
            this.score += score
        }
        set setSkill(skill) {
            this.skills.push(skill)
        }
        getPersonInfo() {
            let fullName = this.getFullName()
            let skills =
                this.skills.length > 0 &&
                this.skills.slice(0, this.skills.length - 1).join(', ') +
                ` and ${this.skills[this.skills.length - 1]}`

            let formattedSkills = skills ? `He knows ${skills}` : ''

            let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
            return info
        }
        static favoritSkill() {
            const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"]
            const index = Math.floor(Math.random() * skills.length)
            return skills[index]
        }
        static showDateTime() {
            let now = new Date()
            let year = now.getFullYear()
            let month = now.getMonth() + 1
            let date = now.getDate()
            let hours = now.getHours()
            let minutes = now.getMinutes()
            if (hours < 10) {
                hours = '0' + hours
            }
            if (minutes < 10) {
                minutes = '0' + minutes
            }

            let dateMonthYear = date + '.' + month + '.' + year
            let time = hours + ':' + minutes
            let fullTime = dateMonthYear + ' ' + time
            return fullTime
        }
    }
    console.log(Person.favoritSkill())
    console.log(Person.showDateTime())

}
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

{
    /*Inheritance. Classes can inherit from other classes, allowing them to access properties and methods of the parent class. 
    To inherit class, "extends" keyword is used. 
    Child class can also have its own properties and methods, overriding or extending ones from inherited the parent class.
    Inheritance is used to reduce the repetition of code. */

    //syntax
    class ChildClassName extends{
        //code to be executed goes into code block
    }

    class Person {                  //This is the parent class, one from which child class will inherit properties and methods
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


    class Student extends Person {                              //Child "student" class "extends" (inherits) methods/peoperties from parent class "Person"
        saySomething() {
            return "I am a child of the parent class (superclass) Person"
        }
    }

    const student1 = new Student("Dorian", "Ashgray", 28, "Japan", "Tokyo")
    console.log(student1)
    console.log(student1.saySomething())
    console.log(student1.getFullName())
    console.log(student1.getPersonInfo())
}

{
    /*Overriding methods. Method overriding is a way to implement a method that is defined in superclass "parent class" in a subclass "child class".
    When a method is overriden, the subclass "childclass" can define its own implementation of said method, instead of using implementation inherited from superclass "parent class"
    This is useful when child class needs to inherit all properties of parent class, but also needs to implement some specific methods differently than parent class.
    To customize the methods and to add additional properties to subsclass "child class", a constructor function has to be used. 
    Inside constructor function, a super-function is called (reference to parent class) to access properties of parent class "super class" */


    class Person {                  //This is the parent class, one from which child class will inherit properties and methods. This can also be called "superclass" in terms of inheritance and overriding methods.
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

    class Student extends Person {
        constructor(firstName, lastName, age, country, city, gender) {
            super(firstName, lastName, age, country, city)
            this.gender = gender
        }
        saySomething() {
            return "I am a child of the parent class (superclass) Person"
        }
        getPersonInfo() {
            let fullName = this.getFullName()
            let skills =
                this.skills.length > 0 &&
                this.skills.slice(0, this.skills.length - 1).join(",") +
                `and ${this.skills[this.skills.length - 1]}`

            let formattedSkills = skills ? `He knows ${skills}` : ""
            let pronoun = this.gender == "Male" ? "He" : "She"

            let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills} `
            return info
        }
    }

    const student1 = new Student("Elric", "Melnibone", 70, "Mordor", "Middle-Earth", "Male")
    const student2 = new Student("Gandalf", "Mayar", 1000, "Void", "Shire")
    student1.setScore = 1;
    student1.setSkill = "HTML"
    student1.setSkill = "CSS"
    student1.setSkill = "JS"

    student2.setScore = 2;
    student2.setSkill = "MongoDB"
    student2.setSkill = "SCSS"
    student2.setSkill = "React"

    console.log(student1)

    console.log(student1.saySomething())
    console.log(student1.getFullName())
    console.log(student1.getPersonInfo())



    console.log(student2.saySomething())
    console.log(student2.getFullName())
    console.log(student2.getPersonInfo())
}


{
    class Animal {
        constructor(name, age, color, legs) {
            this.name = name,
                this.age = age,
                this.color = color,
                this.legs = legs
        }
        saySomething() {
            return "some sound an animal makes"
        }
    }


    class Dog extends Animal { }
    const dog = new Dog("Bethoven", 12, "White", "4")

    class Cat extends Animal { 
        saySomething(){
            return "Cat actually meows"
        }
    }
    const cat = new Cat("Garfield", 5, "black", "4")

    console.log(dog)
    console.log(dog.saySomething())
    console.log(cat)
    console.log(cat.saySomething())

}
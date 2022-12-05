
{
    let isLightOn = true;
    let isRaining = false;
    let isHungry = false; 
    let isMarried = true;
    let trueValue = 4 > 3;
    let falseValue = 4 < 3;
}

{
    let firstname 
    console.log(firstname);
}

{
    let empty = null
    console.log(empty)
}
{
    let numOne = 4;
    let numTwo = 3;
    let sum = numOne + numTwo;
    let diff = numOne - numTwo;
    let mult = numOne * numTwo;
    let div = numOne / numTwo;
    let remainder = numOne % numTwo;
    let powerOf = numOne ** numTwo;

    console.log(sum, diff, mult, div, remainder, powerOf );
}

{
    const PI = 3.14;   
    let radius = 100;

    const areaOfCircle = PI * radius * radius;
    console.log(areaOfCircle);

    const gravity = 9.81;
    let mass = 72;

    const weight = mass * gravity;
    console.log(weight);

    const boilingPoint = 100;
    const bodyTemp = 37;

    console.log(
        `The boiling point of water is ${boilingPoint} C. The average body temperature of a human is ${bodyTemp} C. The averate gravity on planet earth is ${gravity} m/s2.`
    )
}
{
    console.log(3 > 2);
    console.log(3 >= 2);
    console.log(3 < 2);
    console.log(2 < 3);
    console.log(2 <= 3);
    console.log(3 === 2);
    console.log(3 != 2);
    console.log(3 === "3");
    console.log(3 == "3");
    console.log(3 != 3);
    console.log(0 == false);
    console.log(0 === false);
    console.log(0 == '');
    console.log(0 == ' ');
    console.log(0 === '');
    console.log(1 == true);
    console.log(1 === true);
    console.log(undefined == null);
    console.log(undefined === null);
    console.log(NaN == NaN);
    console.log(NaN === NaN);
    console.log(typeof NaN);

    console.log('mango'.length == 'avocado'.length);
    console.log('mango'.length != 'avocado'.length);
    console.log('mango'.length < 'avocado'.length);
    console.log('milk'.length == 'meat'.length);
    console.log('milk'.length != 'meat'.length);
    console.log('tomato'.length == 'potato'.length);
    console.log('tomato'.length > 'potato'.length);
}

{
    // && ampersand operator example (both have to be true)
    const check = 4 > 3 && 10 > 5;
    console.log(check);
    const check1 = 4 > 3 && 10 < 5;
    console.log(check1);
    const check2 = 4 < 3 && 10 < 5;
    console.log(check2);
}

{
    // || pipe or operator, example (either one has to be true)
    const check = 4 > 3 || 10 > 5;
    console.log(check);
    const check1 = 4 > 3 || 10 < 5;
    console.log(check1);
    const check2 = 4 < 3 || 10 < 5;
    console.log(check2);
}

{
    // !(negation) example. Negates true to false and false to true. 
    let check = 4 > 3;
    console.log(check);
    let check1 = !(4 > 3);
    console.log(check1);
    let lightIsOn = true;
    console.log(lightIsOn);
    let lightIsOff = !lightIsOn;
    console.log(lightIsOff);
    let isMarried = !false
    console.log(isMarried);
}

{
    // Increment operator
    // Pre-increment
    let count = 0;
    console.log(++count);
    console.log(count);

    // Post-increment
    let count1 = 0;
    console.log(count1++);
    console.log(count);
}

{
    // Decrement Operator
    // Pre-decrement
    let count = 0;
    console.log(--count);
    console.log(count);

    // Post-decrement
    let count1 = 0;
    console.log(count1--);
    console.log(count);
}

{
    // Ternary operator. Allows to write a condition set
    let isRaining = true;
    isRaining
    ? console.log('You need a raincoat')
    : console.log("You don't need a raincoat")

    let isRaining2 = false;
    isRaining2
    ? console.log('You need a raincoat')
    : console.log("You don't need a raincoat")

    let number = 5
    number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`);

    let number1 = -5
    number1 > 0
    ? console.log(`${number1} is a positive number`)
    : console.log(`${number1} is a negative number`)
}

{
    // let number = prompt('required text', 'optional text');
    // console.log(number);
}

{
    // const agree = confirm('Are you sure you want to delete?');
    // console.log(agree);
}

{   // Date Objects and Time Objects. Determine current time parameters. All object values are started with .get command
    const now = new Date();
    console.log(now);
    console.log(now.getFullYear());
    console.log(now.getMonth());
    console.log(now.getDate());
    console.log(now.getDay());
    console.log(now.getHours());
    console.log(now.getMinutes());
    console.log(now.getSeconds());
    console.log(now.getMilliseconds());
    console.log(now.getTime());  // Provides time starting from January 1st, 1970. A.k.a. Unix time.
}


{
    const firstName = 'Dorian'
    const lastName = 'Ashgray'
    const country = 'Lithuania'
    const city = 'Vilnius'
    const age = 25;
    const isMarried = false;
    const year = 2022;

    console.log(typeof firstName);
    console.log(typeof lastName);
    console.log(typeof country);
    console.log(typeof city);
    console.log(typeof age);
    console.log(typeof isMarried);
    console.log(typeof year);
}

{
    console.log('10' === 10);
    console.log('9.8' === 10);


    const truthy = true;
    console.log(truthy);
    console.log(10 == 10);
    console.log('10' === '10');

    const falsy = false;
    console.log(falsy);
    console.log(10 === "10");
    console.log(3 > 5)
}

{
    console.log( 4 > 3)
    console.log(4 >= 3)
    console.log(4 < 3)
    console.log( 4 <= 3)
    console.log(4 == 4)
    console.log(4 === 4)
    console.log(4 != 4)
    console.log(4 !==4 )
    console.log(4 != "4")
    console.log(4 == "4")
    console.log(4 === '4')
    console.log('Python'.length > 'Jargon'.length)
}

{
    console.log(4 > 3 && 10 < 12);
    console.log(4 > 3 && 10 > 12);
    console.log(4 > 3 || 10 < 12);
    console.log(4 > 3 || 10 > 12)
    console.log(!(4 > 3))
    console.log(!(4 < 3))
    console.log(!(false))
    console.log(!(4 > 3 && 10 < 12))
    console.log(!(4 > 3 && 10 > 12))
    console.log(!(4 === '4'))
    console.log("There is no 'on' in both dragon and python");
}

{   
    const dateNow = new Date();
    console.log(dateNow.getFullYear());
    console.log(dateNow.getMonth());
    console.log(dateNow.getDate());
    console.log(dateNow.getDay());
    console.log(dateNow.getHours());
    console.log(dateNow.getMinutes());
}

{
    let triangle = prompt('Enter base' );
    let triangle2 = prompt('Enter height' );
    let result = 0.5 * triangle * triangle2;
    console.log(result); 
}


{
    let triangle = prompt('Enter side A');
    let triangle1 = prompt('Enter side B');
    let triangle2 = prompt('Enter side C');
    let result = 1 * (triangle + triangle1 + triangle2);
    console.log(result);
}

{
    let length = prompt("Enter Length");
    let width = prompt("Enter Width");
    let area = length * width;
    let perimeter = 2 * (length + width);
    console.log(area, perimeter);
}

{
    let radius = prompt("Enter radius");
    let pi = Math.PI;
    let area = pi * radius * radius;
    let circle = 2 * pi * radius;
    console.log(area, circle );
}

{
    let interceptY = prompt("Enter Y");
    let interceptX = (2 * interceptY) -2;
    console.log(interceptX);
}

{
    let y1 = 10;
    let y2 = 25;
    let x1 = 12;
    let x2 = 124;
    let slope = (y2 - y1) / (x2 - x1);
    console.log(slope);
}

{
    let hours = prompt("Enter Hours Per Week")
    let rate  = prompt("Enter hourly rate");
    let salary = hours * rate;
    console.log(salary);
}
{
    let name = "Antanas"
    if(name.length > 7){
        console.log('name is long')
    }else{
        console.log('name is short')
    }
}

{
    let firstName = 'Dorian';
    let lastName = 'Ashgray';
    let nameComp = firstName.length < lastName.length;
    nameComp
    ? console.log("Your first name is longer than your last name")
    : console.log("Your first name is shorter than your last name")
}

{
    let myAge = 250;
    let yourAge = 25;
    console.log("I am " + (myAge - yourAge) + " years older than you");
}

{
    let birthyear = prompt("Enter your birth yearh");
    const year = new Date();
    let age = year.getFullYear() - birthyear;
    age > 18
    ? console.log("You are " + `${age}` + " years old. You can drive now" )
    : console.log("You are " + `${age}` + " years old. You can drive in " + (18 - age) + " years from now")
}

{
    let age = prompt("Enter years");
    let lifespan = age * 365 * 24 * 60 * 60;
    console.log(lifespan);
}
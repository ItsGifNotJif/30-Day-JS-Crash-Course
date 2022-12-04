{
    let numOne = 3;
    let numTwo = 3;

    console.log(numOne == numTwo);

    let js = 'Javascript';
    let py = 'Python';

    console.log(js == py);

    let lightOn = true;
    let lightOff = false;

    console.log(lightOn == lightOff);
}

{
    let nums = [1, 2, 3];

    console.log(nums);
}


{
    let numsOne = [1, 2, 3, 4];
    let numsTwo = [1, 2, 3, 4];

    console.log(numsOne == numsTwo);
}

{
    let age = 35;
    const gravity = 9.81;
    let mass = 72;
    const PI = 3.14;

    const boilingPoint = 100;
    const bodyTemp = 37;

    console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);
}

{
    const PI = Math.PI;

    console.log(PI);
    console.log(Math.round(PI));
    console.log(Math.round(9.81));
    console.log(Math.floor(PI));
    console.log(Math.ceil(PI));
    console.log(Math.min(-5, 3, 20, 4, 5, 10));
    console.log(Math.max(-5, 3, 20, 4, 5, 10));
    
    const randNum= Math.random();
    console.log(randNum);

    const num = Math.floor(Math.random () * 11);
    console.log(num);

    console.log(Math.abs(-10));
    console.log(Math.sqrt(100));
    console.log(Math.sqrt(2));
    console.log(Math.pow(3, 2));
    console.log(Math.E);
    console.log(Math.log(2));
    console.log(Math.log(10));
    console.log(Math.LN2);
    console.log(Math.LN10);

    Math.sin(0);
    Math.sin(60);
    Math.cos(0);
    Math.cos(60);
}

{
    let randomNum = Math.random();
    let numButtonZeroAndTen = randomNum * 11;
    console.log(numButtonZeroAndTen);
}
{   
    let randomNum = Math.random();
    let numButtonZeroAndTen = randomNum * 11;
    let randomNumRoundToFloor= Math.floor(numButtonZeroAndTen);
    console.log(randomNumRoundToFloor);
}

{
    let space = " ";
    let firstName = 'Dorian';
    let lastName = "Ashray";
    let country = "Lithuania";
    let city = "Vilnius";
    let language = "Javascript";
    let job = "student";
    let quote = "This is just and exercise";
    let quoteWithBackTick = `Some words here I guess`;

    const  fullSentence = firstName + space + lastName + space + job + space + country;

    console.log(fullSentence);
}

{
    console.log('This is a 30 Day Javascript Challenge');
    console.log('Days\tTopics\tExercises');
    console.log('Day 1\t3\t5');
    console.log('Day 2\t3\t5');
    console.log('Day 3\t3\t5');
    console.log('Day 4\t3\t5');
    console.log('This is a backlash symbol (\\)');
    console.log('In every programming language it starts with \"Hello World!"\ ');
    console.log("In every programming language it starts with \'Hello World!'\ ");
    console.log("This is just some text here, \ 'separated by backslash' \ spaces ");
}

{
    // `String literal text`
    // `String literal text ${expression}`
}


{
    console.log(`The Sum of 2 and 3 is 5`);
    let a = 2;
    let b = 3;
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
}

{
    let firstName = 'Dorian'
    let lastName = 'Ashgray'
    let country = 'Lithuania'
    let city = 'Vilnius'
    let language = 'JavaScript'
    let job = 'Student'
    let age = 27
    let fullName = firstName + ' ' + lastName

    let personalInfoOne = `I am ${firstName}. I am ${age} years old. I live in ${country}. I live in ${city}`;
    let personalInfoTwo = `My name is ${firstName}. I'm trying to learn ${language}, but it's going very slowly. I am ${age} years old, so it's about time I learn something`;

    console.log(personalInfoOne);
    console.log(personalInfoTwo);
}

{
 let a = 2;
 let b = 3;
 console.log(`${a} is greater than ${b}: ${a > b}`);
}

{
    let js = "Javascript";
    console.log(js.length);
    let firstName = "Dorian";
    console.log(firstName.length);
}

{   
    let string = "Javascript";
    let firstLetter = string [0];
    console.log(firstLetter);

    let secondLetter = string[1]
    let thirdLetter = string[2]
    let fourthLetter = string[3]
    let fifthLetter = string[4]
    let sixthLetter = string[5]
    let seventhLetter = string[6]
    let eightLetter = string[7]
    let ninthLetter = string[8]
    let lastLetter = string[9]
    console.log(firstLetter, secondLetter, thirdLetter, fourthLetter, fifthLetter, sixthLetter, seventhLetter, eightLetter, ninthLetter, lastLetter);

    let lastIndex = string.length-1;

    console.log(lastIndex);
    console.log(string[lastIndex]);
}

{   // Converts all characters in indicated string into UPPERCASE characters //
    let string = "Javascript";
    console.log(string.toUpperCase());

    let firstName = "Dorian";
    console.log(firstName.toUpperCase());

    let country = "Lithuania";
    console.log(country.toUpperCase());
}

{   // Converts all characters in indicated string to LOWERCASE characters //
    let string = "Javascript";
    console.log(string.toLowerCase());

    let firstName = "Dorian";
    console.log(firstName.toLowerCase());

    let country = "Lithuania";
    console.log(country.toLowerCase());
}

{   /* Returns indicated substring from a string, Parammeter1 indicating from which Index[] to start, 
    Parameter2 indicating how many Indexes[] to return, e.g. substring(1, 5) starts at indexp[1] and returns values of the following 4 indexes */
    // Works in same way as .slice method in arrays //
    let string = "Javascript";
    console.log(string.substring(0, 4));
    console.log(string.substring(4, 10));
    console.log(string.substring(4));

    let country = "Finland";
    console.log(country.substring(3, 7));
    console.log(country.substring(0, 3));
    console.log(country.substring(3));
}

{ // Split method splits string at specified place, works just like .split in arrays //
    let string = "30 Days of Javascript";
    
    console.log(string.split());
    console.log(string.split(' '));
}

{
    let firstName = 'Dorian';
    console.log(firstName.split());
    console.log(firstName.split(''));
}

{   
    let countries = 'Finland, Lithuania, Sweden, Norway, Denmark, Ireland, United Kingdom';
    console.log(countries.split());
    console.log(countries.split(', '))
}

{   // Trims empty space in front and after string text //
    let string = "       30 Days of JavaScript          ";
    console.log(string.trim());
}

{   // Checks if indicated variable/string includes indicated substring, e.g. checks if 'Apple' includes 'a' //
    let string = '30 Days of Javascript';
    console.log(string.includes('30'));
    console.log(string.includes('Days'));
    console.log(string.includes('days'));
    console.log(string.includes('numberr'));
    console.log(string.includes(20));
}

{   // Replaces 1st parameter with 2nd paramenter in a variable indicated by .replace a.k.a. Replaces old substring with a new substring//
    let string = "30 Days of Javascript";
    console.log(string.replace('Java', 'Some Text'));
    console.log(string.replace('30', 'Infinte amount of'));
}

{
    // Returns value indicated in the index[] of charAt //
    let string = "30 days of Javascript";
    console.log(string.charAt(3));
    console.log(string.charAt(1));
    console.log(string.charAt(8));
}



{ 
    // Returns ASCII value of the character indicated in index[] of charCodeAt //
    let string = "30 days of Javascript";
    console.log(string.charCodeAt(3))
    console.log(string.charCodeAt(2))
    console.log(string.charCodeAt(4))
}

{   
    // indexOf returns the position of the first index in a substring, if it exists within indicated string. If such substring doesn't exist in indicated string, it returns -1. Case sensitive //
    let string = "30 days of Javascript";
    console.log(string.indexOf('d'));
    console.log(string.indexOf('days'));
    console.log(string.indexOf('Days'));
    console.log(string.indexOf('left'));
    console.log(string.indexOf('avascript'));
    console.log(string.indexOf(4));
}

{   
    // lastIndexOf returns the index of last substring in a string, if it exists within indicated string. If such substring doesn't exist in indicated string, it returs -1. Case sensitive //
    // e.g. it returns 43 for (javascript) in a string "30 days of Javascript, testing lastIndexOf Javascript". a.k.a. returns the last position of repeatedly used substring.
    let string = "30 days of Javascript, testing lastIndexOf";
    console.log(string.lastIndexOf('d'));
    console.log(string.lastIndexOf('days'));
    console.log(string.lastIndexOf('Days'));
    console.log(string.lastIndexOf('left'));
    console.log(string.lastIndexOf('Javascript'));
    console.log(string.lastIndexOf('x'));
    console.log(string.lastIndexOf('lastIndexOf'));
    console.log(string.lastIndexOf(4));
}

{
    // concat() joins many substrings to indicated substring, making a bigger string.
    let string = "30";
    console.log(string.concat("Days", "Of", "Javascript"))

    let country = 'Isl';
    console.log(country.concat('and'));
}   

{
    // startsWith checks if the indicated string starts with a specific substring, it returns a boolean value if true or false. Case sensitive
    let string = "Everest is the tallest mountain above sea level, but not the tallest mountain on the planet"
    console.log(string.startsWith("everest"));
    console.log(string.startsWith("Everest"));
    console.log(string.startsWith("mountain"));
}

{
    //endsWith checks if the indicated string ends with a specific substring, it returns a boolean value if true or false. Case sensitive
    let string = "Everest is the tallest mountain above sea level, but not the tallest mountain on the planet";
    console.log(string.endsWith('Mountain'));
    console.log(string.endsWith('planet'));
    console.log(string.endsWith('Planet'));
}

{
    // search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern. Returns -1 if match is not found. Case sensitive
    let string = "Javascript is an infuriating language to learn, it's not intuitive and doesn't make much sense."
    console.log(string.search('world'));
    console.log(string.search('is'));
    console.log(string.search('not'));
}

{
    // match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Case sensitive
    let string = "Javascript is an infuriating language to learn, it's not intuitive and doesn't make much sense."
    console.log(string.match('world'));
    console.log(string.match('is'));
    console.log(string.match('Is'));
}

{
    // repeat It repeats certain string as many time as is indicated in the parameter, eg. string.repeat(20) will repeat string 20 times.
    let string = "word1"
    console.log(string.repeat(20));
}

{
    let firstName = "Dorian";
    let lastName = "Ashgray";
    let country = "Lithuania";
    let city = "City"
    let age = 25;
    let job;

    console.log(typeof 'Dorian');
    console.log(typeof firstName);
    console.log(typeof lastName);
    console.log(typeof country);
    console.log(typeof 10);
    console.log(typeof 3.14);
    console.log(typeof false);
    console.log(typeof true);
    console.log(typeof NaN);
    console.log(typeof undefined);
    console.log(typeof null);
}

{
    // Converting String to Number. Any number inside quotes in a string will be converted into a number.

    let num = '10';
    let numInt = parseInt(num);
    console.log(numInt);

    let num1 = '10';
    let numInt1 = Number(num1);
    console.log(numInt1);

    let num2 = '10';
    let numInt2 = +num2;
    console.log(numInt2);
}

{
    // Converting String to Float. Any float number inside quotes in a string will be converted into normal float number
    let num = '9.81';
    let numInt = parseFloat(num);
    console.log(numInt);

    let num1 = '9.81';
    let numInt1 = Number(num1);
    console.log(numInt1);

    let num2 = '9.81';
    let numInt2 = +num2;
    console.log(numInt2);
}

{
    // Convert float numbers to integers.
    let num = 9.81;
    let numInt = parseInt(num);
    console.log(numInt); 
}

{
    let challenge = '   30 Days of Javascript   ';
    console.log(challenge);
    console.log(challenge.length);
    console.log(challenge.toUpperCase());
    console.log(challenge.toLowerCase());
    console.log(challenge.substring(3, 8));
    console.log(challenge.substring(0, 3 ));
    console.log(challenge.includes('script'));
    console.log(challenge.split(', '));
    console.log(challenge.split(' '));

    let array = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
    console.log(array.split(" "));

    console.log(challenge.replace("Javascript" , "Python"));
    console.log(challenge.charAt(15));
    console.log(challenge.charCodeAt('J'));
    console.log(challenge.indexOf('a'));
    console.log(challenge.lastIndexOf('a'));

    let sentence = 'You cannot end a sentence with because because because is a conjunction';
    console.log(sentence.indexOf('because'));
    console.log(sentence.lastIndexOf('because'));
    console.log(sentence.search('because'));

    console.log(challenge.trim());
    console.log(challenge.startsWith('   30'));
    console.log(challenge.endsWith('Javascript   '));
    console.log(challenge.match('a'));

    let part1 = '30';
    let part2 = ' Days of javascript'
    console.log(part1.concat(part2));
    console.log(challenge.repeat(2));
}

{
    console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
    console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
}
{
    if( typeof '10' === 10){
        console.log(true);
    }else{
        console.log(false);
    }

    if( parseFloat('9.8') === 10){
        console.log(true);
    }else{
        console.log(Math.round(parseFloat('9.8')));
    }

    const a = 'python';
    const b = 'jargon';
    if( a.includes('on') && b.includes('on')){
        console.log('yes')
    }else{
        console.log('no');
    }

    const random = Math.floor(Math.random() * 101);
    console.log(random);   

    const random1 = Math.random() * (100 - 50) + 50;
    console.log(random1);

    const random2 = Math.random() * (255 - 0) + 0;
    console.log(random2);    

    const random3 = Math.random() * (9 - 0) + 0;
    const string = 'JavaScript';
    console.log(string.charAt(random3));
}

{
    console.log('Some text here \t1 \t1 \t1 \t1 \t1')
    console.log('Some text here \t2 \t1 \t2 \t4 \t8')
    console.log('Some text here \t3 \t1 \t3 \t9 \t27')
    console.log('Some text here \t4 \t1 \t4 \t16 \t64')
    console.log('Some text here \t5 \t1 \t5 \t25 \t125')
}

{
    const phrase = 'You cannot end a sentence with because because because is a conjunction';
    console.log(phrase.substring(31, 54));
}

{
    const string = 'Love is the best thing in this world. Some fount their love and some are still looking for their love'
    console.log(string.match('love'));
}
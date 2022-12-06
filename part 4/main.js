{
    // if conditional operator
    // if(condition){
        //truthy code
    // }

    let num = 3;
    if (num > 0){
        console.log(`${num} is a positive number`)
    }

    let isRaining = true;
    if (isRaining){
        console.log('Remember to take your rain coat');
   }
}
{
    // if else operator
    // if(condition){
        // truthy code
    // }else{
        // falsy code
    // }

    let num = 3;
    if (num > 0){
        console.log(`${num} is a positive number`)
    }else{
        console.log(`${num} is a negative number`);
    }

    let num1 = -3;
    if (num > 0){
        console.log(`${num1} is a positive number`)
    }else{
        console.log(`${num1} is a negative number`);
    }

    let isRaining = true;
    if(isRaining){
        console.log('Take your umbrella')
    }else{
        console.log("You don't need an umbrella")
    }

    let isRaining1 = false;
    if(isRaining1){
        console.log('Take your umbrella')
    }else{
        console.log("You don't need an umbrella")
    }
}


{
    // if else if else operator
    // if(condition){
    //     code one
    // }else if (condition){
    //     code two
    // }else{
    //     code three
    // }

    let a = 0;
    if (a > 0){
        console.log(`${a} is a positive number`)
    }else if (a < 0){
        console.log(`${a} is a negative condition`)
    }else if (a == 0){
        console.log(`${a} is zero`)
    }else{
        console.log(`${a} is not a number`)
    }


    let weather = 'sunny';
    if (weather === 'rainy'){
        console.log('You need a rain coat')
    }else if (weather === 'cloudy'){
        console.log('It might be cold, you need a jacket')
    }else if (weather === 'sunny'){
        console.log('Go out freely')
    }else {
        console.log("No need for rain coat")
    }

}

{
    // Switch operator

//     switch(caseValue){
//         case 1: 
//             code 1 here
//         break
//         case 2: 
//             code 2 here
//         break
//         case 3:
//             code 3 here
//         break
//         default:
//             default code here
//     }
// 

    let weather = "cloudy";
    switch(weather){
        case "rainy":
            console.log("You need a rain coat")
            break
        case "cloudy":
            console.log("It might be cold, you need a jacket")    
            break
        case "sunny":
            console.log("Go out freely")    
            break
        default: 
            console.log("No need for rain coat")    
    }
    

    let dayUserInput = prompt("What day is today?");
    let day = dayUserInput.toLowerCase();

    switch(day){
        case 'monday':
            console.log("Today is Monday")
        break
        case 'tuesday':
            console.log("Today is Tuesday")
        break
        case 'wednesday':
            console.log("Today is Wednesday")
        break
        case 'thursday':
            console.log("Today is Thursday")
        break
        case 'friday':
            console.log("Today is Friday")
        break
        case 'saturday':
            console.log("Today is Saturday")
        break
        case 'sunday':
            console.log("Today is Sunday")
        break
        default:
            console.log("It is not a week day")
    }

        let num = prompt("Enter number");
        switch (true){
            case num > 0:
                console.log("Number is positive")
            break;
            case num < 0:
                console.log("Number is negative")
            break;
            case num == 0:
                console.log("Number is zero")
            break;
            default:
                console.log("Entered value was not a number");
        }

        let isRaining = true;
        isRaining
            ? console.log("You need a rain coat")
            : console.log("No need for a rain coat");
}    

{
    let age = prompt("Enter your age")
    switch(age){
        case age > 18 :
            console.log("You are old enough to drive")
        break
        case age < 18:
            console.log("You are not old enough to drive. You can drive in: " + (18 - age) + " years from now")   
    }
}

{
    let age = prompt("Enter your age for comparison")
    if(age < 25){
        console.log("You are " + (25 - age) + " years younger than me")
    }else{
        console.log("You are " + (age - 25) + " years older than me")
    }
}

{
    let a = 4;
    let b = 3;

    if(a > b){
        console.log("A is greater than B")
    }else{
        console.log("A is less than B ")
    }

    switch(a > b){
        case a > b:
            console.log("A is greater than B")
        break
        case a < b:
            console.log("A is less than B ")
        break
        default: 
            console.log("A is not a number")
    }
}

{
    let num = prompt("Enter a number");
    if(num%2 === 0){
        console.log(num + " is even")
    }else{
        console.log(num + " is not even")
    }
}

{
    let grade = prompt("Enter your score");
    if(grade > 80){
        console.log("Your grade is A")
    } else if (70 < grade && grade < 79){
        console.log("Your grade is B")
    } else if (60 < grade && grade < 69){
        console.log("Your grade is C")
    } else if (50 < grade && grade < 59){
        console.log("Your grade is D")
    } else{
        console.log("Your grade is F")
    }
}

{
    let month = prompt("Enter current month");
    if( month == "September" || month == "October" || month == "November"){
        console.log("Season is Autum")
    }else  if( month == "December" || month == "January " || month == "February"){
        console.log("Season is Winter")
    }else  if( month == "March" || month == "April  " || month == "May"){
        console.log("Season is Spring")
    }else  if( month == "June" || month == "July" || month == "August"){
        console.log("Season is Summer")
    }else{
        console.log("Entered value is not a Month")
    }
    
}

{

    let day = prompt("Enter current weekday")
    if(day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday"){
        console.log("Today is a working day")
    }else if (day == "Saturday" || day == "Sunday"){
        console.log("Today is a weekend day")
    }else{
        console.log("Entered Data is not a week day")
    }
}

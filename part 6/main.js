

{
    // For loop. loops until a certain condition is met. for (initialization, condition, increment/decrement)
    for(let i = 0; i <= 5; i++){
        console.log(i)
    }

    for(let i = 5; i >= 0; i--){
        console.log(i);
    }
    for(let i = 0; i <= 5; i++){
        console.log(`${i} * ${i} = ${i - i}`);
    }

    for(let i = 0; i <= 5; i++){
        console.log(i * i)
    }

    const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"]
    const newArr = [];
    for(let i = 0; i < countries.length; i++){
        newArr.push(countries[i].toUpperCase())
    }
}

{
    const numbers = [1, 2, 3, 4, 5, 6]
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){ // initial condition is index = 0; condition to be met is index < 1 increment smaller than length indication of array; i++ is incremental indicator, increments i by 1 step every loop
        sum = sum + numbers[i];
    }
    console.log(sum);
}

{
    const numbers = [1, 2, 3, 4, 5, 6]
    const newArr = [];
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){ // for loop with specified initialization, condition to be met, increment 
        newArr.push(numbers[i] ** 2)   // adds index of numbers[] array raised to the power of 2 to the end of newArr array, adding one index for every loop, until condition is met
    }
    console.log(numbers, newArr)
}
{
    const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"]
    const newArr = []
    for(let i = 0; i < countries.length; i++){
        newArr.push((countries[i]).toUpperCase()) //during every loop until condition is met, pushes values of "Countries" array to newArr, capitalizing the values 
    }
    console.log(newArr);
}


{
    //While loop. Executes indicated actions on every loop, while loop condition is being met. As soon as condition is no longer true, stops the loop.
    // Checks the condition before executing the code.
    let i = 0;
    while(i <= 5){
        console.log(i);
        i++;
    }
}

{
    // do while loop . Executes code once, and then continues executing while condition is true. Executes code, and then checks if the condition is true
    let i = 0;
    do{
        console.log(i)
        i++
    }while(i <= 5);

}

{
    //for of loop. Loops through values of iterable object.
    // {for(const element of arr){
        //executable code here
   //}
{
    const numbers = [1, 2, 3, 4, 5]

    for (const num of numbers) {
    console.log(num)
    }

    // 1 2 3 4 5

    for (const num of numbers) {
    console.log(num * num)
    }

    // 1 4 9 16 25

    // adding all the numbers in the array
    let sum = 0
    for (const num of numbers) {
    sum = sum + num  
        // can be also shorten like this, sum += num
    // after this we will use the shorter synthax(+=, -=, *=, /= etc)
    }
    console.log(sum) // 15

    const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ]

    for (const tech of webTechs) {
    console.log(tech.toUpperCase())
    }

    // HTML CSS JAVASCRIPT REACT NODE MONGODB

    for (const tech of webTechs) {
    console.log(tech[0]) // get only the first letter of each element,  H C J R N M
    }


    const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
    const newArr = []
    for(const country of countries){
    newArr.push(country.toUpperCase())
    }

    console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
}
}

{
    //break is used to interrupt a loop so it doesn't execute forever

    for(let i = 0; i <= 5; i++){
        if( i == 3){   // indicates for loop to stop execution once index "i" is equal to value "3"
            break
        }
        console.log(i);
    }
}

{
    //continue is used to skip certain iterations while loop executes
    for(let i = 0; i <= 5; i++){
        if(i == 3){
            continue;    // indicates that loop will skip interation if index "i" is equal to value  "3"
        }
        console.log(i);
    }
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
        'Kenya'
      ]
      
      const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
      ]
      
      const mernStack = ['MongoDB', 'Express', 'React', 'Node']


      for(let i = 0; i <= 10; i++){
        console.log(i)
      }

      let whileX = 0;
      while(whileX <= 10){
        console.log(whileX);
        whileX++;
      }

      let doWhile = 0;
      do{
        console.log(doWhile);
        doWhile++;
      }while(doWhile <= 10)
}

{   
    const n = 10
    for(let i = 0; i <= n; i++){
        console.log(i);
    }
}

{
    let string = "";
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < i; j++){
            string += "#"
        }string += "\n";
    }  console.log(string);
}

{
    for(let i = 0; i <= 10; i++){
        console.log((`${i} x ${i} = `) + i * i );
    }
}

{
    for(let i = 0; i <= 10; i++){
        console.log(i, i ** 2, i ** 3)
    }
}

{
    for(let i = 0; i <= 100; i++){
        if(i%2 === 0){
            console.log(i);
        }
    }
}

{
    for(let i = 0; i <= 100; i++){
        if(i%2 === 0){           
        }else{
            console.log(i);
        }
    }
}

{  
     let sum = 0; // declare initial variable
    for(let i = 0; i <= 100; i++){  // conditions for iteration
        sum += i; // add value of each iteration to the sum
        console.log(sum)
    }
}

{   let sum = 0;
    for(let i = 0; i <= 100; i++){
        if(i%2 == 0){
            sum += i;
        }
    }

    let sumOdd = 0;
    for(let i = 0; i <= 100; i++){
        if(i%2 !== 0){
            sumOdd += i;
        }   
    }


    console.log("Sum of all evens is " + sum + " While sum of all odds is " + sumOdd);
}

{
    let sum = 0;
    for(let i = 0; i <= 100; i++){
        if(i%2 == 0){
            sum += i;
        }
    }

    let sumOdd = 0;
    for(let i = 0; i <= 100; i++){
        if(i%2 !==0){
            sumOdd += i;
        }
    }

    const array = [sum, sumOdd];
    console.log(array);
}

{
    const randomNum = Math.floor(Math.random() * 20);
    const randomArray = [randomNum, randomNum, randomNum, randomNum, randomNum,  ]
    console.log(randomArray);
}

{
    const randomNum = Math.floor( Math.random() * 250);
    const randomNum2 = randomNum * 2;
    const randomNum3 = randomNum2 * 190;
    const randomNum4 = randomNum3 *10;
    const randomNum5 = randomNum4 *7;
    
    let randomArray = [randomNum, randomNum2, randomNum3, randomNum4, randomNum5];
    console.log(randomArray);
}

{
    let randomString = Math.random().toString(36).substr(4,6);
    console.log(randomString);
}

{
    let randomString = Math.random().toString(36).substring(2, 20);
    console.log(randomString)
}

{
    function returnRandomString(a, b){
        return Math.random().toString(36).substring(a, b)
    }
    console.log(returnRandomString(4, 24))
}

{
    let randomHexaBase = Math.floor(Math.random() * 16);
    let hexaValue = randomHexaBase.toString(16);
    console.log(hexaValue);
}

{
    let randomRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);
    console.log("rgb (" + randomRed + "," + randomGreen + "," + randomBlue + ")")
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
        'Kenya'
      ]
}
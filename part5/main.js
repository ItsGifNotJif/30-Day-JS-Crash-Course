{
    const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
    const fruits = ['apple', 'banana', 'orange', 'pineapple', 'lemon']
    const vegetables = ['potato', 'tomato', 'cabbage', 'onion']
    const animalProducts = ['milk', 'cheese', 'butter', 'meat']
    const webTechs = ['html', 'css', 'js', 'react', 'redux', 'node']
    const countries = ['finland', 'denmark', 'sweden', 'norway']

    console.log('numbers', numbers);
    console.log(numbers.length);
    console.log('fruits', fruits);
    console.log(fruits.length)
    console.log('vegetables', vegetables);
    console.log(vegetables.length)
    console.log('Animal products', animalProducts);
    console.log(animalProducts.length)
    console.log('webTechs', webTechs);
    console.log(webTechs.length);
    console.log('countries', countries);
    console.log(countries.length);
}

{
    const arr = [
        "Dorian",
        250,
        true,
        {country: "Norway", city: "Oslo"},
        { skills: ['HTML', 'CSS', 'JS', 'React']}
    ]
    console.log(arr);
}

{
    let js = "javascript"
    const charsInJavascript = js.split('');
    console.log(charsInJavascript);

    let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
    const companiesSplit = companiesString.split(', ');
    console.log(companiesSplit);

    let txt = "I love teaching and empowering people. I teach HTMl, CSS, JS, REACT, PYTHON"
    const words = txt.split(" ")
    console.log(words);
}

{
    const fruits = ['apple', 'banana', 'orange', 'pineapple', 'lemon']
    let firstFruit = fruits[0];
    console.log(firstFruit);

    const secondFruit = fruits[1];
    console.log(secondFruit);

    const lastFruit = fruits[4];
    console.log(lastFruit);

    const lastFruitfromArray = fruits.length-1;
    const arrayLastFruit = fruits[lastFruitfromArray]
    console.log(arrayLastFruit);
}

{
    const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
    console.log(numbers.length)
    console.log(numbers)
    console.log(numbers[0])
    console.log(numbers[5])

    let lastIndex = numbers.length-1;
    console.log(numbers[lastIndex]);
}

{
    const webTechs = ['html', 'css', 'js', 'react', 'redux', 'node']

    console.log(webTechs);
    console.log(webTechs.length)
    console.log(webTechs[0]);
    console.log(webTechs[5]);

    let lastIndex = webTechs.length-1;
    console.log(webTechs[lastIndex]);
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

    console.log(countries);
    console.log(countries[0]);
    console.log(countries[10]);
    
    let lastIndex = countries.length-1;
    console.log(countries[lastIndex]);
}

{
    const shoppingCart = [
        'Milk',
        'Mango',
        'Tomato',
        'Potato',
        'Avocado',
        'Meat',
        'Eggs',
        'Sugar'
      ] 

      console.log(shoppingCart);
      console.log(shoppingCart[0]);
      console.log(shoppingCart[7]);

      let lastIndex = shoppingCart.length-1;
      console.log(shoppingCart[lastIndex]);
}

{
    const numbers = [1, 2, 3, 4, 5]
    numbers[0] = 10;
    numbers[1] = 20;

    console.log(numbers);

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

      countries[0] = "Turkey";
      let lastIndex = countries.length-1;
      countries[lastIndex] = "Korea"
      console.log(countries);
}

{
    // Array constructor. Array() - creates an array
    const arr = Array();  // created an empty array
    console.log(arr);

    const eightEmptyValues = Array(8) // created an array with eight empty values
    console.log(eightEmptyValues);
}

{
    // fill()  - fills all array elements with a static value
    const arr = Array();
    console.log(arr);

    const eightXValues = Array(8).fill("X") // created an array with 8 values, each value is a string "X"
    console.log(eightXValues);

    const eight0Values = Array(8).fill(0) // created an array with 8 values, each value is a number 0
    console.log(eight0Values);

    const four4Values = Array(4).fill(4) //created an array with 4 values, each value is a number 4
    console.log(four4Values);
}

{
    // concat() concatinates(joins) two or more arrays together
    const firstArr = [1, 2, 3]
    const secondArr = [4, 5, 6]
    const thirdArr = [7, 8, 9]
    const finalArr = firstArr.concat(secondArr).concat(thirdArr) // concatinates first array with second array and with third array
    console.log(finalArr);
}

{
    const fruits = ['apple', 'orange', 'pineapple']
    const fruits2 = ['banana', 'dragonfruit', 'peach']
    const finalFruit = fruits.concat(fruits2)

    console.log(finalFruit)
}

{
    // .length shows the total length of array in terms of Indexes, starting from index 0
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(array.length)
}

{
    // .indexOf() checks if item exists within the array. If it exists, it returns the index of the item, otherwise it returns -1;
    const numbers = [1, 2, 3, 4, 5, 6]
    console.log(numbers.indexOf(5));
    console.log(numbers.indexOf(2));
    console.log(numbers.indexOf("a"));
    console.log(numbers.indexOf(-2));
}

{
    const fruits = ['apple', 'banana', 'orange', 'pineapple', 'lemon', ]
    let index = fruits.indexOf('apple');

    if(index === -1){
        console.log("Item does not exist within indicated array")
    }else{
        console.log("This item does exist within array");
    }

    // ternary operator version of the same code

    index === -1 ? console.log("This item does not exist within the array") : console.log("this item does exist within the array")

    let indexOfAvocado = fruits.indexOf("avocado");
    if(indexOfAvocado === -1){
        console.log("This item doesn't exist within the array")
    }else{
        console.log("This item does exist within the array")
    }
} 
    
{
    // lastIndexOf() gives the position of the last repeated item in the array. If such item doesn't exist within the array, it returns -1

    const numbers = [1, 2, 3, 4, 5, 6, 2,  7, 8]
    console.log(numbers.lastIndexOf(2));
    console.log(numbers.lastIndexOf(5));
    console.log(numbers.lastIndexOf(0));
    console.log(numbers.lastIndexOf(1212));


    const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
      ]
    
      console.log(webTechs.lastIndexOf("CSS"))
      console.log(webTechs.lastIndexOf("Java"))
      console.log(webTechs.lastIndexOf("HTML"))
      console.log(webTechs.lastIndexOf("React"))
}
{
    // Array.isArray() checks if datatype is an array. Returns "true" if indicated datatype is an array, returns "false" if the datatype is not an array
    const array = [1, 2, 3, 4, 5, 6]
    console.log(Array.isArray(array))

    const arrays = 100;
    console.log(Array.isArray(arrays))
}

{
    // .toString() converts an array to a string
    const numbers = [1, 2, 3, 4, 5, 6]
    console.log(numbers.toString());
    
    const names = ['Dorian', 'Ashgray', 'Hawkmoon', 'Elric', 'Erekose']
    console.log(names.toString());
}

{
    // .join() joins elements of an array and returns them as a string. The argument passed in the join method will indicate the way in which array elements will be joined and returned as a string.
    // By default, it joins elements with a comma ",". Other possible methods - '' / '  ' / ', ' / ' # ' /
    const numbers = [1, 2, 3, 4, 5, 6]
    console.log(numbers.join());

    const names = ['Dorian', 'Ashgray', 'Hawkmoon', 'Elric', 'Erekose']
    console.log(names.join())
    console.log(names.join(''))
    console.log(names.join(' '))
    console.log(names.join(', '))
    console.log(names.join(' # '))

}
{
    // .slice cuts out multiple items from an array within indicated range and returns a "Shallow copy". Takes two parameters, starting position and ending position. By default it only requires starting position
    // If no ending position is indicated, it afflicts every element from starting position until the end of an array

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    console.log(numbers.slice())
    console.log(numbers.slice(0))
    console.log(numbers.slice(4))
    console.log(numbers.slice(4, 9))
    console.log(numbers.slice(1, 4))
}

{
    // .splice can take out or add items to an array. Takes three parameters: starting position, number of items to be afflicted, number of items to be added
    // It is inclusive of the first element, but exclusive of the last element, e.g. [(1, 2, 3, 4, 5,) 6] would include 1, but exclude 6
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    numbers.splice();
    console.log(numbers)

    numbers.splice(0, 1)   /// starts at index 0, and removes 1 item 
    console.log(numbers)


    {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    numbers.splice(3, 3, 7, 8, 9)  // starts at index 3, removes 3 items (4, 5, 6), and replaces tem with 3 other items (7, 8, 9)
    console.log(numbers);
}
}

{
    //.push() adds items to the end of an existing array
    const numbers = [1, 2, 3, 4]
    numbers.push(2, 4, 1, 2, 1, 2)   /// ads [2, 4, 1, 2, 1, 2] to the end of numbers array [1, 2, 3, 4]
    console.log(numbers);

    const words = ['word', 'word1', 'word2']
    words.push('word3', 'word4', 'word5')
    console.log(words)

    const fruits = ["apple", "banana", "orange", "kiwi"]
    fruits.push('dragonfruit', 'grapefruit', 'pear')
    console.log(fruits);
}   

{
    // .pop() removes item from the end of an array. By default removes one item only.
    const numbers = [1, 2, 3, 4, 5, 6, 7]
    numbers.pop(); // removes one item from the end
    console.log(numbers);
    numbers.pop(2)
    console.log(numbers);
}

{
    //.shift() removes an element from the beginning of the array. By default removes one element. After removal, shifts all the other elements towards the start of the array and reassigns index values
    //in array [1, 2, 3, 4] if 1 was removed, array would turn into [2, 3, 4], and the index of 0 would be assigned to value [2]
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    numbers.shift() // removes one element from the start of the array
    console.log(numbers);
    numbers.shift(3) // removes first 3 elements from the array, starting at index 0
    console.log(numbers)
} 

{
    //.unshift() adds an element to the start of the array. By adding, shifts entire array towards the end of the array, reassigning index values. So after unshift array element 1 moves from index[0] to index[1]
    const numbers = [1, 2, 3, 4, 5, 6, 7]
    numbers.unshift(0) // adds element "0" to the start of the array, assigning it the index of [0] and shifting all other elements towards end of the array
    console.log(numbers);
    numbers.unshift(0, 2, 'abc') // adds elements "0", "2", and string "abc" to the start of array, reassigning indexes and shifting all other elements towards the end of array
    console.log(numbers)
}

{
    //.reverse() reverses the order of the elements in an array.
    const numbers = [1, 2, 3, 4, 5, 6, 7]
    numbers.reverse();
    console.log(numbers)
}

{
    //.sort() arranges elements in the array by ascending order of the first character in a string or a number.
    const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
      ]
    webTechs.sort()
    console.log(webTechs);

    // after sorting, other operations are possible, such as reverse
    webTechs.reverse();
    console.log(webTechs);


    const numbers = [1, 2, 3, 4, 5, 10, 2, 112, 412, -2, -2, -552, 12, 12442, -0.5, 6, 7]
    numbers.sort()
    console.log(numbers);

}

{
        // Array of arrays. An array can store any time of data: string, number, function, or other arrays;

        const firstArray = [1, 2, 3, 4]
        const secondArray = [5, 6, 7, 8]
        const megaArray = [[1, 2 ,3, 4], [5, 6, 7, 8]]
        
        console.log(megaArray[0]);

        const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
        const backEnd = ['Node', 'Express', 'MongoDB',]
        const fullStack = [frontEnd, backEnd];
        console.log(fullStack);
        console.log(fullStack.length);
        console.log(fullStack[0]);
        console.log(fullStack[1]);
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


      const emptyArr = Array();
      const bigArray = [1, 2, 3, 4, 5, 6, 7, 8]
      console.log(bigArray.length)
      console.log(bigArray[0]);
      console.log(bigArray[4]);
      console.log(bigArray[7]);

      const mixedDataTypes = [1, 2, 3, 'abc', 'string', 'word', 24, -2, 'word2'];
      console.log(mixedDataTypes.length )

      const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
      console.log(itCompanies);
      console.log(itCompanies.length);
      console.log(itCompanies[0]);
      const lastindex = itCompanies.length-1 
      console.log(itCompanies[lastindex]);
      console.log(itCompanies[1])
      console.log(itCompanies[2])
      console.log(itCompanies[3])
      console.log(itCompanies[4])
      console.log(itCompanies[5])
      console.log(itCompanies[6])
}   

{
    const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
    const stringify = itCompanies.toString();
    console.log(stringify.toUpperCase());
}

{   
    const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
    console.log(itCompanies[0] + ", " + itCompanies[1] + ", " + itCompanies[2] + ", " + itCompanies[3] + ", " + itCompanies[4] + ", " + itCompanies[5] + ", " + itCompanies[6] + " are big IT companies");
    let checkForValue = itCompanies.indexOf("Google")
    if(checkForValue === -1){
        console.log("Such company does not exist within the array")
    }else{
        console.log("Such company does exist within the array")
    }

    console.log(itCompanies.sort());
    console.log(itCompanies.sort().reverse());
    
    let slicedCompanies = itCompanies.slice(0, 3);
    console.log(slicedCompanies);

    let slicedCompaniesEnd = itCompanies.slice(-3);
    console.log(slicedCompaniesEnd);
    
    let slicedCompaniesMiddle = itCompanies.slice(2, 4);
    console.log(slicedCompaniesMiddle);

    console.log(itCompanies.shift());
    console.log(itCompanies.slice(3, 4));

    let lastIndex = itCompanies.length-1;
    console.log(itCompanies.slice(lastIndex));

    console.log(itCompanies.slice(0));
}

{
    let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    let brokenUp = text.split(" ")
    console.log(brokenUp);
    console.log(brokenUp.length);


    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    const addMeatToStart = shoppingCart.unshift('Meat')
    console.log(shoppingCart);
    const addSugarToEnd = shoppingCart.push('Sugar');
    console.log(shoppingCart);
    const removeHoney = shoppingCart.splice(4, 1);
    console.log(shoppingCart);
    const modifyTea = shoppingCart.splice(3, 1, "Green Tea")
    console.log(shoppingCart);
}

{
    const frontEnd = ['HTML', 'CSS', 'JSS', 'React', 'Redux']
    const backEnd = ['Node', 'Express', 'MongoDB']
    const fullStack = frontEnd.concat(backEnd)
    console.log(fullStack);
}

{
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    const sortedAges = ages.sort();
    console.log(ages, sortedAges);

    const medianAge = (ages[4] + ages[5]) / 2;
    console.log(medianAge);
    console.log(ages.length);
    const maxValue = Math.max(...ages);
    const minValue = Math.min(...ages);
    console.log(maxValue, minValue);
    const averageAge = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9] ) / 10;
    console.log(averageAge);

    const rangeOfAges = maxValue - minValue;

    const a = minValue - averageAge;
    const b = maxValue - averageAge;
    const absolute = Math.abs(a - b);
    console.log(absolute);
}
//----------------------Sets and Maps ------------------------------//

{
    //Sets are collection of elements. Sets can only contain unique elements. Sets work similarly to arrays, but all values MUST be unique
    //Creating an empty set.\
    const companies = new Set()
    console.log(companies)

    //Creating a set from an array
    const languages = [
        'English',
        'Finnish',
        'English',
        'French',
        'Spanish',
        'English',
        'French',
    ]

    const setOfLanguages = new Set(languages)
    console.log(setOfLanguages)


    //set is an iterable object and every set element can be iterated through

    for (const language of setOfLanguages) {
        console.log(language)
    }
}

{
    //Adding elements to a set 
    const companies = new Set()   //creates an empty set 
    console.log(companies.size)

    companies.add("Google")     //Adds element "Google" to the set
    console.log(companies.size)
    companies.add("Facebook")
    console.log(companies.size)
    companies.add("Tesla")
    console.log(companies.size)
    companies.add("Meta")
    console.log(companies.size)
    companies.add("SpaceX")
    console.log(companies.size)
    companies.add("Kingston")
    console.log(companies.size)
    companies.add("TSMC")
    console.log(companies.size)
    console.log(companies)
}

{

    //Elements can be added to a set using loops

    const companies = ["Google", "Facebook", "Meta", "Twitter"]
    setOfCompanies = new Set()
    for (const company of companies) {          //Adds companies from "companies" array to "setOfCompanies" set during loop
        setOfCompanies.add(company);
    }
    console.log(setOfCompanies)
}

{
    //Deleting an element from a set. Elements can be deleted using ".delete" method
    const companies = ["Google", "Facebook", "Meta", "Twitter"];
    setOfCompanies = new Set()
    for (const company of companies) {          //Adds companies from "companies" array to "setOfCompanies" set during loop
        setOfCompanies.add(company);
    }
    console.log(setOfCompanies)
    console.log(companies);
    console.log(setOfCompanies.size);

    console.log(setOfCompanies.delete("Meta"));                     //Deletes "Meta" from "setOfCompanies" element set
    console.log(setOfCompanies)
    console.log(setOfCompanies.size)

    //Checking an element in a set. Uses ".has" method. Returns a boolean 
    console.log(setOfCompanies.has("Apple"))
    console.log(setOfCompanies.has("Google"))

    //Clearing a set. Uses ".clear()" to clear all elements from a set

    setOfCompanies.clear();
    console.log(setOfCompanies);
}

{
    //Possible uses for sets
    const languages = [
        'English',
        'Finnish',
        'English',
        'French',
        'Spanish',
        'English',
        'French',
    ]

    const langSet = new Set(languages)
    console.log(langSet);               //as sets can only contain unique values, it only enteres every value once from "languages" array
    console.log(langSet.size)       //.size method is used to find the size of the set, and since all elements are unique, it returns the number of DIFFERENT elements in the array by returning size of set

    const counts = []
    const count = {}

    for (const l of langSet) {
        const filteredLang = languages.filter((lng) => lng === l)
        console.log(filteredLang)               //Counts how many times an element was repeated within an array
        counts.push({ lang: 1, cont: filteredLang.length });
    }
    console.log(counts)

}

{
    const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
    const setOfNumbers = new Set(numbers);              //Only adds every unique element once, so this set contains all the unique elements
    console.log(setOfNumbers)       //console.logs all UNIQUE elements from an array as set  
    console.log(setOfNumbers.size)      //counts total lenght of set, which corresponds to amount of UNIQUE elements in the set
}

{
    //Union of sets. Union contains all the elements that are in either set. uses .union method

    let a = [1, 2, 3, 4, 5]         //first set
    let b = [3, 4, 5, 6]            //second set
    let c = [...a, ...b]        //union set of first and second set. Contains UNIQUE elements from both sets.

    let A = new Set(a)
    let B = new Set(b)
    let C = new Set(c)

    console.log(C)
}

{
    //Intersection of sets. Intersection checks only for elements that are in BOTH/ALL sets
    let a = [1, 2, 3, 4, 5]
    let b = [3, 4, 5, 6]

    let A = new Set(a)
    let B = new Set(b)

    let c = a.filter((num) => B.has(num))           //Checks for elements that are in both sets at once
    let C = new Set(c)          // assings new set of elements in both sets to a variable

    console.log(C)   //logs elements that are in both sets at once
}

{
    //Difference of sets. Finds out what elements differ in each set
    let a = [1, 2, 3, 4, 5]
    let b = [3, 4, 5, 6]

    let A = new Set(a)
    let B = new Set(b)

    let c = a.filter((num) => !B.has(num))          //uses "!" to find elements that AREN'T intersected in both sets, aka. finds UNIQUE elements that don't repeat in other sets
    let C = new Set(c)

    console.log(C)
}

{
    //-----------------Maps-----------------//
    //Map is a collection of key-value pairs that can be iterated over in insertion order. Similar to objects, but MAP can have keys of any type, not just strings, maintains the order the elements were added to it, provides "size" property
    const map = new Map()
    console.log(map)
}
{
    //creating a MAP from an array
    countries = [
        ['Finland', 'Helsinki'],
        ['Sweden', 'Stockholm'],
        ['Norway', 'Oslo'],
    ]
    const map = new Map(countries)
    console.log(map)        //logs the key-value pairs within the map
    console.log(map.size)           //logs the size of map
}

{
    //Adding values to MAP. uses .set() method. .set() method accepts key and value as first and second parameters

    const countriesMap = new Map()
    console.log(countriesMap.size)
    countriesMap.set("Finland", "Helsinki")
    countriesMap.set("Sweden", "Stockholm")
    countriesMap.set("Norway", "Oslo")
    console.log(countriesMap);

    //Getting value from a map. Uses .get() method, first parameter is key 
    console.log(countriesMap.get("Finland"))

    //Checking if a key exists in MAP. uses .has() method, returns boolean
    console.log(countriesMap.has("Finland"))

    //Getting values from a map using a loop
    for (const country of countriesMap) {
        console.log(country)
    }

    for (const [country, city] of countriesMap) {
        console.log(country, city)
    }
}

{
    const aSetOfValues = new Set();

    for (let i = 0; i < 10; i++) {
        aSetOfValues.add(i)
    }
    console.log(aSetOfValues);

    aSetOfValues.delete(2);
    console.log(aSetOfValues);

    aSetOfValues.clear()
    console.log(aSetOfValues)

    let array = ["one", "two", "three", "four", "five"]
    let arraySet = new Set(array);


    const countries1 = ['Finland', 'Sweden', 'Norway']
    const countriesMap = new Map()

    for (let i = 0; i < countries1.length; i++) {
        countriesMap.set(countries1[i], countries1[i].length)
    }

    console.log(countriesMap);

    const a = [4, 5, 8, 9]
    const b = [3, 4, 5, 7]
    let c = [...a, ...b]

    let A = new Set(a)
    let B = new Set(b)
    let unionAB = new Set(c)
    console.log(unionAB)

    let intersectionAB = a.filter((num) => B.has(num))
    let intersected = new Set(intersectionAB)
    console.log(intersected);

    let difference = a.filter((num) => !B.has(num))
    let differenceAB = new Set(difference)
    console.log(differenceAB)
}
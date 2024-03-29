{
    //Regular Expressions. 
    //Regular expressions are patterns used to match certain character combinations in strings.
    //RegExp in Javascript are also considered objects.
    //RegExp requires a search pattern, and an optional Flag. flags identify optional parameters to the search

    //Search pattern - this defines what to look for within strings. 

    {
        //Creating a pattern with RegExp constructor
        //without flag
        let pattern = "love"
        let regEx = new RegExp(pattern)

        //declaring regular expression with global flag and case insensitive flag. Will search all strings and ignores uppercase/lowercase distinction
        let pattern1 = "love"
        let flag = "gi"
        let regEx1 = new RegExp(pattern1, flag)  //declares searchable pattern, then declares flag to be used in search

        //delaring regular expression using RegExp object. 
        let regEx2 = new RegExp("love", "gi")   //accepts both the pattern and flag as parameters for search within parentheses as variables, without the need to declare those variables elsewhere

    }
    {
        //Creating a pattern with without RegExp constructor
        //declaring regular expression with global flag and case insensitive flag
        let regEx = /love/gi

        // ↑ this is functionally the same as this ↓ just without RegExp being assigned to a variable
        let regEx1 = new RegExp("love", "gi")
    }
    {
        //RegExp object methods
        //test() method. Testing for a match.  Returns boolean "true" or "false" depending on the result 
        const str = " I love Javascript"
        const pattern = /love/
        const resultTest = pattern.test(str)
        console.log(resultTest)

        //match() method. Returns an array containing all of the matches, including capturing groups, or "null" if no match is found
        const resultMatch = str.match(pattern)
        console.log(resultMatch)
        const patternGlobal = /love/g
        const resultMatchGlobal = str.match(patternGlobal)
        console.log(resultMatchGlobal)

        //search() method. Tests for a match in a string, and returns index of the match, or "-1" if no match is found
        const resultSearch = str.search(pattern)
        console.log(resultSearch)

        //replace() method. Executes a search for a match within string, and replaces the matched substrings with a replacement substring
        const txt = "Python is the most beautiful language that a human begin has ever created.\
        I recommend python for a first programming language"

        const matchReplaced = txt.replace(/Python|python/, "Javascript") //String to find/other string to find, what to replace with. Replaces first matched substring
        console.log(matchReplaced)

        const matchReplacedAll = txt.replace(/Python|python/g, "Javascript") //String to find|other string to find/global flag, substring to replace with. Replaces all matched substrings
        console.log(matchReplacedAll)

        const matchReplacedAllIgnoreCases = txt.replace(/Python/gi, "Javascript") //String to find/global flag, ignore case flag, substring to replace with. Replaces all matched substrings, ignores uppercase/lowercase
        console.log(matchReplacedAllIgnoreCases)

        const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
        T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
        p%e%o%ple.\
        I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
        D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

        const matches = txt2.replace(/%/g, "") //Finds "%" sign, global flag to indicate search for all matches, replaces with nothing. Removes indicated characters from all words, fixing text.
        console.log(matches)
    }

}

{
    /* Character sets
    [a-c] - any lowercase letter in the range from "a" to "c": "a" or "b" or "c"
    [a-z] - any lowercase letter in the range from "a" to "z"
    [A-Z] - any uppercase letter in the range from "A" to "Z"
    [0-3] - any number in the range from "0" to "3": "0" or "1" or "2" or "3"
    [0-9] - any number in the range from "0" to "9"
    [A-Za-z0-9] - any character in the range of "A" to "Z", "a" to "z", "0" to "9". Effectivelly replaces any lowercase/uppercase letter or number
    */

    /* Escaping special characters
     "\d" - matches any digit character, equivalent to "[0-9"
     "\D" - matches any non-digit character, basically the opposite of "\d"
     */

    /*
    "." - any character except new line character "\n"
    "^" - starts with. Any pattern that starts with indicated character or string. r'^substring' e.g. r'^javascript' matches only patterns that start with "javascript"
    "[^]" - negates character class. Matches any character except the one indicated. e.g. [^ABC] matches any character in the pattern that ISN'T "A" or "B" or "C"

    "$" - ends with. Any substring that ends with indicated character or string. r'javascript$' replaces any patterns that end with "javascript"
    "*" - zero or more times. Means the match is optional, but can either not occur, or occur many times
    "+" - one or more times. Means the match occurs once or many times, but AT LEAST once
    "?" - zero or one time. Means the match either doesn't occur, or only occurs once.
    "\b" - word boundary. Means the match occurs either at the beginning or the ending of a word. 
    "{3}" - exact number of characters. In this case exactly 3 characters. 
    "{3,}" - at least number of characters. In this case at least 3 characters or more.
    "{3, 8" - an exact range of characters. In this case at least 3 characters, at most 8 characters. Aka 3 to 8 characters.\
    "|" - Either|or. Matches one of several options. Like "apple|orange" matches either "apple", or "banana". Can be used to specify alternative patterns. 
    "()" - Capture and group. Can be used to capture and group several elements within RegExp pattern. 
     */

}

{
    //Square brackets
    const pattern = "[Aa]pple"  //means either "A" or "a"
    const txt = "Apple and banana are fruits. An old cliche says an apple a day keeps doctor away has been replaced by a banana a day keeps the doctor far far away."
    const txt2 = "Apple and banana are fruits. An old cliche says an apple a day keeps doctor away has been replaced by a banana a day keeps the doctor far far away. Bananas are easy too eat, too."
    const matches = txt.match(pattern)

    console.log(matches)


    const pattern1 = /[Aa]pple/g  //means either "A" or "a", with global flag
    const matches1 = txt.match(pattern1)
    console.log(matches1)

    const pattern2 = /[Aa]pple|[Bb]anana/g  //means either "A" or "a", "B" or "b", and either "apple" or "banana"
    const matches2 = txt2.match(pattern2)
    console.log(matches2)
}

{
    //Escape characters in RegExp "\"
    const pattern = /\d/g  // "d" is a special character meaning digits, with global flag
    const txt = "This regular expression example was made in May 12, 2023"
    const matches = txt.match(pattern)
    console.log(matches)                //logs all found digits

    const pattern2 = /\d+/g //"d" is a special character meaning digits, "+" means once or more, with global flag
    const matches2 = txt.match(pattern2)
    console.log(matches2)  //logs all found matches that occur once or more times


    //Period (.)
    const pattern3 = /[a].+/g  //matches any pattern that starts with "a", and is followed by one or more of any character, except new line character, with global flag. Starts with the first match found
    const txt2 = "Apples and bananas are fruits"
    const matches3 = txt2.match(pattern3)
    console.log(matches3)

    //Zero or more times (*)
    const pattern4 = /[a].*/g //matches any pattern that starts with "a", and is followed by zero or more occurences of any other character, except newline character, with global flag. Starts with the first match found.
    const matches4 = txt2.match(pattern4)
    console.log(matches4)

    //Zero or one times (?)
    const txt3 = "I am not sure if there is a convention on how to write e-mail.\
    Some people write it email others may write it as Email or e-mail. "
    const pattern5 = /[Ee]-?mail/g //matches any uppercase or lowercase "e", with "mail" that occurs either one time, or doesn't occur at all, with global flag
    const matches5 = txt3.match(pattern5)
    console.log(matches5)
}

{
    //Quantifier in RegExp
    //Length of substring we look for can be specified in curly brackets.

    const txt = "This regular expression example was made in May 18, 2023"

    //Exactly 4 character long substrings

    const pattern = /\b\w{4}\b/g  //Matches a string that consists of exactly 4 characters. "\b" boundary ensures found match is not part of a bigger word. AKA this will only find words that are exactly 4 characters long.
    const matches = txt.match(pattern)
    console.log(matches)

    //Exactly 4 characters long substrings without numbers, only letters
    const pattern2 = /\b[a-zA-Z]{4}\b/g    //matches a string that consists of any 4 letters, isn't part of a bigger word, and it matches all occurences of such string due to "global" flag
    const matches2 = txt.match(pattern2)
    console.log(matches2)

    //Exactly 4 characters longs substrings without letters, only digits
    const pattern3 = /\b[0-9]{4}\b/g    //matches a string that consists of any 4 numbers, isn't part of bigger string, and matches all occurences of such strings due to "global" flag
    const matches3 = txt.match(pattern3)
    console.log(matches3)

    //1 to 4 character long substrings, only digits, without letters
    const pattern4 = /\d{1,4}/g    //matches only 1 to 4 digit long substrings, without letters
    const matches4 = txt.match(pattern4)
    console.log(matches4)

}

{
    //carot ^
    const txt = "This regular expression example was made in May 18, 2023"

    //Starts with 
    const pattern = /^This/    //only finds substrings starting with "this"
    const match = txt.match(pattern)
    console.log(match)

    //Negation
    const pattern2 = /[^A-Za-z,. ]+/g  //Only matches characters that AREN't uppercase/lowercase characters from "a" to "z", spaces, commas, periods.
    const match2 = txt.match(pattern2)
    console.log(match2)
}

{
    //Exact matches 
    //Finding exact match to a specified substring. Returns boolean "true" or "false" as a result."^" at the start and "$" at the end
    let pattern = /^[A-Z][a-z]{3,12}$/;
    let name = "Asabeneh"
    let result = pattern.test(name)

    console.log(result)
}

{
    //Exercises
    //1.
    const text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
    const pattern = /\b[0-9]{3,5}\b/g
    const matches = text.match(pattern)

    let sum = 0;  //declaring initial variable with value of 0
    for (let i = 0; i < matches.length; i++) {      //iterating through all elemets of "matches"  
        const currentNumber = parseInt(matches[i]);     //assigning "currentNumber" variable the value of "matches" index 
        sum += currentNumber    //adding all values of "currentNumber" variable to "sum" variable with each iteration
    }

    console.log(sum)
}

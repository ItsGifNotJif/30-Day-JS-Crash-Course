///--------------------------Regular Expressions --------------------------///
{
    /*Regular expression or RegExp is a sequence of characters that helps find patterns in data. RegExp can be used to check if pattern exists within different data types
    Regexp can be created either with a literal notation, or a constructor. 
    Literal notation takes a pattern between two forward slashes, followed by optional flag. eg: /aaa/g
    Constructor function takes either a string or RegExp object as first parameter, and a string of optional flags as second parameter.

    Examples of regular expressions:
    /a/ matches the character "a"
    /abc/ matches the string "abc"
    /./matches any single character

    More complicated regular expressions:
    /[a-z]/ matches any lowercase character
    /[A-Z]/ matches any uppercase character
    /[0-9]/ matches any digit
    /[a-zA-Z0-9]/ matches any alphanumeric character
    /^[a-zA-Z0-9]/ matches any character that is not an alphanumeric character
    /\d/ matches any digit (equivalent to [0-9])
    /\w/ matches any alphanumeric character (equivalent to [a-zA-Z0-9_])0
    */

    /*Flags are optional parameters in regexp that determinate the type of searching.
    g : global flag which means looking for a pattern in the whole text. Without global flag, only the first string is replaced that matches the method
    i - case insensitive flag (searches for both uppercase and lowercase characters)
    m - multiline - allows matching of multiple lines. in this case "^" indicates start of line, and "$" indicates the end of line
    */

    //Creating a pattern with regular expression
    //without flags
    let pattern = "love"
    let regEx = new RegExp(pattern)

    //Declaring regular expression with global flag and case insensitive flag
    let pattern1 = "love"
    let flag = "gi"
    let regEx1 = new RegExp(pattern1, flag)

    //Declaring regular expression pattern using RegExp object. Writing pattern and flag inside RegExp constructor
    let regEx2 = new RegExp("love", "gi")

    //Creating a pattern without RegExp constructor
    let regEx3 = /love/gi
    //this is the same expression as this:
    let regEx4 = new RegExp("love", "gi")
}

{
    //RegExp (regular expression) object methods.
    //.test(). Testing for a match in a string. Returns true or false
    const str = "I love Javascript"
    const pattern = /love/
    const result = pattern.test(str)
    console.log(result)

    //.match(). Returns an array containing all of the matches, including capturing groups. Returns "null" if no match is found. If "global /g" flag isn't used, returns array containing pattern, index, input and group

    const str1 = "I love Javascript"
    const pattern1 = /love/
    const result1 = str1.match(pattern1)
    console.log(result1)

    const str2 = "I love Javascript"
    const pattern2 = /love/g
    const result2 = str2.match(pattern2)
    console.log(result2)

    //.search(). Tests for a match in a string. Returns index of the matching string, or -1 if the search fails
    const searchStr = "I love Javascript"
    const matchStr = /love/g
    const searchResult = searchStr.search(matchStr)
    console.log(searchResult)

    const searchStr1 = "I love Javascript"
    const matchStr1 = /sky/g
    const searchResult1 = searchStr1.search(matchStr1)
    console.log(searchResult1)

    //.replace(). Executes a search for a match in a string, and replaces the matched substring with a replacement substring. First parameter is the string to find, second parameter is the replacement string
    //replacement can be used to clean up garbled text, or remove constantly repeating strings/characters from text
    const txt = 'Python is the most beautiful language that a human begin has ever created.\
    I recommend python for a first programming language'

    matchReplaced = txt.replace(/Python|python/, "Javascript")   //global flag isn't declared, so only the first found string is replaced 
    console.log(matchReplaced);


    const txt1 = 'Python is the most beautiful language that a human begin has ever created.\
    I recommend python for a first programming language'

    matchReplaced1 = txt1.replace(/Python|python/g, "Javascript")   //with global flag, matched text is replaced with a replacement substring
    console.log(matchReplaced1);

    const txt2 = 'Python is the most beautiful language that a human begin has ever created.\
    I recommend python for a first programming language'

    matchReplaced2 = txt2.replace(/Python|python/gi, "Javascript")   //with global flag and case insensitive flag, replaces ALL instances of matching string, uppercase AND lowercase
    console.log(matchReplaced2);


    //some garbled text here
    const garbledText = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
    T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
    p%e%o%ple.\
    I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
    D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
    matches = garbledText.replace(/%/g, "")     //finds all instances of "%" sign and replaces them with ""
    console.log(matches)

    /*[]: A set of characters
    [a-c] means, a or b or c
    [a-z] means, any letter a to z
    [A-Z] means, any character A to Z
    [0-3] means, 0 or 1 or 2 or 3
    [0-9] means any number 0 to 9
    [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
    \: uses to escape special characters
    \d mean: match where the string contains digits (numbers from 0-9)
    \D mean: match where the string does not contain digits
    . : any character except new line character(\n)
    ^: starts with
    r'^substring' eg r'^love', a sentence which starts with a word love
    r'[^abc] mean not a, not b, not c.
    $: ends with
    r'substring$' eg r'love$', sentence ends with a word love
    *: zero or more times
    r'[a]*' means a optional or it can occur many times.
    +: one or more times
    r'[a]+' means at least once or more times
    ?: zero or one times
    r'[a]?' means zero times or once
    \b: word bounder, matches with the beginning or ending of a word
    {3}: Exactly 3 characters
    {3,}: At least 3 characters
    {3,8}: 3 to 8 characters
    |: Either or
    r'apple|banana' mean either of an apple or a banana
    (): Capture and group */

}

{
    //Square brackets
    const pattern = "[Aa]pple"  //square bracket means either "a" or "A"
    const txt = "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too."
    const matches = txt.match(pattern)
    console.log(matches)

    const pattern1 = /[Aa]pple/g   //square bracket means either lowercase or uppercase A, and global flag indicates substring will be matches to all substrings within string, not just the first one 
    const matches1 = txt.match(pattern1)
    console.log(matches1)

    const pattern2 = /[Bb]anana|[Aa]pple/g   //searches for both "apple" and "banana" substrings within entire string
    const matches2 = txt.match(pattern2)
    console.log(matches2)
    //Square operator extracted ALL matches of "apple" and "banana" from the entire string
}

{
    //Escape character "\" in RegExp 
    const pattern = /\d/g     //"d" is a special character which indicates digits. On its own "d" only matches single digits
    const txt = "This regular expression example was made in January 12, 2022"
    const matches = txt.match(pattern)   //"d" is searching for digits within indicated string
    console.log(matches)    //matched digits are logged to console

    const pattern2 = /\d+/g //"d+" with "+" sign indicates regexp to find  one or more digits. "d+" will find 2 or more digits, so "12, 23, 42", but not "1, 2, 2, 3, 4, 2"
    const matches2 = txt.match(pattern2)
    console.log(matches2)   //Returns only values of 2 digits or more, becaues of "+" identifier 
}

{
    //Period "." character
    const pattern = /[a]./g //square bracket means "a" (lowercase) characters and "." meany any character except newline. This includes characters, digits, spaces etc.
    const txt = "Apple and banana are fruits"
    const match = txt.match(pattern)
    console.log(match)      //logs "a" and any other character that follors "a" character directly, except newline

    const pattern2 = /[a].+/g //this will match any "a" (lowercase) character and any other characters right behind them one or more times. So it will only return values of 3 characters and longer
    const match2 = txt.match(pattern2)
    console.log(match2)
}

{
    //Zero or many times (*) special character. This means pattern MAY not occur within string, or MAY occur once or many times
    const pattern = /[a].*/g  //. any character, + any character one or more times 
    const txt = 'Apple and banana are fruits'
    const matches = txt.match(pattern)
    console.log(matches)
}

{
    //Zero or once times (?) special character. This means pattern MAY occur once or not at all
    const txt = 'I am not sure if there is a convention how to write the word e-mail. Some people write it email others may write it as Email or E-mail.'
    const pattern = /[Ee]-?mail/g  // (?) means optional
    const matches = txt.match(pattern)
    console.log(matches)
}

{
    //Quantifier in RegExp
    //Lenght of the substring to be looked for in text can be specified, using a {} bracket. 
    const txt = 'This regular expression example was made in January 7, 2023.'
    const pattern = /\b\w{4}\b/g               // all words that are 4 characters long
    const matches = txt.match(pattern)
    console.log(matches)

    const pattern1 = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
    const matches1 = txt.match(pattern1)
    console.log(matches1)  //['This', 'made']

    const pattern2 = /\d{4}/g   // A number exactly four digits long
    const matches2 = txt.match(pattern2)
    console.log(matches2)

    const patter3 = /\d{1,4}/g  //A number between 1 and 4 digits long
    const matches3 = txt.match(patter3)
    console.log(matches3)
}

{
    //Cart (^). Indicates string starts with an certain character or string. eg "^this" means string has to start iwht "this"
    const txt = 'This regular expression example was made in January 7, 2023.'
    const pattern = /^This/g   //will return only strings starting with "This"
    const match = txt.match(pattern)
    console.log(match)

    //Negation
    const pattern1 = /[^A-Za-z,. ]+/g     //in this case (^) means negation, which means not to match A to Z, a to z, no space, no comma and no period. Will only match what's not these indicated values
    const match1 = txt.match(pattern1)
    console.log(match1)
}

{
    //Exact match. Refers to patters than MUST match specified pattern EXACTLY. Such patterns start with (^) and end with ($).
    const txt = "Dorian"
    const txt2 = "it to 3 as rrw"
    const pattern = /^[A-Z][a-z]{3,12}$/    //pattern MUST match uppercase/lowercase letters, string MUST be 3 to 12 characters long
    const result = pattern.test(txt)
    const result2 = pattern.test(txt2)
    console.log(result)             //returns "true" since tested text does contain words starting with Uppercaser letter 3 to 12 characters long
    console.log(result2)            //returns "false" since tested text doesn't contain any 3 to 12 character long word with starting with Uppercase letter
}


{
    const txt = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
    const pattern = /\d+/g
    const match = txt.match(pattern)
    const totalSum = match.reduce((acc, cur) => {
        return acc + parseInt(cur)
    }, 0)
    console.log(totalSum)
}

{
    points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
    const sortedPoints = points.map(x => parseInt(x, 10)).sort((a, b) => a - b)
    const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0]
    console.log(distance)
}

{
    function is_valid_variable(str) {
        const pattern = /^[a-zA-Z_][a-zA-Z0-9_]*$/
        return pattern.test(str)
    }
}

{
    let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

    function tenMostFrequentWords(arr, many) {
        const words = arr.split(/\s+/)
        const wordCounts = {};
        words.forEach(word => {
            word = word.toLowerCase()
            if (word in wordCounts) {
                wordCounts[word] += 1
            } else {
                wordCounts[word] = 1
            }
        })
        const sortedWords = Object.keys(wordCounts).sort((a, b) => {
            return wordCounts[b] - wordCounts[a]
        })
        const topTenWords = sortedWords.slice(0, many).map(word => {
            return { word: word, count: wordCounts[word] }
        })
        return topTenWords
    }
    console.log(tenMostFrequentWords(paragraph, 3))
}

{


    sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    console.log(countWords(sentence))

    function countWords(sentence) {
        // Remove all non-alphanumeric characters and spaces from the sentence
        const filteredSentence = sentence.replace(/[^a-zA-Z0-9.\s]/g, "");
        console.log(filteredSentence)
        // Split the sentence into individual words and count the number of occurrences of each word
        const words = filteredSentence.split(/\s+/);
        const wordCounts = {};
        words.forEach(word => {
            word = word.toLowerCase();
            if (word in wordCounts) {
                wordCounts[word] += 1;
            } else {
                wordCounts[word] = 1;
            }
        });

        // Sort the words by their count in descending order, and then by their lexicographic order in ascending order
        const sortedWords = Object.keys(wordCounts).sort((a, b) => {
            if (wordCounts[b] === wordCounts[a]) {
                return a.localeCompare(b);
            }
            return wordCounts[b] - wordCounts[a];
        });

        // Return the first three words in the sorted list, or the entire list if there are fewer than three unique words
        if (sortedWords.length < 3) {
            return sortedWords.map(word => {
                return { word: word, count: wordCounts[word] };
            });
        }
        return sortedWords.slice(0, 3).map(word => {
            return { word: word, count: wordCounts[word] };
        });
    }

}
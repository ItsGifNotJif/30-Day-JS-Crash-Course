//---------------Console object methpods-------------------//
{
    //console.log.  This method is used to log output in the browser console. One or more objects/strings can be outputted at the same time
    console.log("30 Days of Javascript")

    //in console.log() it is possible to include variables or objects into the string that's being logged. To do that special syntax is used, begiinning with "%" special character
    let x = 10;
    console.log("The value of x is : %d", x)

    //in console.log() the output can be styled using CSS. To do that, output string has to start with "%c" special character
    console.log("%c30 Days of Javascript", "color: green"); //The output in console is green in color
    console.log(
        '%c30 Days%c %cOf%c %cJavaScript',
        'color:green',
        '',
        'color:red',
        '',
        'color:yellow'          //different colors applied to console.log() output in browser console.
    )
}

{
    //console.warn() method. Displays a warning in browser console. Used to indicated faults, warnings, deprecation of code, and other things that need to be informed on. Useful in debugging. Usually orange/yellow in color
    console.warn("This is some code to be warned about")
    console.warn(
        'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
    )
    console.warn('Warning is different from error')
}

{
    //console.error() method. Displays an error message in browser console. Usually red in color
    console.error("This is an error message")
    console.error("Another error message here")
}

{
    //console.table() method. Displays a tabular table of information. Takes one REQUIRED argument of data, which MUST be either array or an object, and one OPTIONAL argument. Useful to make data easier to read
    //By default, shows index of array, and value of that index.
    const names = ["Dorian", "Ashgray", "Tokyo", "Japan"]
    console.table(names)

    //When used on object, console.table() returns key and its value as first and second columns of the table
    const user = {
        name: "Dorian",
        title: "Student",
        age: 25,
        country: "Japan",
        city: "Tokyo"
    }
    console.table(user)

    //When used on array of arrays, displays index of the global array as first column, and element's array values as other columns
    const countries = [
        ['Finland', 'Helsinki'],
        ['Sweden', 'Stockholm'],
        ['Norway', 'Oslo']
    ]
    console.table(countries)

    //When used on object with multiple properties, displays index of the object as first column, and that index's value as following columns
    const users = [
        {
            name: 'Asabeneh',
            title: 'Programmer',
            country: 'Finland',
            city: 'Helsinki',
            age: 250
        },
        {
            name: 'Eyob',
            title: 'Teacher',
            country: 'Sweden',
            city: 'London',
            age: 25
        },
        {
            name: 'Asab',
            title: 'Instructor',
            country: 'Norway',
            city: 'Oslo',
            age: 22
        },
        {
            name: 'Matias',
            title: 'Developer',
            country: 'Denmark',
            city: 'Copenhagen',
            age: 28
        }
    ]
    console.table(users)
}

{
    //console.time() method. Starts a timer that can be used to track how long an operation takes. Each timer can be given a unique name, and up to 10,000 timers can be used at once on a given page.
    //console.time() is used to start a timer with a name as argument, and console.timeEnd() is used to end timer with indicated name as argument
    //This method is useful when you need to learn exact time it takes to execute code, or to compare execution time of loops/functions etc.
    const countries = [
        ["Finland", "Helsinki"],
        ["Sweden", "Stockholm"],
        ["Norway", "Oslo"],
        ["Japan", "Tokyo"]
    ]

    console.time("Regular for loop")
    for (let i = 0; i < countries.length; i++) {
        console.log(countries[i][0], countries[i][1])
    }
    console.timeEnd("Regular for loop")

    console.time("for of loop")
    for (const [name, city] of countries) {
        console.log(name, city)
    }
    console.timeEnd("for of loop")

    console.time("forEach loop")
    countries.forEach(([name, city]) => {
        console.log(name, city)
    })
    console.timeEnd("forEach loop")

    //With console.time() method it becomes clear for loop is generally slower than forEach or for of loops.
}

{
    //console.info() method. Writes a message to console.
    console.info('30 Days Of JavaScript challenge is trending on Github')
    console.info('30 Days Of fullStack challenge might be released')
    console.info('30 Days Of HTML and CSS challenge might be released')
}

{
    //console.assert() method. Writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. Takes assertion expression as the first parameter. If this expression is failed, "Assertion failed" message will be displayed.
    console.assert(4 > 3, "4 is greater than 3")  //doesn't do anything, as the assertion is true
    console.assert(3 > 4, "3 is not greater than 4") //displays "3 is not greater than 4" error message in console, as the assertion condition is false.
}

{
    //console.group() method. Groups different log groups. Group opens with console.group() and ends with console.groupEnd(). Everything between these two lines is considered one group. Grouping makes code more readable and easier to work with.
    const names = ['Asabeneh', 'Brook', 'David', 'John']
    const countries = [
        ['Finland', 'Helsinki'],
        ['Sweden', 'Stockholm'],
        ['Norway', 'Oslo']
    ]
    const user = {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    }
    const users = [
        {
            name: 'Asabeneh',
            title: 'Programmer',
            country: 'Finland',
            city: 'Helsinki',
            age: 250
        },
        {
            name: 'Eyob',
            title: 'Teacher',
            country: 'Sweden',
            city: 'London',
            age: 25
        },
        {
            name: 'Asab',
            title: 'Instructor',
            country: 'Norway',
            city: 'Oslo',
            age: 22
        },
        {
            name: 'Matias',
            title: 'Developer',
            country: 'Denmark',
            city: 'Copenhagen',
            age: 28
        }
    ]

    console.group('Names')
    console.log(names)
    console.groupEnd()

    console.group('Countries')
    console.log(countries)
    console.groupEnd()

    console.group('Users')
    console.log(user)
    console.log(users)
    console.groupEnd()
}

{
    //console.count() method. Prints the number of times console.count() method is called. Helpful to cound number of times a function is called or code is executed.
    const fun = () => {
        console.count("Function has been called:")
    }
    fun();
    fun();
    fun();
    fun();
}

{
    const countries = [
        ['Finland', 'Helsinki'],
        ['Sweden', 'Stockholm'],
        ['Norway', 'Oslo']
    ]
    console.table(countries)
}
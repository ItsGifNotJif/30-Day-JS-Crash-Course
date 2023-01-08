//--------------------Error handling-------------------------/

{
    /*In JS, "try-catch-finally" block is used to handle exceptions, which are errors that occur at runtime.
    "Try" block contains code that might throw an exception. If an exception is thrown, the rest of "try" block is skipped, and "catch" block is executed. If no execption is thrown "catch" block is skipped.
    "Catch" block takes a single argument, which is an object containing information about the exception. This argument is referred to as "error object" or "exception object".
    "Finally" block is optional, its used to specify the code that will be executed regardless of whether "try" exception is thrown or not. Can be used to clean up resources used in "try" block. */

    try {
        //code that may throw an exception
    } catch (err) {
        //code to be executed if an error occurs
    } finally {
        //code that will be executed regardless if error occurs or not
    }


    try {
        let firstName = "Dorian"
        let fullName = firstName + " " + lastName
    } catch (err) {
        console.log(err)            //Throws error - lastName is not defined
    }

    try {
        let lastName = "Ashgray"
        let fullName = firstName + ' ' + lastName
    } catch (err) {  //Catch block parameter is usually referred to as e, err or error. This parameter is an object and its has a name, message and stack keys.
        console.log(err)        //error - firstName is not defined.
    } finally {
        console.log("This code will be executed in either case")
    }

    //error handling with name and message for catch block
    try {
        let lastname = "ashgray"
        let fullname = firstname + " " + lastname
    } catch (err) {
        console.log("Name of the error:", err.name)  //logs name of the error, or error type
        console.log("Message of the error:", err.message) //logs message of the error, or error/fault description
        console.log("Call stack of the error", err.stack)  //logs call stack of the error, a string that specifies the list of fuctions that have been called up to the point of error being thrown
    } finally {
        console.log("In any case code here will be executed")
    }

}

{
    //Throw statement. This statement allows creation of a custom error. When exception is thrown, JS runtime will try to find a "catch" block that can handle the exception. Throw statemet can tak an argument which can be any value, usually its an object
    { throw "error2"; /*generates an exception with a string value of "error2" */ }
    { throw 42; /*generates an exception with a integer value of "42"*/ }
    { throw true; /*generates an exception with value "true*/ }
    { throw new Error("Required"); /*generates an error object with message "Required" */ }
}

{
    const throwErrorExampleFun = () => {
        let message
        let x = prompt("Enter a number")
        try {
            if (x == "") throw "empty"
            if (isNaN(x)) throw "not a number"
            x = Number(x)
            if (x < 5) throw "too low"
            if (x > 10) throw "too high"
        } catch (err) {
            console.log(err)
        }
    }
    throwErrorExampleFun()
}

{
    //Error types. 
    //Reference error. An illegal reference has occured. This error is thrown if we use a variable that wasn't declared
    let firstName = "Dorian"
    let fullname = firstName + lastName   //throws Reference Error, as "lastname" variable hasn't been defined
    console.log(fullname)
}

{
    //Syntax error. This error occurs when syntax is wrong
    let square = 2 x 2              //throws unexpected identifier = "x" is an undefined identifier, should be "*" instead
    console.log(square)
    console.log("Hello, world")
}

{
    //TypeError. A type error has ocured. \
    let num = 10;       
    console.log(num.toUpperCase())  //throws TypeError: num.toUpperCase is not a function. toUpperCase() method doesn't apply to digits 
}

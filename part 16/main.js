//--------------------------JSON - JavaScript Object Notation---------------------------------//

{
    /*JSON. JSON (JavaScript Object Notation) is a light-weight data interchange format for storing and transporting data.
    JSON is easy for humans to read, and is usually used to send data from a server to the client.
    JSON format used "JSON" object, a standard JavaScript library object.
    JSON object can ONLY be a string or a text.  */

    //example JSON object
    //JSON object keys should be inside double quotes, or they should be a string. JSON can be converted into object, and object can be converted into JSON


    //To convert JSON into regular object, we need to use JSON.parse() method. To convert Object into JSON, we need to use JSON.stringify() method

    // JSON.parse(json[, reviver])
    //JSON or text
    //reviver is an optional callback function
    /*JSON.parse(json, (key, value) =>{

    })
    */


    {
        const usersText = `{
            "users": [
            {
                "firstName": "Asabeneh",
                "lastName": "Yetayeh",
                "age": 250,
                "email": "asab@asb.com"
            },
            {
                "firstName": "Alex",
                "lastName": "James",
                "age": 25,
                "email": "alex@alex.com"
            },
            {
                "firstName": "Lidiya",
                "lastName": "Tekle",
                "age": 28,
                "email": "lidiya@lidiya.com"
            }
        ]
    }`
        const usersObj = JSON.parse(usersText, undefined, 4)
        console.log(usersObj)
    }


}


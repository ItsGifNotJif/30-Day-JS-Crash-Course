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

  const checkForEthiopa = countries.indexOf("Ethiopia");
  if(checkForEthiopa == -1){
    console.log("Ethiopa doesnt exist within the array")
  }else{
    console.log("Ethiopa")
  }

  const slicedCountries = countries.slice(0, 10);
  console.log(slicedCountries);

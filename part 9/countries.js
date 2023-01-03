const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

{
  function categorizeCountries(arr) {
    return arr.filter((country) => country.includes("land"))
  }

  function categorizeCountries1(arr) {
    return arr.filter((country) => country.includes("a"))
  }
  console.log(categorizeCountries(countries))
  console.log(categorizeCountries1(countries))

  function letterStartedWith(arr) {
    const letterCount = {};
    for (let i = 0; i < arr.length; i++) {
      const firstLetter = countries[i][0]
      if (!letterCount[firstLetter]) {
        letterCount[firstLetter] = 1;
      } else {
        letterCount[firstLetter]++
      }
    }
    const letterCountArray = []
    for (const letter in letterCount) {
      letterCountArray.push({ letter: letter, count: letterCount[letter] });
    }
    return letterCountArray;
  }

  console.log(letterStartedWith(countries));


  function getFirstTenCountries(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i < 10) {
        result.push(arr[i])
      } else {
        break;
      }
    } return result;
  }
  console.log(getFirstTenCountries(countries));

  function getLastTenCountries(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= arr.length - 11; i--) {
      result.push(arr[i])
    } return result;
  } console.log(getLastTenCountries(countries));

  {
    function mostFrequentInitialLetter(arr) {
      let counts = {};
      for (let i = 0; i < arr.length; i++) {
        let letter = arr[i].charAt(0);
        if (counts[letter]) {
          counts[letter]++;
        } else {
          counts[letter] = 1;
        }
      }
      let mostFrequent = ' ';
      let highestCount = 0;
      for (let letter in counts) {
        if (counts[letter] > highestCount) {
          mostFrequent = letter;
          highestCount = counts[letter];
        }
      }
      return mostFrequent;
    }
    console.log(mostFrequentInitialLetter(countries))
  }

}
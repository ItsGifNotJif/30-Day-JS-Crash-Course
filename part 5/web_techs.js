     
      const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
      ]

      const checkForSass = webTechs.indexOf("SASS")
      if(checkForSass == -1){
        console.log(webTechs.push("SASS"))
      }else{
        console.log("SASS is CSS preprocessor")
      }

      console.log(webTechs)
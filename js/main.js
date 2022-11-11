var checkName=function(name, names){
  const capitalizeFirstLetter = (n)=> n.charAt(0).toUpperCase() + n.slice(1);
  name = name.toLowerCase();
  console.log("upper name is: " + name);
  const map = {'a': 'á', 'd': 'ð', 'e': 'é', 'i': 'í', 'o': 'ó', 'u': 'ú', 'y': 'ý'};
	

  for (let i=1; i<name.length; i++){
    //change th to þ  
    if(name[i-1]=='t' && name[i]=='h'){
      name = name.slice(0,i-1)+'þ'+ name.slice(i+1,name.length)
      //name = 'þ' + name.slice(i-1,2,name.length);
    }
    //change ae to æ
    if(name[i-1]=='a' && name[i]=='e'){
      name = name.slice(0,i-1)+'æ'+ name.slice(i+1,name.length)
      
      //name = 'æ' + name.slice(2,name.length);
    }
    //change oe to ö
    if(name[i-1]=='o' && name[i]=='e'){
      name = name.slice(0,i-1)+'ö'+ name.slice(i+1,name.length)
      
      //name = 'ö' + name.slice(2,name.length);
    }
  }

  const possibleNames = [name];
  for(let c in name){
    
    const replacement = map[name[c]] //will be undefined if the letter does not have a corresponding special character
    if(replacement) {
      possibleNames.forEach(n=>{
        possibleNames.push(n.slice(0,c)+replacement+ n.slice(Number(c)+1,n.length))
      })
      //need to push to new array for each possibleWrongCharacter a new version of the word

    }
  }
  let IceName = ""
  console.log(possibleNames)
	
  possibleNames.forEach(n=>{
    const N = capitalizeFirstLetter(n)
    if (names.includes(N)) IceName = N
  })
	
  return IceName;
}

module.exports = checkName;

function palindromeChecker(str) {
    let regex = /[a-zA-Z0-9]/g;
    let cleanStr = str.match(regex);
  
    cleanStr.map( (item, index) => {
      cleanStr[index] = cleanStr[index].toLowerCase(); 
    });

    cleanStr = cleanStr.join("");
  
    let reverseStr = "";

    for(let i=(cleanStr.length - 1); i >= 0; i--){
      reverseStr += cleanStr[i];
    }
  
    return (cleanStr === reverseStr) ? true : false;
}
  
palindromeChecker("A man, a plan, a canal. Panama"); // console: true

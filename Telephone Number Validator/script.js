function telephoneCheck(str) {
    let pureNumber = str.match(/[0-9()]/g);
    let fakeNumber = str.match(/[0-9]/g);
    let counter = 0;
  
    if(/^-/.test(str) || str.includes("?")){
      return false;
    }
  
    for(let i=0; i < 10; i++){
      let num = parseInt(pureNumber[i]);
      
      if(pureNumber[i] == "(" || pureNumber[i] == ")"){
        counter++;
        continue;
      } else if(!Number.isInteger(num)){
        return false;
      }
    }
  
    if(fakeNumber.length > 10){
      if(fakeNumber[0] != "1" || fakeNumber.length > 11){
        return false;
      }
      fakeNumber.shift();
    }
  
    let num = 0;
    if(str.includes("-")){
      num = str.match(/-/g);
      if(num.length > 2){
        return false;
      }
    }
  
    return counter == 1 ? false : true;
}
  
telephoneCheck("1 456 789 4444"); // console: true
telephoneCheck("(555)5(55?)-5555"); // console: false
telephoneCheck("555)-555-5555"); // console: false
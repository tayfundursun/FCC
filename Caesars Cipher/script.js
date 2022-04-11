function rot13(str) {
    let newStr = "";
    
    const ROT13 = [
      ["A", "N"],
      ["B", "O"],
      ["C", "P"],
      ["D", "Q"],
      ["E", "R"],
      ["F", "S"],
      ["G", "T"],
      ["H", "U"],
      ["I", "V"],
      ["J", "W"],
      ["K", "X"],
      ["L", "Y"],
      ["M", "Z"],
    ];
    
    for(let i=0; i < str.length; i++){
      for(let j=0; j < ROT13.length; j++){
        if(str[i] == ROT13[j][0]){
          newStr += ROT13[j][1];
        } else if(str[i] == ROT13[j][1]){
          newStr += ROT13[j][0];
        } 
      }
      
      if(/\W/.test(str[i])){
        newStr += str[i];
      }
    }
  
    return newStr;
}
  
rot13("SERR CVMMN!"); // console: FREE PIZZA!
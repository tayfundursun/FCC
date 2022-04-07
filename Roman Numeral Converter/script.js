function convertToRoman(num) {
    let romaNum = "";
  
    let arr = [
      [1000, "M"],
      [900, "CM"],
      [500, "D"],
      [400, "CD"],
      [100, "C"],
      [90, "XC"],
      [50, "L"],
      [40, "XL"],
      [10, "X"],
      [9, "IX"],
      [5, "V"],
      [4, "IV"],
      [1, "I"] ];
    
    for(let i=0; i < arr.length; i++){
      if(num >= arr[i][0]){
        num -= arr[i][0];
        romaNum += arr[i][1];
        i--;
      }
    }
    
    return romaNum;
}
  
convertToRoman(1881); // console: MDCCCLXXXI
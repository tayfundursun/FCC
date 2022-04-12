function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let status;
    let currency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let arr = [];
    let length = 0;
    
    let money = 0;
    for(let i=0; i < cid.length; i++){
      money += cid[i][1];
    }
  
    if(money < change) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if(change === money) {
      return {status: "CLOSED", change: cid};
    }
  
    for(let i = currency.length - 1, j = 0; i >= -1; i--){
      if(j === 7) { j = 6 };
  
      let result = 0;
      let counter = 0;
      
      while(currency[i] <= change && cid[i][1] > 0){ 
        change -= currency[i];
        change = change.toFixed(2);
        cid[i][1] -= currency[i];
  
        if(cid[i][1] < 0){
          continue;
        } else {
          result += currency[i];
        }
  
        if(status === undefined) status = "OPEN";
        
        if(counter === 0){
          arr.push([cid[i][0], result]);
        } else {
          arr[j][1] += currency[i];
        }
        counter++;
      } 
  
      if(arr.length > length) j++; length = arr.length;
    }
  
    if (change > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
    
    return {status: status, change: arr};
}
  
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
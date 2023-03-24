
let amountElement2 = document.getElementById('amount2')


let amount2 = amountElement2.value



let render2 = (amount2) =>{
   amountElement2.value = amount2;
}

let handlePlus2 = () =>{
  
  amount2 ++
 
  render2(amount2)
}
let handleMinus2 = () =>{
  if(amount2 > 1){
    amount2 --
 
  render2(amount2)
  }
  
}
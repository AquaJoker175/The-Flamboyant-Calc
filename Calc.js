let equation = ""; 

function enter(value) {
  equation += value; 
  updateDisplay();
}

function updateDisplay() {
  document.querySelector('.display-box').value = equation;
}
 function calcu(){
   try{
     let result = eval(equation);
   console.log(result)
     document.querySelector('.display-box').value = result;
     equation = result.toString()
   } catch {
     document.querySelector('.display-box').value = "error";
     equation = "";
   }
 }
 function clearDisplay(){
   equation = "";
   updateDisplay();
 }

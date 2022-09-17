function updateCaseNumber(){
   const caseField = document.getElementById('case-field');
   const caseFieldString = caseField.value;
   const caseFieldValue = parseInt(caseFieldString);
   return caseFieldValue;
   

}

function updateCaseTotalPrice(newCaseNumber){
   const casePrice = newCaseNumber * 59;
   const caseTotal = document.getElementById('case-total');
   caseTotal.innerText = casePrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
   const previousCaseNumber = updateCaseNumber();
   const newCaseNumber = previousCaseNumber + 1;
   const caseField = document.getElementById('case-field');
   caseField.value = newCaseNumber;

   updateCaseTotalPrice(newCaseNumber);
   
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
   
   const previousCaseNumber = updateCaseNumber();
   const newCaseNumber = previousCaseNumber - 1;
   const caseField = document.getElementById('case-field');
   caseField.value = newCaseNumber;
   

   updateCaseTotalPrice(newCaseNumber);
   
})
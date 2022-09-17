function updateCaseTotalPrice(newCaseNumber){
    const casePrice = newCaseNumber * 59;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = casePrice;
}




document.getElementById('btn-case-plus').addEventListener('click', function(){
    const previousCaseNumber = updateCaseNumber('case-field');
    const newCaseNumber = previousCaseNumber + 1;
    const caseField = document.getElementById('case-field');
    caseField.value = newCaseNumber;

    updateCaseTotalPrice(newCaseNumber);

    calculateSubTotal();
l;

    
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    
    const previousCaseNumber = updateCaseNumber('case-field');
    const newCaseNumber = previousCaseNumber - 1;
    const caseField = document.getElementById('case-field');
    caseField.value = newCaseNumber;
    

    updateCaseTotalPrice(newCaseNumber);
     

    calculateSubTotal();


 

    
})
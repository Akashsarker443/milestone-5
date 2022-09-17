function updateCaseNumber(elementId){
    const caseField = document.getElementById(elementId);
    const caseFieldString = caseField.value;
    const caseFieldValue = parseInt(caseFieldString);
    return caseFieldValue;
    
}

function getTextElementById(elementId){
   const previousPhoneTotal = document.getElementById(elementId);
   const previousPhoneTotalString  = previousPhoneTotal.innerText;
   const previousPhoneValue = parseInt(previousPhoneTotalString);
   return previousPhoneValue;
}
function setTextElementById (elementId, value){
    const text = document.getElementById(elementId);
    text.innerText = value;
}

function calculateSubTotal(){
    const previousCaseTotal = getTextElementById('case-total');
    const previousPhoneTotal = getTextElementById('phone-total');
    
    const currentSubTotal = previousCaseTotal + previousPhoneTotal;
    setTextElementById('sub-total', currentSubTotal);

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const totalTaxAmount = parseFloat(taxAmountString);
    setTextElementById('tax-total', totalTaxAmount);

    const finalAmount = currentSubTotal + totalTaxAmount;
    setTextElementById('final-total', finalAmount);
    
}
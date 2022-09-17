function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalElementString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(phoneTotalElementString);
    return currentPhoneTotal;
 }

 function setTextElementById(elementId, value){
    const subTotalElement  = document.getElementById(elementId);
    subTotalElement.innerText = value;
 }

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal  = currentCaseTotal + currentPhoneTotal;
    
    setTextElementById('sub-total', currentSubTotal);


    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementById('tax-total', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementById('final-total', finalAmount);


    // another way of finding 10%

    // const taxAmount = currentSubTotal / 100;
    // const totalTax = taxAmount * 10;
    // setTextElementById('tax-total', totalTax);





    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;


} 
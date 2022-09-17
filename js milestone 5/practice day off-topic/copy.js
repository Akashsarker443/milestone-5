function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    // if(isNaN(inputField)){
    //     alert('please provide a valid number');
    //     return;
    // }    
  
    return inputFieldValue;
}


function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue; 
}


function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}




// jahdfkkkkkkkkkkkkkkk

document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const newDepositAmount = getInputFieldValueById('deposit-field');
    

    const previousDepositTotal = getTextElementValueById('deposit-total');
    
    const newDepositTotal = previousDepositTotal + newDepositAmount;


    setTextElementValueById('deposit-total', newDepositTotal);

    //  total balance 
    const previousBalanceTotal = getTextElementValueById('total-balance');

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementValueById('total-balance', newBalanceTotal);

})




// jfkluaoirkjkdfjklasjdfl;kjsdf
document.getElementById('btn-withdraw').addEventListener('click', function(){
   
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     
    
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    
    
    const previousBalanceTotal =getTextElementValueById('total-balance');
    
    const newTotalBalance = previousBalanceTotal - newWithdrawAmount;
    
    setTextElementValueById('total-balance', newTotalBalance);
        
    
    
    })
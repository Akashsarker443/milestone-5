function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    if(inputFieldString === ''){
        alert('please provide number');
        return;
    }
    const inputFieldValue = Number(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
}


function getTextElementValueById(elementId){
    const textField = document.getElementById(elementId);
    const textFieldString = textField.innerText;
    const textFieldValue = parseFloat (textFieldString);
    return textFieldValue;
}

function setTextElementById(elementId, newValue){
    const text = document.getElementById(elementId);
    text.innerText = newValue;
}






// document.getElementById('btn-deposit').addEventListener('click', function(){
  
//     const depositField = document.getElementById('deposit-field');
//     const depositAmountString = depositField.value;
//     // if( depositAmountString === ''){
//     //     alert('please provide a valid number');
//     //     return;
//     // }
//     const newDepositAmount = parseFloat(depositAmountString);

//     // const newDepositAmount = Number(depositAmountString);
    

//       //  clear the input field
//       depositField.value = '';

//       if(isNaN(newDepositAmount)){
//         alert('please provide a valid number');
//         return;
//       }


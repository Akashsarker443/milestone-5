function updatePhoneTotalPrice(newPhoneNumber){
    const phonePrice = newPhoneNumber * 1219;
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phonePrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const previousPhoneField  = updateCaseNumber('phone-field');
    const newPhoneNumber = previousPhoneField + 1;
    const phoneField = document.getElementById('phone-field');
    phoneField.value = newPhoneNumber;

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
   


})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const previousPhoneField  = updateCaseNumber('phone-field');
    const newPhoneNumber = previousPhoneField - 1;
    const phoneField = document.getElementById('phone-field');
    phoneField.value = newPhoneNumber;

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

})

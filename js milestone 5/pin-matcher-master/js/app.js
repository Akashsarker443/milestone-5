function getPin(){
    const pin =  generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinfield = document.getElementById('display-pin');
    displayPinfield.value = pin;
})


document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if( number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;

        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }

})


document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinfield = document.getElementById('display-pin');
    const currentPin = displayPinfield.value;

     
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    if( typedNumber === currentPin){
        const pinSuccessMsg = document.getElementById('pin-success');
        pinSuccessMsg.style.display = 'block';
        const pinFailureMsg = document.getElementById('pin-failure');
        pinFailureMsg.style.display = 'none';

    }
    else{
        const pinFailureMsg = document.getElementById('pin-failure');
        pinFailureMsg.style.display = 'block';
        const pinSuccessMsg = document.getElementById('pin-success');
        pinSuccessMsg.style.display = 'none';

        
    }

    // another way of hiding one pin-msg

   
    // const pinSuccessMsg = document.getElementById('pin-success'); 
    // const pinFailureMsg = document.getElementById('pin-failure');

    // if( typedNumber === currentPin){
    //     pinSuccessMsg.style.display = 'block';
    //     pinFailureMsg.style.display = 'none';

    // }
    // else{
    //     pinFailureMsg.style.display = 'block';
    //     pinSuccessMsg.style.display = 'none';

    // }

    
})
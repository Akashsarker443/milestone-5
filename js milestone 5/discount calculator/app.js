document.getElementById('input-field').addEventListener('keyup', function(event){
    const text = event.target.value;
    const applyButton = document.getElementById('btn-apply');
    if( text === 'DEMO'){
        applyButton.removeAttribute('disabled');
    }
    else{
        applyButton.setAttribute('disabled', true)
    }
})


document.getElementById('btn-pay').addEventListener('click', function(){
    const price = document.getElementById('price');
    const priceTotal = price.innerText;
    const discountPrice = priceTotal / 100;
    const finalPrice = discountPrice * 70;
    price.innerText = finalPrice;
})
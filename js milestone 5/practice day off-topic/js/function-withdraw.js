document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
     
  if(isNaN(newWithdrawAmount)){
    alert('please provide a valid number');
    return;
  }

    const preWithdrawValue = getTextElementValueById('withdraw-total');

    
    const preTotalBalance = getTextElementValueById('balance-total');

    if(newWithdrawAmount > preTotalBalance){
        alert('you dont have enough money');
        return;
    }
    
    const totalWithdraw = newWithdrawAmount + preWithdrawValue;
    setTextElementById('withdraw-total', totalWithdraw);
    


    const totalBalance = preTotalBalance - newWithdrawAmount;
    setTextElementById('balance-total', totalBalance);
})
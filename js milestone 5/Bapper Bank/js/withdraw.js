document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount =parseFloat(newWithdrawAmountString);

   
    //  clear the deposit field
    withdrawField.value = '';   


    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }
  

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  
    // get the current total balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalstring = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalstring);

     



    if( newWithdrawAmount > previousBalanceTotal){
        alert('Baap ar bank a taka nai');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;



    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount ;

    balanceTotal.innerText = currentBalanceTotal;





    
})
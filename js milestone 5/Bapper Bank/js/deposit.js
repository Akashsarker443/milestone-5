document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount =parseFloat(newDepositAmountString);


    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;


    depositTotalElement.innerText = currentDepositTotal;

    // get the current total balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalstring = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalstring);


    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = currentBalanceTotal;





    //  clear the deposit field
    depositField.value = '';
    
})
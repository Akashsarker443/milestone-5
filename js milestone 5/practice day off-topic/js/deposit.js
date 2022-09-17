document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputField = document.getElementById('deposit-field');
    const inputFieldValueString = inputField.value;
    const newDepositAmount = parseFloat(inputFieldValueString);
     
    inputField.value = '';

    if(isNaN(newDepositAmount)){
        alert('please provide a valid number');
        return;
    }



    const depositTotal = document.getElementById('deposit-total');
    const depositTotalString = depositTotal.innerText;
    const predepositTotal = parseFloat(depositTotalString);

    const newTotalDeposit = predepositTotal + newDepositAmount;
    depositTotal.innerText = newTotalDeposit;


    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(balanceTotalString);


    const newTotalBalance = preBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newTotalBalance;





})
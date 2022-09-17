document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');

    const preDepositvalue =  getTextElementValueById('deposit-total');
    const totalDeposit = preDepositvalue + newDepositAmount;

    setTextElementById('deposit-total', totalDeposit);


    const preTotalBalance = getTextElementValueById('balance-total');

    const totalBalance = preTotalBalance + newDepositAmount;

    setTextElementById('balance-total', totalBalance);
})
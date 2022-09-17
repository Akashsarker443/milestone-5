document.getElementById('btn-withdraw ').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawValueString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawValueString);

    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }
    

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotal.innerText;
    const preWithdrawTotal = parseFloat(withdrawTotalString);

    

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(balanceTotalString);



    if(newWithdrawAmount > preBalanceTotal){
        alert('You dont have enough money');
        return;
    }
   
    const totalWithdrawAmount = preWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = totalWithdrawAmount;


    const totalBalance = preBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = totalBalance;

})
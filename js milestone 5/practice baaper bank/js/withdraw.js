document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);

    // clear the input field
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
      }



    const withdrawBalance = document.getElementById('withdraw-balance');
    const preWithdrawAmountString = withdrawBalance.innerText;
    const preWithdrawAmount = parseFloat(preWithdrawAmountString);



    const totalBalance = document.getElementById('total-balance');
    const totalBalanceString = totalBalance.innerText;
    const preTotalBalance = parseFloat(totalBalanceString);


    if(newWithdrawAmount > preTotalBalance){
      alert("you can't withdraw more than your balance");
      return;
    }


    const currentWithdrawBalance = preWithdrawAmount + newWithdrawAmount;
    withdrawBalance.innerText = currentWithdrawBalance;



    const currentTotalBalance = preTotalBalance - newWithdrawAmount;

    totalBalance.innerText = currentTotalBalance;

})
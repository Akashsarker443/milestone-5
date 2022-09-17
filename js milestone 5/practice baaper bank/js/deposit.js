document.getElementById('btn-deposit').addEventListener('click', function(){
  
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    // if( depositAmountString === ''){
    //     alert('please provide a valid number');
    //     return;
    // }
    const newDepositAmount = parseFloat(depositAmountString);

    // const newDepositAmount = Number(depositAmountString);
    

      //  clear the input field
      depositField.value = '';

      if(isNaN(newDepositAmount)){
        alert('please provide a valid number');
        return;
      }



    const depositBalance = document.getElementById('deposit-balance');
    const preDepositBalanceString = depositBalance.innerText;
    const preDepositBalance = parseFloat(preDepositBalanceString);


    const currentDepositAmount = newDepositAmount + preDepositBalance;
    depositBalance.innerText = currentDepositAmount;



    const totalBalance = document.getElementById('total-balance');
    const totalBalanceString = totalBalance.innerText;
    const preTotalBalance = parseFloat(totalBalanceString);



    const currentTotalBalance = preTotalBalance + newDepositAmount;
    totalBalance.innerText = currentTotalBalance;


  
})



//------------------Deposit Part------------------- //


const depositButton = document.getElementById('deposit-btn');
depositButton.addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositValueString = depositField.value;
    const depositValue = parseFloat(depositValueString);
    depositField.value = '';
    if (isNaN(depositValue)) {
        alert('Please Provide a number Value');
        return;
    }
    const depositTotalField = document.getElementById('deposit-total');
    const depositTotalString = depositTotalField.innerText;
    const depositTotal = parseFloat(depositTotalString);
    const depositOverallTotal = depositValue + depositTotal;
    depositTotalField.innerText = depositOverallTotal;


    // total balance with deposit //
    const availableTotalField = document.getElementById('available-total');
    const avaiableBalaceString = availableTotalField.innerText;
    const availableBalanceNumber = parseFloat(avaiableBalaceString);

    const availableBalance = depositValue + availableBalanceNumber;
    availableTotalField.innerText = availableBalance;


})

//----------------------- Withdraw Part------------------- //
const withdrawButton = document.getElementById('withdraw-btn');
withdrawButton.addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawValueString = withdrawField.value;
    const withdrawValue = parseFloat(withdrawValueString);
    withdrawField.value = '';
    if (isNaN(withdrawValue)) {
        alert('Please Provide a number Value');
        return;
    }
    const withdrawTotalField = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalField.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);


    //------------------- total balance with withdraw ------------------------//
    const availableTotalField = document.getElementById('available-total');
    const avaiableBalaceString = availableTotalField.innerText;
    const availableBalanceNumber = parseFloat(avaiableBalaceString);
    if (withdrawValue > availableBalanceNumber) {
        alert('Vai eto taka apnar wallet e nai');
        return;
    }
    const withdrawOverallTotal = withdrawValue + withdrawTotal;
    withdrawTotalField.innerText = withdrawOverallTotal;
    const availableBalance = availableBalanceNumber - withdrawValue;
    availableTotalField.innerText = availableBalance;
})




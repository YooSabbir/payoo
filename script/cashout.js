document.getElementById("withdraw-btn").addEventListener("click", function () {
    const cashoutNumInput = document.getElementById("agent-number");
    const cashoutNum = cashoutNumInput.value;
    // console.log(cashoutNum)
    if(cashoutNum.length !=11){
        alert(`Invalid number, please type 11 digit number`)
        return;
    }
    const cashOutAmmountInput = document.getElementById("cashout-amount");
    const cashOutAmmount = cashOutAmmountInput.value;
    // console.log(cashOutAmmount)
    const balance = document.getElementById("balance")
    const balanceAmmount= balance.innerText;
    // console.log(balanceAmmount)
    const newBalance = Number(balanceAmmount) - Number(cashOutAmmount)
    // console.log(newBalance)
    if(newBalance < 0){
        alert("Invalid ammount");
        return;
        console.log(newBalance)
    }

    const cashoutPinInput = document.getElementById("cashout-pin")
    const pin = cashoutPinInput.value;
    if(pin === '1234'){
        alert("Cashout successful")
        // console.log(newBalance)
        balance.innerText = newBalance;
    }else{
        alert("Invalid pin")
    }
})
var billTotal;
var tipPercent;
var totalTip;
var numberOfPeople;

function SetBillValue(element){
    try {
        billTotal = parseFloat(element.value);
        console.log(billTotal);

        element.classList.add("input");
        element.classList.remove("input-error");

        SetAmounts();
    } catch (error) {
        element.classList.add("input-error");
        element.classList.remove("input");
        return;
    }
}

function SetCustomPercent(element){
    try {
        tipPercent = parseInt(element.value);
        console.log(tipPercent);

        if(tipPercent > 100){
            tipPercent = 100;
            element.value = "100";
        }
        if(tipPercent < 0){
            tipPercent = 0;
            element.value = "0";
        }

        element.classList.add("input");
        element.classList.remove("input-error");

        SetAmounts();
    } catch (error) {
        element.classList.add("input-error");
        element.classList.remove("input");

        tipPercent = 0;
        return;
    }
}

function SetPercent(percent){
    tipPercent = parseInt(percent);
    console.log(tipPercent);
    SetAmounts();
}

function SetNumberOfPeople(element){
    const errorElement = document.getElementById("people-error");
    console.log(errorElement)
    try {
        errorElement.classList.add("hidden");
        
        numberOfPeople = parseFloat(element.value);
        console.log(numberOfPeople);

        if(numberOfPeople == 0){
            errorElement.classList.remove("hidden");
            
            element.classList.add("input-error");
            element.classList.remove("input");
        }else{
            element.classList.add("input");
            element.classList.remove("input-error");
        }

        SetAmounts();
    } catch (error) {
        errorElement.classList.remove("hidden");

        element.classList.add("input-error");
        element.classList.remove("input");
        return;
    }
}

function SetAmounts(){
    const amountElement = document.getElementById("amount-per-person");
    const totalElement = document.getElementById("total-per-person");

    if(billTotal > 0 && tipPercent > 0 && numberOfPeople > 0){
        let tipAmount = billTotal * (tipPercent/100);
        let tipPerPeson = tipAmount/numberOfPeople;
        let totalPerPerson = billTotal/numberOfPeople + tipPerPeson;

        console.log(`tipAmount: ${tipAmount} | billTotal: ${billTotal} | tipPercent: ${tipPercent}`)

        amountElement.textContent = "$" + tipPerPeson.toFixed(2);
        totalElement.textContent = "$" + totalPerPerson.toFixed(2);
    }
}

function Reset(){
    const billElement = document.getElementById("bill");
    const customPercentElement = document.getElementById("custom-percent");
    const personsElement = document.getElementById("number-of-people");
    const amountElement = document.getElementById("amount-per-person");
    const totalElement = document.getElementById("total-per-person");

    billElement.value = "";
    customPercentElement.value = "";
    personsElement.value = "";

    amountElement.textContent = "$0.00";
    totalElement.textContent = "$0.00";

    billTotal = 0;
    tipPercent = 0;
    totalTip = 0;
    numberOfPeople = 0;
}
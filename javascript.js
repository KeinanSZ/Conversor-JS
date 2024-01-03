const convertButton = document.querySelector(".convert-butt");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyUp = document.querySelector(".currency-up");
    const currencyDown = document.querySelector(".currency-down");

    console.log(currencySelect.value);

    const dolarToday = 4.87;
    const euroToday = 5.37;
    const bitcoinToday = 221600.81;
    const libraToday = 6.21;
    

    if (currencySelect.value == "dolar") {
        currencyDown.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == "euro") {
        currencyDown.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday);
    }

    if (currencySelect.value == "Bitcoin") {
        currencyDown.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrencyValue / bitcoinToday);
    }

    if (currencySelect.value == "libra") {
        currencyDown.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday);
    }

    currencyUp.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue);

  
    

    console.log(convertValues);
}
function changeCurrency() {


    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/moedaUSD.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if (currencySelect.value == "Bitcoin") {
        currencyName.innerHTML = "BTC"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}


currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);

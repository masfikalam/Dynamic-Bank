// passing from login to transaction area
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function() {
    const loginArea = document.getElementById('main');
    loginArea.style.display = 'none';
    document.getElementById('transaction').style.display = "block";
})

// deposit calculation
const depoBtn = document.getElementById('deposit');
depoBtn.addEventListener('click', function() {
    let balValue = parseFloat(document.getElementById('balance-value').innerText);
    let depoValue = parseFloat(document.getElementById('deposit-value').innerText);
    let depoAmount = parseFloat(document.getElementById('depo-amount').value);
    if (depoAmount > 0) {
        let depoAddition = depoAmount + depoValue;
        let balAddition = balValue + depoAmount;
        document.getElementById('balance-value').innerText = balAddition;
        document.getElementById('deposit-value').innerText = depoAddition;
        document.getElementById('depo-amount').value = "";
    }
})

// withdraw calculation
const withBtn = document.getElementById('withdraw');
withBtn.addEventListener('click', function() {
    let balValue = parseFloat(document.getElementById('balance-value').innerText);
    let withValue = parseFloat(document.getElementById('withdraw-value').innerText);
    let withAmount = parseFloat(document.getElementById('with-amount').value);
    if (withAmount > 0 && withAmount < balValue) {
        let withAddition = withAmount + withValue;
        let balAddition = balValue - withAmount;
        document.getElementById('balance-value').innerText = balAddition;
        document.getElementById('withdraw-value').innerText = withAddition;
        document.getElementById('with-amount').value = "";
    }
})
// 
function calculateInterest() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    var interest = (principal * rate * time) / 100;

    document.getElementById("result").innerHTML = "The interest rate is: " + interest.toFixed(2) + " USD.";
}
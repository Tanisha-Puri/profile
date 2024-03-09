function calculatePay() {
    var employeeName = document.getElementById("employeeName").value;
    var hourlyWage = parseFloat(document.getElementById("hourlyWage").value);
    var hoursWorked = parseFloat(document.getElementById("hoursWorked").value);

    if (isNaN(hourlyWage) || hourlyWage <= 0) {
        alert("Please enter a valid hourly wage.");
        return;
    }

    if (isNaN(hoursWorked) || hoursWorked < 0) {
        alert("Please enter a valid number of hours worked.");
        return;
    }

    var grossPay = hourlyWage * hoursWorked;

    var payOutputDiv = document.getElementById("payOutput");
    payOutputDiv.innerHTML = "<p>Employee Name: " + employeeName + "</p><p>Gross Pay: $" + grossPay.toFixed(2) + "</p>";
}

//i want the colors to change with the time
//i want to save to local storage
//alert message: "i just saved to local storage"
var currentTime = new Date().getHours()

$("#currentDay").text(moment().format("MMM Do YY")); 

window.onload = function () {
    ppf()
}

function ppf() {
    if (currentTime > 9) {
        $("#9am").addClass("past")
    } else if (currentTime >= 9 && currentTime <10) {
        $("#9am").addClass("present")
    } else if (currentTime < 9) {
        $("#9am").addClass("future")
    }
}
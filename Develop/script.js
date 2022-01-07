var currentTime = new Date().getHours()

$("#currentDay").text(moment().format("MMM Do YY"))

window.onload = function () {
    ppf()
}

function ppf() {
    if (currentTime > 9) {
        $("#9am").addClass("past")
    } else if (currentTime >= 9 && currentTime < 10) {
        $("#9am").addClass("present")
    } else if (currentTime < 9) {
        $("#9am").addClass("future")
    }
    if (currentTime > 10) {
        $("#10am").addClass("past")
    } else if (currentTime >= 10 && currentTime < 11) {
        $("#10am").addClass("present")
    } else if (currentTime < 10) {
        $("#10am").addClass("future")
    }
    if (currentTime > 11) {
        $("#11am").addClass("past")
    } else if (currentTime >= 11 && currentTime < 12) {
        $("#11am").addClass("present")
    } else if (currentTime < 11) {
        $("#11am").addClass("future")
    }
    if (currentTime > 12) {
        $("#12pm").addClass("past")
    } else if (currentTime >= 12 && currentTime < 13) {
        $("#12pm").addClass("present")
    } else if (currentTime < 12) {
        $("#12pm").addClass("future")
    }
    if (currentTime > 13) {
        $("#13pm").addClass("past")
    } else if (currentTime >= 13 && currentTime < 14) {
        $("#13pm").addClass("present")
    } else if (currentTime < 13) {
        $("#13pm").addClass("future")
    }
    if (currentTime > 14) {
        $("#14pm").addClass("past")
    } else if (currentTime >= 14 && currentTime < 15) {
        $("#14pm").addClass("present")
    } else if (currentTime < 14) {
        $("#14pm").addClass("future")
    }
    if (currentTime > 15) {
        $("#15pm").addClass("past")
    } else if (currentTime >= 15 && currentTime < 16) {
        $("#15pm").addClass("present")
    } else if (currentTime < 15) {
        $("#15pm").addClass("future")
    }
    if (currentTime > 16) {
        $("#16pm").addClass("past")
    } else if (currentTime >= 16 && currentTime < 17) {
        $("#16pm").addClass("present")
    } else if (currentTime < 16) {
        $("#16pm").addClass("future")
    }
    if (currentTime > 17) {
        $("#17pm").addClass("past")
    } else if (currentTime >= 17 && currentTime < 18) {
        $("#17pm").addClass("present")
    } else if (currentTime < 17) {
        $("#17pm").addClass("future")
    }
}

$(".saveBtn").on("click", function() {
    var userInput = $(this).siblings(".col-lg-10").val()
    var time = $(this).parent().attr("id")

    localStorage.setItem(time, userInput)
})

$("#9am .col-lg-10").val(localStorage.getItem("9am"))
$("#10am .col-lg-10").val(localStorage.getItem("10am"))
$("#11am .col-lg-10").val(localStorage.getItem("11am"))
$("#12pm .col-lg-10").val(localStorage.getItem("12pm"))
$("#13pm .col-lg-10").val(localStorage.getItem("13pm"))
$("#14pm .col-lg-10").val(localStorage.getItem("14pm"))
$("#15pm .col-lg-10").val(localStorage.getItem("15pm"))
$("#16pm .col-lg-10").val(localStorage.getItem("16pm"))
$("#17pm .col-lg-10").val(localStorage.getItem("17pm"))

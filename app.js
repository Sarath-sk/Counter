

var incr = document.getElementById("inc")
var dec = document.getElementById("dec")
var display = document.getElementById("display")


function increment(){
    console.log("1"+3)
    display.value = eval(display.value+"+1")
}

function decrement(){
    display.value -= 1
}

incr.addEventListener('click', increment)
dec.addEventListener('click', decrement)
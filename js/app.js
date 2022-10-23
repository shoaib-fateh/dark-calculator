function show(val) {
    document.getElementById('history-value').innerHTML += val;
}
function equal() {
    let x = document.getElementById("history-value").innerHTML;
    let y = eval(x)
    document.getElementById("output-value").innerHTML = y;
}

function clr() {
    document.getElementById("history-value").innerHTML = " ";
    document.getElementById("output-value").innerHTML = " ";
}
function backspace(){
    var inputVal = document.getElementById("history-value").innerHTML;
    sliceInpVal = inputVal.length;
    inputVal = inputVal.slice(0, sliceInpVal - 1);
    document.getElementById("history-value").innerHTML = inputVal;
}
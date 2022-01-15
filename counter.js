//To iterate the argument number with interval of 1000 milliseconds until the value is zero
function countdown(num) {
    let int = setInterval(function() {
        document.getElementById('count').innerHTML = num ;
        (num--)>1 || clearInterval(int);
    },500);
}

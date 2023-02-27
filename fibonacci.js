function isQuadradoPerfeito(x) {
    let value = parseInt(Math.sqrt(x));
    return (value * value == x);
}
 
function isFibonacci(n) {
 
    // n é Fibonacci se 5*n*n + 4 ou 5*n*n - 4
    // for um quadrado perfeito
    return isQuadradoPerfeito(5 * n * n + 4) || isQuadradoPerfeito(5 * n * n - 4);
}

let numberToCheck = 5;
console.log(isFibonacci(numberToCheck));
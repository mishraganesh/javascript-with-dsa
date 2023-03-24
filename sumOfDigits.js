//sum of digits
let digits=45448965554;

function sumOFDigit(digits){
    if(digits==0) return 0;

    return digits%10+sumOFDigit(Math.floor(digits/10))
}
console.log(sumOFDigit(digits))
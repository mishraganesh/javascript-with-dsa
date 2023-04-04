let x=5;
if(typeof x=='number' && !isNaN(x)){
    //check if it is a integer
    if(Number.isInteger(x)){
        console.log(`${x} is an integer`)
    }
    else{
        console.log(`${x} is not a integer`)
    }
}

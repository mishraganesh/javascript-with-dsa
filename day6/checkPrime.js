function prime(num){
let check=true;
    for(let i=2; i*i<num;i++){
        if(num%i==0){
            console.log(i)
            check=false;
            break;
        }
        
    }
    if(num===1){
        console.log("not prime not composite")
    }
    else if(check==true){
        console.log("prime")
    }
    else{
        console.log("not prime")
    }
    
}
prime(8)
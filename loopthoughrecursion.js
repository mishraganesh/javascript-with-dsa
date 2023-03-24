//itration

// function itration(n){
//     for(i=1;i<=n; i++){
//         console.log(i)
//     }
// }
// itration(5)


//recursion

function rec(i,n){
    //base 
    if(i>n) return
    //recursion
    console.log(i)
    return rec(i+1,n)
}
rec(1,5)


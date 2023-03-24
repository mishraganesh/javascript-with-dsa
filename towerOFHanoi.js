function toi(n,A,C,B){
    //base case
    if(n==0) return 0

    //recursive case

     toi(n-1,A,B,C) //A->B
    console.log(A,"=>",B);
    toi(n-1,B,C,A) 
}
console.log(toi(3,"A","B","C"))
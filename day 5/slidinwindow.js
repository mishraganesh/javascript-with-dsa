//find the sum  k in array using sliding window

function sliding(n,k,arr){
    temp=false
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            let sum=arr[i]+arr[j];
            if(sum===k){
                temp=true;
                console.log(`${arr[i]},${arr[j]}`)
                break;
            }
            else{
                temp;
            }
        }
    }
    console.log(`${temp} `)
}
sliding(5,50,[1,2,3,25,25])
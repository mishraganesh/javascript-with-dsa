 function countTriplets(arr,n,sum){
    let ans=0;
    
    for(let  i=0; i<n-2; i++){
        for(let j=i+1; j<n-1;j++){
            for(let k=j+1;k<n ; k++){
                if(arr[i]+arr[j]+arr[k]<sum){
                    ans++;
                }
            }
        }
    }
    return ans
   }
console.log(countTriplets([-2,0,1],3,2))
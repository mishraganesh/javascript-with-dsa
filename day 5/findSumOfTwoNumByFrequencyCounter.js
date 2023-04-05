//find the sum of two number using two pointer


function twoPointer(n,k,arr){
    let left=0;
    let right=n-1;

    while(left<right){
        let res=arr[left]+arr[right];
        if(res===k){
            console.log(`${res} is found [${arr[left]},${arr[right]}]`)
            break;
        }
        else if(res !==k){
            console.log("sum is not found");
            break;
        }
        else if(res>k){
            right--;
        }
        else{
            left++;
        }
    }
}
twoPointer(5,50,[0,10,20,40,50,60])
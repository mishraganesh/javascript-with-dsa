function sumOfZero(arr){
    for(let number of arr){
        
        for(let j=1; j<arr.length; j++){
            if(number+arr[j]===0){
               return ([number,arr[j]])
            }
        }
    }

}
const result=sumOfZero([-3,-2,-1,1,3,4,5,])
console.log(result)
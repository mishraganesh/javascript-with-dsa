
    
//swap two number withiout using another temp variable 

//revrse array without using another array     
let arr=[1,2,3,4];
    function array(arr){
        let i=0; //first
    let j=arr.length-1;//second

    while(i<j){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++;
        j--
    
    }
    return arr
    }
    console.log(array(arr));

   
    
   



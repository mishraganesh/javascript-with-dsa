let arr=[2,45,14,145,555,14,25,98,45,6556,78,87,98,89,96,35,88];
let x=96;
let ans=-1;

for(let i=0; i<arr.length;i++){
    if(arr[i]==x){
        ans=i;
    }
   
}
if(ans!=-1){
    console.log(x, "is present index",ans)
}
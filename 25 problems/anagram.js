function anagram(str1,str2){
    str1=str1.split("").sort();
    str2=str2.split("").sort();

    if(str1.length !== str2.length) return false
        
    
    for(let i=0; i<str1.length; i++){
        if(str1[i] !== str2[i])  return false;
           
        
        
    }
    return true
}
const result=anagram("123","123");
console.log(result)
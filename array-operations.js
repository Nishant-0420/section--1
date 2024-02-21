const num1 =[32,45,65,43,78,43,66];
// wap to get sum of all elements in array
 let s=0
 let c=0
for(i=0;i<num1.length;i++){
     s=s+num1[i]
    
}
console.log(s)

for(let j of num1){
    c=c+j
}
console.log(c)
console.log("------------------");
// forEach loop
let q=0
num1.forEach((a,indexx)=>{ q+=a;console.log(indexx)})
console.log(q)
console.log("----------");
// get some of all element with even index

num2=[1,2,3,4,5,6,7,8]
let u=0
num2.forEach((n,e)=>{
    if(e%2==0){
        u+=n

    }
})
console.log(u);

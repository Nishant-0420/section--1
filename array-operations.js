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
// forEach loop we have arrow function over here and can pass 2 parameters 1st for array element 
// 2nd element for index and we can use them . only want to print arr element just add console.log() under fun
// but want to apply other functions like adding or etc just print them outside the fun. and generate variable outside the function and use it under fun

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
console.log("cube")
// printing cude if element
num2.forEach((a)=>{
    console.log(a**3)
})

// wap to add all even element
console.log("sum of even no.")
num2=[1,2,3,4,5,6,7,8]
let x=0

num2.forEach((s)=>{
    if(s%2===0){
        x+=s
    }
})
console.log(x)


// type 1
function add(a,b){
    s=a+b;
    console.log(s)
}
add(69,69)
// type 2
// var should only be declare under function block
// type2
const averagee= function(n1,n2,n3){
     const a= (n1+n2+n3)/3
     console.log(a)
}
averagee(11,22,33)

const sum1= function(m1,m2,m3){
    return m1+m2+m3
}
console.log(sum1(11,22,33))

// most used function type i.e. arrow function
// main use of return is to reuse the value return by the function..
const findfact= (n)=>{
    var a=1
    for( let i=1;i<=n;i++){
        a=a*i
    }
    // console.log(a)
    return a
}
findfact(3)
// below how return value is used...
console.log(findfact(6)/findfact(3))



// js arrays can contain different datatypes value
const arr=[1,2,3,69.69,"hash","gogo","OCB"]
console.log(arr)
// indexing []square bracket used for indeexing
console.log( arr[5]) //index ke through find karne ke lia square bracket verna parenthesis 
console.log(arr.indexOf("OCB"))  //indexOf() to find index of an element
console.log(arr.at(-2))  // finding element from back use at() function
console.log(arr.length) //length= no. of elements present in an array
console.log(arr.slice(2,4)) //only 2,3 index element will display as it will execlude the last element so we have to give 1 more no. 
// if not giving ending index then will print elements till end
//₹ ctrl+shift+4  and windows+. for imozies

// adding elements  or changing the original array
arr.push("dragonfruit") //here it will add at the end
arr.unshift("mango") //unshift() will add at the front of an array
console.log(arr)
arr.pop() //remove element from end
arr.shift() //remove element from start
console.log(arr)
arr.splice(4,0,"bong") //(index jaha per add karna ho,removing no. of element,value of element added)
console.log(arr)
// to print array element outside of array
for(let w of arr){
    console.log(w)
}
// both above and below do same things i.e. just printing the element of an array
// forEach()  and under forEach() we give function
arr.forEach((element)=>{
        console.log(element)
})

// map() function
q=[2,3,4,6,7]
const map1=q.map(x=>x*2);
console.log(map1)





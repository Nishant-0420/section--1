const num=[1,5,8,9,2,7];

// find square of all elements 
// with {} use return and when not using {} don't use return
const num_new=num.map(x => {return x**2})
console.log(num_new)
const price=['₹6753.34','₹637.99','₹777.30' ]
const q=price.map(n=> {return parseInt(n.slice(1))})
console.log(q)

// filter function
const price2=[23000,50000,200,2400,9999]
const w=price2.filter(n=> n>2000 && n<10000)
console.log(w)

const names=['stoner','shooter','bawa','chillu','babe']
const l=names.filter(n=>n.length>=5)
console.log(l)

// filter even no.
const num2=[32,43,56,788,43,67,332,565]
const even=num2.filter(n=>n%2==0)
console.log(even)

const phonelist=[
    {
        brand:"apple",
        model:"13 pro max",
        price:800000,
    },
    {
        brand:"iqoo",
        model:"iqoo Z7 pro",
        price:16999,
    },
    {
        brand:"vivo",
        model:"t3",
        price:15000,
    }
]
// price is less than 20000
const darru=phonelist.filter(p=>p.price>100000);
console.log(darru);


 const m=phonelist.filter(n=>n.price<20000)
 console.log(m)

 



//  array=[]
// object = {}
// object.varient[""]  square bracket used if number and alpha is together

const ob={name:"stoner",email:"stoner420@gmail.com",password:"stoner69"}
console.log(ob.name);
console.log(ob.email,ob.password);
// when using square bracket we give key as a string
console.log(ob['name'])
// changing value at any key
ob.name="STONER"
console.log(ob)
// if key is not present then a new key will be added by the name u given
ob.address='high zone 420'
console.log(ob)
// delete any key value pair
delete ob.address
console.log(ob)

// finding keys and values
console.log(Object.keys(ob))
console.log(Object.values(ob))

const smartphone={
    brand:"iqoo",
    model:"iqoo Z7 pro",
    price:1699,
    color:["black",'blue','white']
}
console.log(smartphone.color[1])
smartphone.color[2]='red'
console.log(smartphone.color)
// above thing is doing in different way using splice where 1st is index 2nd is to remove or not 3rd is value
smartphone.color.splice(-1,1,"white")
console.log(smartphone.color)
smartphone.color.push("grey")
console.log(smartphone.color)


// question
// object.varient[""]  square bracket used if number and alpha is together
// for  array use index a[] and for object use . method a.key

const myphone={
    brand:"iqoo",
    model:"z6 pro",
    varient:{
        '8bg': 43000,
        "16gb": 55000
    }
}
console.log(myphone.varient['8gb'])

const phonelist=[
    {
        brand:"apple",
        model:"13 pro max",
        price:80000,
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
// code to find price of 2nd phone
console.log(phonelist[1].price)

// code to change model of last phone

phonelist[2].model="t69"
console.log(phonelist[2])
// if don not know the last element index
phonelist[phonelist.length-1].model="v70"
console.log(phonelist[2])
console.log(phonelist[phonelist.length-1])
phonelist.splice(-1,)

// find sum of all prices
// get models of smartphone in an array



let names = ["Arshad", "Jahan", "Gul"]
// push(insert to the end) and unshift(insert to the start)



// names.unshift("Wali khan")
// names.push("jahan")

// delete element



// shift(remove in index 0). pop remove in the end 

// names.shift()
// names.pop()

//[Slice] now in the middle so we need to use splice have two paramters index and value



// names.splice(0, 1, "janm,d.ajkl", "Ikram")



// for (const element in names) {

//     console.log(element);


// }


// for (const element of names) {

//     console.log(element);


// }



// let obj = {
//     name: "Arshad",
//     age: 23,

// }





// delete obj.name


// console.log(obj);


// console.log("before..");

// console.log(names);


// names.splice(-1, 2, "Asim", "Kamal", "Nod")


// console.log('after ...');


// const newAr = names.slice(0, 3)

// console.log(newAr);


// const obj = [23, 24, 12]

// const newAr = names.concat(obj)

// console.log(newAr);

// const newArr = ["Jahan", "Kaleem", "Ikram"]


// const index = newArr.indexOf("Kaleem", 0,)




// console.log(newArr[index]);



const newArr = [
    {
        name: "Arshad",
        age: 2
    },
    {
        name: "Jahan",
        age: 21
    },
    {
        name: "Umar",
        age: 21
    },
]

const obj = newArr.find((item) => item.age >= 21)

console.log(obj);












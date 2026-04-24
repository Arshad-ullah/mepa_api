

// var name = "jahan"


// var name = "khan"


// console.log(name);

// const student = {
//     name: "Arshad",
//     age: 23,
//     address: "Hangu",
//     university: "Islamia college Peshawar"
// }


// for (const key in student) {

//     console.log(key);

//     console.log(student[key]);

// }





// const person = {}

// person.name = "jahan"
// // person.age = 23
// // person.address = "Hangu"

// // console.log(person);





// const person = Object({
//     name: "Jahan",
//     lastName: "Khattak",
//     age: 23,

//     fullName: function () {
//         return this.name + " " + this.lastName
//     }
// })

// const obj = {
//     gender: "Male"
// }







// delete person.fullName


// console.log(person);


// const marks = {
//     math: 80,
//     english: 70,
//     science: 90
// };


// var count = 0;


// for (const key in marks) {

//     count = +marks[key]


// }

// Print city
// Update zip to 54321

// const user = {
//     name: "Ali",
//     address: {
//         city: "Karachi",
//         zip: 12345
//     }
// };




// // user.address.zip = 54321

// // console.log(user.address.city);



// // console.log(user.address);


// // [["a",1],["b",2],["c",3]]

// const original = { name: "Test", details: { age: 20 } };

// // const copy = original;

// // console.log(copy);


// // copy.name = "Jahan"

// // console.log(original);

// // const copy = JSON.parse(JSON.stringify(original))
// const copy = structuredClone(original)

// copy.name = "Jahan"


// console.log(original);





var users2 = {}

const users = {
    user1: { age: 22 },
    user2: { age: 17 },
    user3: { age: 25 }
};


for (const key in users) {
    if (users[key].age >= 18) {
      users2[key] = users[key]

    }

}


console.log(users2);









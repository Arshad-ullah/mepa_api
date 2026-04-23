// const [name, , age] = ["jahan", "", 24]


// console.log(name + "\t" + age);



// Nested array destruction array..


// const [name, [district, vallige], age] = ["Arshad", ["Hangu", "Karbogha sharif"], 23]


// console.log(name);

// console.log(districdct);
// console.log(vallige)




// in this done object destruction with names and also defualt values.

const { name: personName, address: personAddress, age: personAge = 23 } = {
    name: "Arshad",
    address: "Hangue",
    // age: 24
}

console.log(personName);
console.log(personAddress);
console.log(personAge);




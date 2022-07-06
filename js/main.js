//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// Gets the length of a JS Object by keys (python dictionary)
let length = Object.keys(person3).length
console.log(length)

// Determines whether the values in an Object are arrays
let arr = Array.isArray(Object.values(person3)[0])
console.log(arr)

// the value at a specific postion in an Object
let arr2 = Object.values(person3)[0]
console.log(arr2)

// returns the values from an array at a position
let arr3 = Object.values(person3)[0].forEach(val => console.log(val)) 


// trying to return typeof shakes
let obj = Object.values(person3)[4][0]
console.log(obj)
console.log(typeof obj)


if ((typeof Object.values(person3)[4][0]) === "object" ) {
    console.log(true)
}

function favoriteFood(person) {
    let length = Object.keys(person).length
    for (let i = 0; i < length; i++){
        if ( Array.isArray(Object.values(person)[i]) ) {
            Object.values(person)[i].forEach( val => console.log(val) )
        } else if ( (typeof Object.values(person)[i][0]) === "object" ) {
            console.log(true)
        }
    }
}

favoriteFood(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printInfo = () => console.log(`${this.name} is a person, who is ${this.age} years old.`)

    ageUp = () => this.age++
}

let billy = new Person('Billy', '26')
billy.printInfo()
billy.ageUp()
billy.ageUp()
billy.ageUp()
billy.printInfo()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const moreThanTen = word => {
    return new Promise ( (resolve,reject) => {
        (word.length) > 10 ? resolve('Greater Than') : reject('Less Than')
    })
}

moreThanTen(12)
.then( (result) => console.log('Big Word'))
.catch( (error) => console.log('Small Number'))
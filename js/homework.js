//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:[" Deep Dish","South Side Thin Crust"],
    tacos:" Anything not from Taco bell",
    burgers:" Portillos Burgers",
    ice_cream:[" Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:" Chocolate",
        dunkin:" Vanilla",
        culvers:" All of them",
        mcDonalds:" Sham-rock-shake",
        cupids_candies:" Chocolate Malt"
    }]
}

function favFoods(person3){
    for (let i=0; i< Object.values(person3).length; i++){
        if (i <=3){
            console.log(Object.values(person3)[i])
        } 
        else {
            for (let i=0; i< Object.values(person3['shakes']).length; i++){
            return (Object.values(person3['shakes'][i]))
        }
    }
}}

console.log(favFoods(person3))



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


function Humanoid(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        return `Your name is ${this.name}, You are ${this.age} years old`
    }
    this.newage = (num) => {
        return (age+1+num)
    }
}

let new_person = new Humanoid('Gabby', 29);
console.log(new_person.printInfo())
console.log(new_person.newage(0))

let new_person2 = new Humanoid('Nate', 30);
console.log(new_person2.printInfo())
console.log(new_person2.newage(2))



// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


function StringgyString(string){
    return new Promise((resolve,reject) => {
        if(string.length > 10){
            resolve("Big word");
        } else {
            reject("Small Number")
        }
    })
}

console.log(StringgyString('This string is long enough'))
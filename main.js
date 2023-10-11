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

const displayFood = (person) => {
    for (let key in person) {
        if (Array.isArray(person[key])) {
            console.log(`${key}: ${person[key].join(', ')}`)
        }
        else if (typeof person[key] === 'object') {
            console.log(`${key}:`)
            // dont know why shakes is printing as [object Object]
            for (let dict_key of person[key]) {
                console.log(`${dict_key}: ${person[key][dict_key]}`)
            }
        }
        else {
            console.log(`${key}: ${person[key]}`)
        }
    }
}

displayFood(person3)


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
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age    
    this.addAge = (amt) => {
        this.age += amt;
    }
}

const person1 = new Person('David', 21)
const person2 = new Person('Bob Marley', 36)
console.log(person1)
console.log(person2)
person1.addAge(5)
console.log(person1.age)


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const checkString = str => {
    return new Promise((resolve, reject) => {
        if (str.length >= 10) {
            resolve('Big Word')
        }
        else if (str.length < 10) {
            resolve('Small Number')
        }
        else {
            reject('Unknown')
        }
    })
}

const str1 = checkString('bingbong')
console.log(str1)

const output = async (input) => {
    checkString(input)
    const response = await checkString(input)
    console.log(response)
}

output('bingbongbingbong')
output('bingbong')


// Codewars Problem #1
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
    if (number % 2 == 0) {
      return 'Even'
    }
    else {
      return 'Odd'
    }
  }


// Codewars Problem #2
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
    let vowel_count = 0;
      for (let char of str) {
        switch(char) {
            case 'a':
                vowel_count++;
                break
            case 'e':
                vowel_count++;
                break
            case 'i':
                vowel_count++;
                break
            case 'o':
                vowel_count++;
                break
            case 'u':
                vowel_count++;
                break
        }
    }
    return vowel_count;
}
//tuples

let a: [number, number, number] = [3, 3, 3] //cant add more than 3 numbers here but

a.push(7) //we can add like this.

let b: [number, string] = [5, "hello"]
b.push(77)
b.push("hi")
b.push(88)
b.push("heeee")
// b.push(true) will give error

//challenge

enum UserRole{
    Admin = 'admin',
    Manager = 'manager',
    Employee = 'employee'
}

type User = {
    id: number,
    name: string,
    role: UserRole,
    contact : [string, string]
}

function createUser(user: User): User{
    return user
}

let sampleUser : User = {
    id: 1,
    name: "sanya",
    role: UserRole.Manager,
    contact : ["sanya@gmail.com","981045454"]
}

console.log(createUser(sampleUser))

//type assertions , for eg we know what we are saving in the db is a string but ts does not know that
//it  matches the expected structure so we mention it

enum Person{
    human = "human",
    nothuman = "nothuman"
}

interface User2{
    name: string,
    types : Person
}

let user3: User2 = {
    name: "sanya",
    // types : "human" //this is giving error even though human is in the Person enum
    types : "human" as Person
}

console.log(user3)

//type unknown

let anyvalue: any = 12
anyvalue = "hello"
anyvalue = true
anyvalue = 56.78
console.log(anyvalue.toFixed(2))

let unknown: unknown = "hello"
unknown = true
unknown = 67.99
// console.log(unknown.toFixed(2)) cannot do this first we have to check whether its a number or not.
//this is differnce between unkown and any type. 
//unkown type is a type safe alternative to any type

if (typeof unknown === "number") {
    console.log(unknown.toFixed(2))
}

//never type, u can never assign it  value and its there when u have handled al the cases

type Color = 'red' | 'blue'

function getColor(color:Color) {
    if (color === 'red') {
        console.log("red")
        return;
    }
    if (color === 'blue') {
        console.log('blue')
        return
    }

    // color if u try to write this here, it will show its type as never, cos this will never
    //come again as we have already handled all possible values red and blue.

}

enum Theme{
    light, dark
    // green if i add this here then the unexpected variable i set down there will give error, as i have not handled all conditions , so its value can possibly be green so it can not be never type.
}

// function getTheme2(theme: Theme) {
//     if (theme === Theme.light) {
//         return 'light'
//     }
//     if (theme === Theme.dark) {
//         return 'dark'
//     }
    
//     // let unexpected: never = theme
//     throw new Error(`The value of this is totally unexpected..`)
    
// }

// console.log(getTheme2(Theme.green))


function getTheme(theme: Theme) {
    switch (theme) {
        case Theme.light:
            return 'light'
        case Theme.dark:
            return 'dark'
        default:
            //build time error
            let unexpected: never = theme //so this is to check if in future u add new things in enum, better handle those cases or this will give build time error,

            //runtime error
            throw new Error(`The value of ${unexpected} is totally unexpected..`)
    }
}

console.log(getTheme(Theme.light))
// console.log(getTheme(Theme.green))

console.log("--------------------------------------")

//modules,( import export )

import student1, { checkPerson, type student, name } from "./importexport"

console.log(student1)

let student2: student = {
    name: "sanvi",
    age : 15
}

console.log(student2)

checkPerson(student2.name)

console.log(name)


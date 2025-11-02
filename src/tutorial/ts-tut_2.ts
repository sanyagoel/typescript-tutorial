//alias to use as shorthand for types. so that u can just use it, instead of writing same type thing again n again

type Employee = {
    id: number,
    name: string,
    department : string
}

type Manager = {
    id: number,
    name: string,
    employees : Employee[]
}

type Staff = Employee | Manager

function printStaffDetails(object : Staff) :void{
    if ("employees" in object) {
        console.log(`This person is a manager. No of employees they manage - ${object.employees.length}`)
    }
    else {
        console.log(`This person is an employee, and belongs to ${object.department} department.`)
    }
}

let alice : Employee = {name : "alice", id : 1, department : "IT"}
let maria : Employee = { name: "maria", id: 2, department: "HR" }

let bob : Manager= { name: "bob", id: 1, employees: [alice, maria] }

printStaffDetails(alice)
printStaffDetails(bob)

//intersection type , here it has to have prperties of all the types involved, not just one

type Book = {
    name: string,
    id: number,
    price : number
}

let book1: Book = {
    name  : "harry",
    id: 1,
    price : 500
}

// let disCountedbook: Book = {
//      name  : "stars",
//     id: 2,
//     price: 5000,
//     // discount = 50 cannot do it here as its strcityl of type book
// }


type DiscountedBook = Book & { discount: number }

let disCountedbook2: DiscountedBook = {
     name  : "stars",
    id: 2,
    price: 5000,
    discount : 50 
}

//COMPUTED properties/types

let property = "age"

type Animal = {
    [property]: number,
    name : string
}

let animal: Animal = {
    [property]: 10,
    name : "tiger"
}

console.log(animal)

//interfaces- they do the same work as type aliases

interface Book2{
    readonly isbn: number,
    name: string,
    genre?: string,
    price : number
}

let book3: Book2 = {
    isbn: 4,
    name: "diamonds",
    price: 5000,
    // genre:"horror" since its optional ur choice whether to add or not
}

// book3.isbn = 5 cannot do since its read only

console.log(book3)

//methods in interfaces

interface book{
    name: string,
    price: number,
    printAuthor(name: string): void
    printSomething(): string,
    printProperty: (value: string) => string
}

let nabook :book = {
    name: "sanybook",
    price: 5000,
    printAuthor(name : string) {
        console.log(name)
    },
    printSomething() {
        return this.name
    },
    printProperty: (value) => {
        // console.log(this.) this does not work in arrow functions
        console.log(nabook.name)
        return value.toUpperCase()
    }
    
}

nabook.printAuthor("sanya")
console.log(nabook.printProperty("san"))
console.log(nabook.printSomething())


//challenge

interface Computer{
    readonly id: number,
    brand: string,
    ram: number,
    storage?: number,
    upgradeRam(value : number) : number
}

interface Computer{
    haha? : string
}

let computer1: Computer = {
    id: 1,
    brand: "Dell",
    ram: 5,
    upgradeRam(val: number) {
        this.ram += val
        return this.ram
    }
}

computer1.storage = 500
console.log(computer1.upgradeRam(10))

//challenge - reopen interfaces (add on properties to an existing interface by creating one more version of it)
// merge two interfaces by extending

interface Person{
    name : string
}

interface DogOwner extends Person{
    dogName : string
}

interface Boss extends Person {
    managePeople(): void,
    delegateTasks() : void
}

function getEmployee() : Emp{
    let random = Math.random()
    if (random < 0.33) {
        return {
            name : "sanya"
        }
    }
    if (random < 0.66) {
        return {
            name: "sanya",
            dogName : "cocola"
        }
    }

    return {
        name: "sanya",
        delegateTasks() {
            console.log("delegating tasks...")
        },
        managePeople() {
            console.log("managing people...")
        }
    }
}

type Emp = (Person | Boss | DogOwner)

function isManager(obj : Emp) : obj is Boss  { //this is called a type predicate, during compile time we are letting it know that the obj is a boss type. so that later typescript allowed us to use the methods in boss
    
        return "delegateTasks" in obj
    
}
let employee: Emp = getEmployee()
console.log(employee)
// console.log(getEmployee())
console.log(isManager(employee))

if (isManager(employee)) {
    employee.delegateTasks() //this aint worknig cos ts still does not confirm just from boolean value that its a manager objecvt or not.

}

//differences between type aliases and interfaces

//type aliases can also be used with primitives and literals

type a5 = string | number //u cant do this w interaces

type direction = 'up' | 'down' | 'left' | 'right' //cant do this w interfaces

//but in interfaces, u can implement them using classes cant do taht w types.
//u can use same interface name again to add on to those properties (reopening) cannot do taht w alias types

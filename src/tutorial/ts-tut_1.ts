console.log("hello world 12")

// type annotations 
let a  : Number = 5
console.log(a)
// a = "hello"

// a = true
console.log("trying")

a = a.valueOf()

let b = "stri"
b = b.toLowerCase()

// unions

let c: string | Number | boolean = true
c = "changed"
console.log(c)

//custom unions too

let d: 'sanya' | 'sanvi' = 'sanvi'
console.log(d)

//arrays

let arr = ["sanya", "sa"]
// arr.push(2) not allowed since the arr is not arr:string[]
console.log(arr)

let arr2: Number[] = [2, 3, 4]
arr2.push(5)

//unions in arrays

let arr3: (string | Number | boolean)[] = ["san", 1, true]
arr3.push(false)

let arr4: any = ["ha"]
arr4.push(null)

// let arr5 : [] = ["sa"] //only allowed to assign empty arrays here.

let arr7 = []

arr7.push("num")

// let obj: { name: string, age: number } = { name: "san", age: 20 }
// // obj.car = "" cannot add anything other than  provided in the type annotation


// let obj1: { name: string, age: number } = { name: "san2", age: 30 }
// let obj2: { name: string } = { name: "san3" }

//insteadof writing these type annpotation again and againi, just make an array of objects
//with single annotation  like below


let obj = { name: "san", age: 20 }
let obj1= { name: "san2", age: 30 }
let obj2 =  { name: "san3" }

let array: { name: string, age: number }[] = [obj, obj1]
console.log(array)

//optional properties

let arrsan: { name: string, age?: number }[] = [obj, obj1, obj2] //here we were able to add obj2 cos age is now optional
 
//read only
let arrsan2 : { readonly name: string, age: number }[] = [obj, obj1]
// arrsan2[0].name = "san2" will give error
arrsan2[0].age = 26


//problem 1

let names : string[] = ["san", "haha", "sanvi"]

function check(na : string){
    for (let n of names) {
        if (n === na) {
            return true
        }
        
    }
    return false
}


function checkNum(na : number){
    return na + 5
}

let an2 = checkNum(7)

let ans = check("san")
console.log(ans)

//optional parameters in functions

function getDiscount(nu: number, discount?: number) { //discount can be potentially undefined so we need to fix that 
    return nu - (discount || 0)
}

let z = getDiscount(50, 10)
// z = getDiscount(70) will give error if discount was not set as optniobal

function getDiscount2(nu: number, discount: number = 0) { //or just give a default vaue
    return nu - discount
}

z = getDiscount2(70)

//rest operator in ts

function prints(st: string, ...num2: number[]) : string {
    const doubled = num2.map((num) => {
        return num * 2;
    })
    console.log(doubled)
    const reduced = doubled.reduce((sum, i) => sum + i, 0)
    return `${st} + ${reduced}`
}

let ans_f = prints("hello the answer is - ", 4, 5, 7, 8, 9)
console.log(ans_f)

//if u do not want to return anything from the function set the type as void

function noreturn(st?: { name: string }) : void{
    // return st.name will give error
    console.log((st?.name  || "san"))
}

console.log(noreturn())

// function noreturn(st: { name: string }) {
//     return st.name
// }
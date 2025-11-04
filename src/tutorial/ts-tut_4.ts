//type guards

//challenge -- typeof typeguard

type ValueType = boolean | string | number

let random = Math.random()

let val = random < 0.33 ? 'hello' : random < 0.66 ? 45.66 : true

function checkValue(value: ValueType) : void {
    if (typeof value === "string") {
        console.log(value.toLowerCase())
        return
    }
    if (typeof value === "number") {
        console.log(value.toFixed(2))
        return
    }
    console.log(`Boolean : ${value}`)
}

checkValue(val)

//equality narrowing typeguard

type Dog = { type: 'dog', name: string, bark: () => void }
type Cat = { type: 'cat', name: string, meow: () => void }
type Animal = Dog | Cat

function makeSound(animal : Animal) {
    if (animal.type === 'dog') {
        animal.bark()
        return
    } else {
        animal.meow()
        return
    }
}

let testanimal : Dog = {
    type: 'dog', name: "cola", bark: () => {
    console.log(`${testanimal.name} is barking.,,`)
    }
}

makeSound(testanimal)

//truthy falsy guard

type inp = string | null | undefined

function checkVal(input: inp) {
    if (input) {
        console.log(input.length)
    } else {
        console.log('its not a string')
    }
}

checkVal("hello")
checkVal("")
checkVal(null)
// checkVal()

//instanceof guard

try {
    throw 'checking'
    throw new Error("this is the error")
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
    } else {
        console.log('unknown error')
    }
}

//type predicates

type Student = {
    name: string,
    study() : void
}

type User = {
    name: string,
    login() : void
}

type Person = Student | User

function checkRandom() : Person {
    return Math.random() < 0.5 ? {
        name: 'san', study() {
            console.log('studying...')
        }
    } : {
        name : 'sanvi', login() {
       console.log('logging in')
   }}
}

let per : Person = checkRandom()

function isStudent(person : Person) : person is Student {
    return 'study' in person
}

if (isStudent(per)) {
    per.study()
} else {
    per.login()
}

//discriminative unions and exhausitve checks (never)
//discriminative unions is a type that can consist of many similar types each with a uniquely identifying literal property, used for safe type handling for each type in it.


//GENERICS (IMPORTANT TOPIC)

//for eg-

interface eg<T>{
    val: T
    getValue : ()=> T
}

let z : eg<string> = {
    val : 'sanya',
    getValue(){
        return this.val
    }
}

let op : eg<number>={
    val : 5,
    getValue(){
        return this.val
    }
}

console.log(z.getValue())
console.log(op.getValue())

function createArray<T>(length : number, val : T) : Array<T>{
    let ans: T[] = []

    ans = Array(length).fill(val)
    // for (let i = 0; i < length; i++){
    //     ans.push(val)
    // }
    return ans
}

let an = createArray(4, 'Hello') //even if u do not add<string> here ts automatically can infer that we are providing string
let ab = createArray<number>(3,100)
console.log(an)
console.log(ab)

//multiple types in generics

function mul<T, U>(val1 :T, val2 : U) : [T,U]{
        return [val1,val2]
}

console.log(mul("hello", 5))
console.log(mul("hi", "hi"))

//we can also limit our generic to some types. for eg-

type Product = {
    name: string,
    brand : string
}

type Car = {
    name: string,
    price : number
}

type User3 = {
    age : number
}

function printName<T extends Product | Car>(val : T) : void{
    console.log(val.name) //works since product and car both have name property. but if we had not extended it, it would have given error since string or boolean do not have name property.
}

//alternative way to write this-

function printName2<T extends {name : string}>(val : T) : void{
    console.log(val.name) //will look for a an object with the property name.
}

interface but<T = any>{ //we keep the default value as T, so if user does not provide with a value it keeps default as any
    data : T[]
}

let numb: but<number> = {
    data : [5,5,5,5]
}

let ar: but<number | string | boolean> = {
    data : [4,"san","random",true] 
}

let ar2: but<any> = { //we can use any if we do not know what all type of data we are going to get.
    data : [4,"san","random",true] 
}

let ar3: but = { //did not give error since we added T = any as default value in the interface above.
    data : [4,"san","random",true] 
}

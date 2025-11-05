//fetch api 

import { z } from "zod"

let url = 'https://www.course-api.com/react-tours-project'



// type Tour = {
//     id: string,
//     image: string,
//     info: string,
//     price: string,
//     name: string 
//     //but if i add any extra property, ts wont detect if my api doesnt return that property, and will just show undefined. to check validation at runtime, we will use zod library
// }

let Tour_zod = z.object({
    id: z.string(),
    image: z.string(),
    info : z.string(),
    price : z.string(),
    name: z.string(),
    // hi : z.string()
})

type Tour = z.infer<typeof Tour_zod>


async function fetchData(url: string): Promise<Tour[]>{
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Got error..`)
        }
        let data : Tour[] = await response.json()

        let result = Tour_zod.array().safeParse(data)
        if (!result.success) {
            throw new Error('error in parsing data. wrong type')
        }
        return result.data
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        } else {
            console.log('unkown error..')
        }
        return []
    }
}

let ans = await fetchData(url)

ans.map((val) => {
    console.log(val.name)
})


//declarations

import bcrypt from 'bcryptjs' 

// bcrypt.compare() we wouldnt get options of all these methods, and get error if we did not have the type definition file of bcrypt in node modules. It has all the type definitions needed for bcrypt so that we get autocompletions of methods and typescript knows about their existence
//we have some default declarations in the ts config file like DOM, thats why we can use document instance and its detected by ts without giving error-
// eg document.getElementById
 

//classes in typescript
 
class Teacher{ //by default everything is public
    name: string
    age: number
    private id: number = Math.random() + 1
    private readonly salary : number = 50000

    constructor(name : string, age : number){
        this.name = name
        this.age = age
    }

    getID() : number {
        return this.id
    }

    setID(num: number) {
        this.id = num
    }    

    getSalary() {
        return this.salary
    }
}

let t1 = new Teacher('san', 25)
console.log(t1.getID())
console.log(t1.name)


//shortcut for initialising local variables in class
//also getter and setter in typescript

class Student{
    constructor(public name: string, public age: number, private readonly fees: number = 5000, private id: number = Math.random() + 1) { }
    getName() {
        return this.name
    }

    get showFees() {
        return this.fees
    }

    set setId(num: number) {
        this.id = num
    }

    get getId() {
        return this.id
    }
}

let student = new Student("san", 25)
console.log(student.getName())
console.log(student.showFees)
student.setId = 567
console.log(student.getId)


//classes can implement interface, something that type aliases cannot do

interface School{
    name: string,
    years: number,
    getTeacher() : string
}

class Teach implements School{
    constructor(public name: string, public years: number) { }
    getTeacher(): string {
        return this.name
    }
    set setTeacher(nam: string) {
        this.name = nam
    }
}

let tea3 = new Teach('sanbi', 5)
console.log(tea3.getTeacher())
tea3.setTeacher = 'kamla'
console.log(tea3.getTeacher())

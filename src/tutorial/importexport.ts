export let name = "sanya"

export function checkPerson(name : string): void{
    console.log(name)
}

export type student = {
    name: string,
    age : number
}

let student1: student = {
    name: "sanya",
    age : 20
}

export default student1
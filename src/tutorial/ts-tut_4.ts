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
import { useState } from "react"

type Product = {
    name: string,
    id : number
}

let array :Product[]=  [
    {
    name: "name1",
    id : 1
    }, {
    name: "name2",
    id : 2
    }, {
        name: "name3",
        id : 3
    },
]



export default function State() {

    let [name, setName] = useState('san') //here since we are giving default value as string, use state's generic will smartly infer the type as string, and we wont be able to set it as number later
    let [ar, setArr] = useState([]) //since we set it as empty array, it automatically set its type as never so thats why we will have to add the type generic to this-
    let [ar2, setArr2] = useState<string[]>([])//now the type is string array
    let [product, setproductList] = useState(array) //see it automatically infers that its an array of objects with particular values BUT if i remove letsay id from any object in array, then it wont be able to infer and we would be able to enter wrong data without ts giving error...
    let [product2, setproductList2] = useState<Product[]>(array) //so we will give it a fixed generic so that it gives error if we ad wrong data. we should also add the type in the array itself.

    return <>
        <div>use states</div>
        <div>
  <button onClick={() => {
            setName('sanvi')
            console.log(name)
        }}> {/*wont be able to set it as numebr*/}
            
        </button>
        </div>
        <div>
  <button onClick={() => {
                setArr2(['sab', 'say'])
                console.log(ar2)
        }}></button> 
        </div>
      
           
        <button onClick={() => {
            setproductList2([...product2, { name: "new", id: 5 }])
            console.log(product2)
        }}>
            </button>
    </>
}
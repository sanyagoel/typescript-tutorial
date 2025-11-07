import type { JSX } from "react";

import { type PropsWithChildren } from "react";

// type Comp = {
//     name: string,
//     age: number,
//     children : React.ReactNode
// }

type Comp = PropsWithChildren<{ //propswithchildren automatically adds the component children as an optional property to any existing type using type intersection. hover to see the generic
    name: string,
    age : number
}>

export default function Component({name,age,children} : Comp): string | JSX.Element {

    return <>
        <div>Hi  {name}</div>
        {children}
        <div>{age}</div>
    </>
}


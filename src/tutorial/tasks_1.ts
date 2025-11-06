let button = document.querySelector("buttclass")! //! is the not null assertion is another option we can use , we know that we 100% know this element can never be null and is present. so that we are able to access the properties of elements.

// button.ariaDisabled will cause error since the element can be null as well, so need to use check.
//but u can see its a Element type, so it will only have the common properties between all elements, it wont be given access to button specific properties. for that you will need to typecast it as htmlbuttonelement.

button?.ariaDisabled // or the not null assertion ! given above or the if condition below are the three methods to prevent error.


if (button) {
    button.innerHTML 
}

let button2 = document.querySelector<HTMLButtonElement>("buttclass")! //to access button specific properties

//or we can do -

let button3 = document.querySelector("buttclass")! as HTMLButtonElement

// button3.click - a button specific property we are able to use without getting error now



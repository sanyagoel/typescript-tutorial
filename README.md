#  TypeScript Learning Journey

This repo documents my daily progress as I learn and experiment with core TypeScript concepts, from the basics to more advanced features.

---

## 📅 **Day 1 — Objects, Functions & Type Annotations**

**Topics Covered**

* **Type Annotations**
* **Functions with typed parameters and return values**
* **Objects and inline type definitions**

**Summary**
On the first day, I explored how TypeScript adds static typing to JavaScript by explicitly defining variable types.
I learned how to specify types for variables, function parameters, and return values.
I also understood how to create typed objects that enforce a specific structure, making the code more predictable and easier to maintain.

---

## 📅 **Day 2 — Type Aliases, Interfaces & Type Narrowing**

**Topics Covered**

* **Type Aliases**
* **Interfaces and interface merging**
* **Union and Intersection Types**
* **Type Narrowing using `typeof` and `in`**
* **Type Predicates and User-Defined Type Guards**

**Summary**
On the second day, I learned how to simplify and reuse type definitions using **type aliases**.
I explored **interfaces**, how they define object contracts, and how they can be merged or reopened to extend functionality.
I also studied **union types** for handling multiple possible variable types and how to use **type narrowing** to determine the actual type at runtime.
Finally, I learned about **type predicates**, which help TypeScript understand specific object types based on custom logic.

---

## 📅 **Day 3 — Tuples, Enums, Type Assertions, Unknown & Never Types, and Modules**

**Topics Covered**

* **Tuples**
* **Enums**
* **Type Assertions**
* **`any` vs `unknown`**
* **`never` type**
* **Type-safe Exhaustive Checking**
* **Modules (`import` / `export`)**

**Summary**
On the third day, I explored more advanced **TypeScript** features.
I learned how **tuples** allow fixed-length arrays with specific types for each position and how the `readonly` modifier can make them immutable.
I studied **enums**, which provide meaningful names for sets of constant values, and understood how **exhaustive checking** with the `never` type ensures all enum cases are handled safely.
Through **type assertions**, I learned to explicitly tell TypeScript what type a value should be when the compiler cannot infer it — useful when working with **enums** or **APIs**.
I also explored the difference between **`any`** and **`unknown`**, realizing that **`unknown`** is a safer, more type-checked alternative to **`any`**.
Finally, I learned how to structure code using **modules**, by importing and exporting types, variables, and functions between files.

---

## 📅 **Day 4 — Type Guards & Generics**

**Topics Covered**

* **Equality Narrowing (Type Guards)**
* **Truthy / Falsy Guards**
* **`instanceof` Guards**
* **Type Predicates (Revisited)**
* **Discriminated Unions & Exhaustive Checks**
* **Generics**
* **Generic Constraints (`extends`)**
* **Default Generic Types**

**Summary**
On the fourth day, I deepened my understanding of **Type Guards** and learned how they make code type-safe at runtime.
I explored **equality narrowing** using literal comparisons, **truthy/falsy guards** for nullish checks, and **`instanceof` guards** for detecting class instances.
I revisited **type predicates**, using custom functions that tell TypeScript which type a union value belongs to.
I learned about **discriminated unions**, where a shared literal property allows safe handling of multiple object types and **exhaustive checking** using the `never` type.
Finally, I began **Generics**, understanding how to write reusable components that work with any data type, apply **constraints** (`extends`) to limit accepted types, and provide **default generic values** to keep code flexible and safe.

---

## 📅 **Day 5 — Fetch API, Zod Validation, Type Declarations, and Classes**

**Topics Covered**

* **Fetch API with async/await**
* **Zod runtime validation (`safeParse`, `.array()`)**
* **Type inference using `z.infer`**
* **Error handling with `instanceof Error`**
* **Type declaration files (`@types` usage)**
* **`bcryptjs` type definitions and autocompletion**
* **Class basics (constructors, properties, methods)**
* **Access modifiers (`public`, `private`, `readonly`)**
* **Getters and Setters in classes**
* **Interface implementation in classes**

---

**Summary**
On the fifth day, I learned how to work with **APIs** using `fetch` and **async/await** in TypeScript.
I explored the **Zod** library for **runtime data validation**, learning how to validate both single objects and arrays of objects using `.array()` and `safeParse`.
I also saw how to infer types directly from a Zod schema using `z.infer`, ensuring consistency between runtime and compile-time validation.
I revisited **error handling**, using `instanceof Error` to distinguish real errors from unknown ones.
Next, I learned about **type declaration files** like `@types/bcryptjs`, which provide IntelliSense, autocompletion, and compile-time checks for external libraries.
Finally, I studied **classes in TypeScript**, including how to declare and initialize properties, use **access modifiers**, create **getters/setters**, and make classes **implement interfaces** — something `type` aliases cannot do.

---

## 📅 **Day 6 — DOM Manipulation, Type Casting & Local Storage**

**Topics Covered**

* **Selecting DOM elements using `querySelector`**
* **Element types (`HTMLElement`, `HTMLButtonElement`, `HTMLFormElement`, etc.)**
* **Handling `null` with optional chaining (`?.`), non-null assertion (`!`), and conditional checks**
* **Type casting using `as`**
* **Using generic form of `querySelector<T>()` for better element inference**
* **Accessing element-specific properties and methods**
* **Creating and appending HTML elements dynamically**
* **Working with event listeners and `Event` type safety**
* **Managing application state using arrays and custom `Task` types**
* **Using `localStorage` to persist data**
* **Converting data using `JSON.stringify()` and `JSON.parse()`**
* **Rendering tasks dynamically with DOM manipulation**

---

**Summary**
On the sixth day, I learned how to safely interact with the **DOM using TypeScript**, understanding how TypeScript assigns types like `HTMLElement | null` when selecting elements.
I practiced using **optional chaining (`?.`)**, **non-null assertions (`!`)**, and **type casting (`as`)** to safely access element properties and methods.
I discovered how to make `querySelector` more powerful using its **generic form**, such as `querySelector<HTMLButtonElement>()`, to gain access to element-specific methods like `.click()` and `.disabled`.
I then applied these concepts to build a **Task Manager app**, dynamically creating elements (`<li>`, `<span>`, `<input>`) and appending them to the DOM.
I also learned to handle form submissions safely using TypeScript’s `Event` type and used **localStorage** to save, retrieve, and update tasks with proper JSON handling.
This helped me connect everything — **TypeScript + DOM manipulation + real-world browser APIs** — in a practical mini-project.

---

## 📅 **Day 7 — React + TypeScript: Props, State & JSX**

### **Running the Nested React Project**

**Command:**

```bash
npm run dev --prefix ./typescript-react/typescript-react-tutorial
```

**Why:**
Because the React project (`typescript-react-tutorial`) is **inside another folder** (`typescript-react`).
Using the `--prefix` flag tells `npm` to look for the `package.json` inside that inner directory instead of the outer one — ensuring Vite runs the correct project.

**Topics Covered**

* **Setting up a React + TypeScript project using Vite**
* **Understanding `.tsx` files and JSX syntax in TypeScript**
* **Typing functional components with `JSX.Element` and `React.FC`**
* **Using `PropsWithChildren` to automatically add the `children` prop**
* **Understanding `verbatimModuleSyntax` and type-only imports (`import type {...}`)**
* **Declaring and typing component props explicitly**
* **Using React Hooks with TypeScript (`useState`, `useEffect`)**
* **Inferring vs Explicitly typing `useState` generics**
* **Managing arrays and object states with strong typing**
* **Updating array states immutably using the spread operator**
* **Handling nested state and preventing type inference issues (`never[]`)**
* **Fixing type errors caused by `verbatimModuleSyntax`**
* **Exploring type-safe event handlers in React**

---

**Summary**
On the seventh day, I learned how to combine **React** with **TypeScript** to create strongly-typed components and manage state safely.
I explored how TypeScript understands **JSX**, why newer versions of React require explicit imports for JSX types, and how `PropsWithChildren` simplifies working with components that accept child elements.
I practiced using **`useState`** with various data types — strings, arrays, and objects — and saw how TypeScript infers or enforces specific types based on initial values and generic arguments.
I also learned about **type-only imports** enforced by `verbatimModuleSyntax`, and how to structure imports properly in modern TypeScript configurations.
Finally, I built small examples involving props, typed state, and event handlers, improving my understanding of **type safety within React components**.

---

### 🧾 **Concepts Covered So Far**

* **Type Annotations**
* **Functions**
* **Objects**
* **Type Aliases**
* **Interfaces (Merging & Reopening)**
* **Union & Intersection Types**
* **Type Narrowing (`typeof`, `in`)**
* **Type Predicates / User-Defined Type Guards**
* **Tuples**
* **Enums**
* **Type Assertions (`as`)**
* **`any` vs `unknown`**
* **`never` Type & Exhaustive Checking**
* **Modules (`import` / `export`)**
* **Equality Narrowing (Type Guards)**
* **Truthy/Falsy Guards**
* **`instanceof` Guards**
* **Discriminated Unions**
* **Generics (Constraints & Defaults)**
* **Fetch API with async/await**
* **Zod Runtime Validation**
* **Type Declarations (`@types`)**
* **Classes (Access Modifiers, Getters/Setters, Interface Implementation)**
* **DOM Manipulation with TypeScript**
* **Type Casting and Non-null Assertions**
* **Event Handling and Local Storage Integration**
* **React + TypeScript Basics**
* **JSX & Props Typing**
* **`useState` with Generics**
* **`PropsWithChildren` and Type-Only Imports**

---


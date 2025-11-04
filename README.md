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

---


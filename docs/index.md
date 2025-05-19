# 🧪 Validate

**Validate** is a lightweight and minimalist JavaScript library designed to validate primitive data types and values.  
It was originally created to solve a personal need for safer input validation in JavaScript — especially in dynamic environments where type coercion and loose typing can lead to bugs or unexpected behavior.

Validate helps ensure that values from external or internal sources match the expected type or condition **before** being used in your application logic.

### 🎯 Why use Validate?

JavaScript is a dynamically typed language, and while that brings flexibility, it also introduces risk.  
**Validate** gives you a simple way to add strong runtime validation without pulling in large or complex libraries.

It's perfect for:

- Validating API inputs and external data
- Type-checking user input in frontend apps
- Preventing invalid logic caused by unexpected types or values
- Keeping code safe and readable in both Node and browser environments

### ✅ What Validate can do

Validate provides:

- **Type checks**: Verify if a value is a number, string, array, object, etc.
- **Option checks**: Validate if a value matches any item from a list (`checkOptions()`)
- **Range checks**: Ensure a number (or date/hour as numeric) is within a specific range (`checkRange()`)
- **Silent mode**: Choose whether invalid checks should throw errors or just return `false`

Validate works on **Node.js**, **Deno**, and **in the browser**, and supports **ES Modules**.

---

Continue to the [Installation](install.md) to get started.

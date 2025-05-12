# 🧪 Validate

![npm](https://img.shields.io/npm/v/@manoelfernandes/validate)
![License](https://img.shields.io/badge/license-MIT-green)
![Test Status](https://github.com/Manoel-Fernandes/Validate/actions/workflows/node.js.yml/badge.svg)
![bundle size](https://img.shields.io/bundlephobia/minzip/@manoelfernandes/validate)
![npm downloads](https://img.shields.io/npm/dw/@manoelfernandes/validate)


**Validate** is a simple and lightweight library for validating primitive types in JavaScript. It was originally created to solve a personal need for safely validating input data, and to prevent bugs caused by JavaScript's lack of strict typing. It helps ensure that values from both external and internal sources match the expected types before being used.

---

## 📦 Installation

### Node
```bash
npm install @manoelfernandes/validate
```

### Deno
```js
import Validate from "https://raw.githubusercontent.com/Manoel-Fernandes/Validate/main/src/validate.js";
```

### Frontend (via CDN)  
```html
<script src="https://unpkg.com/@manoelfernandes/validate@1.2.1/src/validate.js"></script>
```

---

## 🚀 Usage

```js
const Validate = require("@manoelfernandes/validate").default

// For ES Modules:
// import Validate from '@manoelfernandes/validate';

Validate.check(123, "number");             // ✅ true
Validate.check("hello", "string");         // ✅ true
Validate.check(true, "boolean");           // ✅ true

Validate.check("123", "number");           // ❌ false
Validate.check(undefined, "string");       // ❌ false
```

## 🔕 Silent Mode (default)

Silent mode has been introduced in the library and it is active by default, so using the library without disabling silent mode will only return false instead of returning an error message.


```js
Validate.silent(false);

Validate.check("hello world", "number");           // ❌ error (Invalid value: expected "number", received "string")
```

With silent mode you can now do checks like this

```js
if(Validate.check(userName, "string")){
	// if it is true
}else{
	// if it is false
}
```

If silent mode receives a value other than a boolean it will throw an error.

```js
Validate.silent("true");

// ❌ error (Invalid value: expected "boolean", received "string")
```

---

## ✅ Supported types

- `"number"`
- `"string"`
- `"boolean"`
- `"bigint"`
- `"undefined"`
- `"null"`
- `"symbol"`
- `"array"`
- `"object"`

---

## ⚠️ Error messages

Error messages are clear and objective, for example:

```
Invalid value: expected a "number", received "string"
```

---

## 🧪 Tests

This library has been thoroughly tested using **Vitest**, with over 135 unit tests to ensure its robustness. The tests cover a wide range of scenarios, validating the following:

* ✅ **Correct behavior for valid inputs**
* ❌ **Proper error handling for invalid inputs**

The test files can be found in the [GitHub repository](https://github.com/Manoel-Fernandes/Validate) and are not included in the published package on npm.

### Running the Tests Locally

To run the tests on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:Manoel-Fernandes/Validate.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the tests using Vitest:

   ```bash
   npm run test
   ```

> **Note:** If you don't have Vitest installed, you can install it globally with:
>
> ```bash
> npm install vitest
> ```

---

## 📈 Roadmap

- ✅ Silent mode (no error messages, only returns `false`)
- [ ] Option validation:
  ```js
  Validate.checkOption("single", ["single", "married", "divorced"]);
  ```
- [ ] Support for numeric and date ranges (e.g., `Validate.checkRange(25, { from: 18, to: 65 })`)

---

## 📦 Changelog

All notable changes are documented in the [CHANGELOG.md](https://github.com/Manoel-Fernandes/Validate/blob/main/CHANGELOG.md).

---

## 📄 License

MIT © [Manoel Fernandes](https://github.com/manoelfernandes)







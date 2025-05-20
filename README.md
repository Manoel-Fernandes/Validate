# 🧪 Validate

![npm](https://img.shields.io/npm/v/@manoelfernandes/validate)
![License](https://img.shields.io/badge/license-MIT-green)
![Test Status](https://github.com/Manoel-Fernandes/Validate/actions/workflows/node.js.yml/badge.svg)
![bundle size](https://img.shields.io/bundlephobia/minzip/@manoelfernandes/validate)
![npm downloads](https://img.shields.io/npm/dw/@manoelfernandes/validate)


**Validate** is a simple and lightweight library for validating primitive types in JavaScript. It was originally created to solve a personal need for safely validating input data and to prevent bugs caused by JavaScript's lack of strict typing. It helps ensure that values from both external and internal sources match the expected types before being used.

📚 See the complete documentation on [Gitbook](https://manoel-fernandes.gitbook.io/validate/)

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
<script src="https://unpkg.com/@manoelfernandes/validate@1.3.0/src/validate.js"></script>
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

For more examples and detailed usage, visit the [complete documentation](https://manoel-fernandes.gitbook.io/validate/).

## 🔕 Silent Mode

Silent mode is enabled by default. When enabled, validation methods return false instead of throwing errors on type mismatches.


```js
Validate.silent(false);

Validate.check("hello world", "number");           // ❌ error (Invalid value: expected "number", received "string")
```

When silent mode is enabled (default), you can safely perform checks like this:

```js
if (Validate.check(userName, "string")) {
  // if it is true
} else {
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

This library has been thoroughly tested using **Vitest**, with over 170 unit tests to ensure its robustness. The tests cover a wide range of scenarios, validating the following:

* ✅ **Correct behavior for valid inputs**
* ❌ **Proper error handling for invalid inputs**

The test files can be found in the [GitHub repository](https://github.com/Manoel-Fernandes/Validate) and are not included in the published package on npm.

### 🏃‍♂️ Running the Tests Locally

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

## 🆕 New Methods in Version 1.3.0

The following methods were added in **Version 1.3.0**:

* **`checkOptions(value, options)`**: Validates if the value is within a set of options.

  ```js
  Validate.checkOptions("single", ["single", "married", "divorced"]); // ✅ true
  ```

* **`checkRange(value, range)`**: Validates if a numeric value is within a specified range.

  This method can also be used for date or time validation, as long as the values are converted to numbers (e.g., using `getTime()` or `getHours()`).

  ```js
  // Numeric range
  Validate.checkRange(25, { from: 18, to: 65 }); // ✅ true
  
  
  // Date range (values must be numeric timestamps)
  const start = new Date(2022, 4, 1).getTime();  // Start date
  const end = new Date(2028, 4, 1).getTime();    // End date
  Validate.checkRange(new Date().getTime(), { from: start, to: end });
  
  
  // Time range (hours as numbers)
  Validate.checkRange(new Date().getHours(), { from: 8, to: 17 });
  ```
For more examples and detailed usage, visit the [complete documentation](https://manoel-fernandes.gitbook.io/validate/).

---

## 📈 Roadmap

* ✅ Silent mode (no error messages, only returns `false`)
* ✅ Options validation (`checkOptions`)
* ✅ Range validation (`checkRange`)

---

## 📦 Changelog

All notable changes are documented in the [CHANGELOG.md](https://github.com/Manoel-Fernandes/Validate/blob/main/CHANGELOG.md).

---

## 📄 License

MIT © [Manoel Fernandes](https://github.com/manoelfernandes)

# 🧪 Validate

**Validate** is a simple and lightweight library for validating primitive types in JavaScript.  
It helps ensure that data from both external and internal sources conforms to the expected type before being used.

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
<script src="https://unpkg.com/@manoelfernandes/validate@1.1.0/src/validate.js"></script>
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

## Silent mode

Silent mode has been introduced in the library and it is active by default, so using the library without disabling silent mode will only return false instead of returning an error message.

⚠️ This update will be available on npm from May 5th

```js
Validate.silent(false);

Validate.check("hello world", "number");           // ❌ error (Invalid value: expected a "number", received "string")
```

With silent mode you can now do checks like this

```js
if(Validate.check(userName, "string")){
	// if it is true
}else{
	// if it is false
}
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

---

## ⚠️ Error messages

Error messages are clear and objective, for example:

```
Invalid value: expected a "number", received "string"
```

---

## 🧪 Tests

This library was tested locally using Vitest, with over 90 unit tests.
All tests passed successfully, ensuring:

- ✅ Correct behavior for valid inputs
- ❌ Proper error handling for invalid inputs

> Note: Test files were not included in the published package on GitHub or npm.

---

## 📈 Roadmap

- [x] Silent mode (no error messages, only returns `false`)
- [ ] Option validation:
  ```js
  Validate.checkOption("single", ["single", "married", "divorced"]);
  ```
- [ ] Support for numeric and date ranges (e.g., `Validate.checkRange(10, { from: 1, to: 100 })`)

---

## 📄 License

MIT © [Manoel Fernandes](https://github.com/manoelfernandes)

---

![npm](https://img.shields.io/npm/v/@manoelfernandes/validate)
![License](https://img.shields.io/badge/license-MIT-green)

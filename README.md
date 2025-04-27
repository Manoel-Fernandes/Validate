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
*Support coming soon after GitHub publishing.*

### Frontend (via CDN)  
*CDN link will be available once the project is published on GitHub.*

---

## 🚀 Usage

```js
import Validate from "@manoelfernandes/validate";

// or, if using CommonJS (Node)
const Validate = require("@manoelfernandes/validate");

Validate.check(123, "number");             // ✅ true
Validate.check("hello", "string");         // ✅ true
Validate.check(true, "boolean");           // ✅ true

Validate.check("123", "number");           // ❌ error
Validate.check(undefined, "string");       // ❌ error
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

This library was tested using [Vitest](https://vitest.dev/).  
To run the tests:

```bash
npm run test
```

---

## 📈 Roadmap

- [ ] Silent mode (no error messages, only returns `false`)
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

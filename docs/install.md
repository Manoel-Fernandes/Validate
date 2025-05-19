# 📦 Installation

Validate supports multiple environments, including **Node.js**, **Deno**, and the **browser** (via CDN).  
Choose the setup that best fits your project.

---

## 🟩 Node.js

You can install the library using npm:

```bash
npm install @manoelfernandes/validate
```

Usage in CommonJS:

```js
const Validate = require('@manoelfernandes/validate').default;

Validate.check(123, "number"); // ✅ true
```

Usage in ES Modules:

```js
import Validate from '@manoelfernandes/validate';

Validate.check("hello", "string"); // ✅ true
```

---

## 🟦 Deno

Import the library directly from GitHub:

```js
import Validate from "https://raw.githubusercontent.com/Manoel-Fernandes/Validate/main/src/validate.js";

Validate.check(true, "boolean"); // ✅ true
```

---

## 🌐 Browser (via CDN)

You can use Validate directly in the browser with a `<script>` tag:

```html
<script src="https://unpkg.com/@manoelfernandes/validate@1.3.0/src/validate.js"></script>
```

Then use it like this:

```html
<script>
  const isValid = Validate.check(42, "number");
  console.log(isValid); // true
</script>
```

---

Once installed or imported, you're ready to start using the validation methods.
Check out the [Checking methods](check.md) section for usage examples.

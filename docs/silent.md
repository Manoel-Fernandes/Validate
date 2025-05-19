# `silent()`

The `silent()` method enables or disables **silent mode**, which controls whether validation methods should throw errors or simply return `false` when validation fails.

This setting only affects **data validation failures**, not **invalid usage** of the library (such as passing incorrect argument types). Usage errors will always throw an exception, regardless of the silent mode.

---

## 📌 Usage

```js
Validate.silent(boolean);
```

### Parameters

* `boolean` (`true | false`):

  * `true`: Enables silent mode – methods return `false` instead of throwing errors when validation fails.
  * `false`: Disables silent mode – methods throw descriptive errors when validation fails.

---

## 🟢 Default Behavior

Silent mode is **enabled by default**.
If you don’t call `Validate.silent(false)`, all validations will quietly return `false` on failure — no error is thrown.

```js
// Default behavior
Validate.check(123, "string"); 
// ❌ false (no error, silent mode is active by default)
```

---

### Example: Silent mode enabled (default)

```js
Validate.silent(true);

Validate.check(false, "string"); 
// ❌ false (no error, just failed validation)
```

---

### Example: Silent mode disabled

```js
Validate.silent(false);

Validate.check(false, "string"); 
// ❌ Error: Invalid value: expected "String", received "Boolean"
```

---

## ⚠️ Important Behavior

* Silent mode **only suppresses validation errors** (i.e., when values don’t match the expected type or format).
* **Incorrect usage** of the library — such as passing a string instead of a number — will **always throw an error**, regardless of silent mode.

```js
Validate.silent(true);

// Invalid input → still throws
Validate.checkRange("25", {from: "20", to: "40"});
// ❌ Error: Invalid type value. Please read README.md for usage details.
```

---

## 🔁 State Persistence

The silent mode setting is **global** and **persistent** for the entire runtime. Once set, it applies to all subsequent validation calls unless changed again.

```js
Validate.silent(true);
Validate.check(true, "boolean"); // ✅ true
Validate.check(true, "string");  // ❌ false

Validate.silent(false);
Validate.check(true, "string");  // ❌ Error: Invalid value: expected "String", received "Boolean"
```

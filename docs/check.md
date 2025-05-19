# `check()`

The `check()` method is the core validation function of the library. It is used to validate that a value matches a specified type.

---

## 📌 Usage

```js
Validate.check(value, type);
```

### Parameters

* `value` (any): The value to validate.
* `type` (string): The expected type for the value.
  Must be one of: `"number"`, `"string"`, `"boolean"`, `"bigint"`, `"undefined"`, `"null"`, `"symbol"`, `"array"`, `"object"`.

---

### Return Value

* ✅ Returns `true` if the value matches the expected type.
* ❌ Returns `false` if the value does not match the expected type.

---

## ✅ Examples

```js
// Valid examples
Validate.check(123, "number");     // ✅ true
Validate.check("hello", "string"); // ✅ true
Validate.check(true, "boolean");   // ✅ true

// Invalid examples
Validate.check("123", "number");       // ❌ false
Validate.check(undefined, "string");   // ❌ false
```

---

## ⚙️ Behavior

* Performs a **strict** type check.
* Does **not** coerce types (e.g., `"123"` is not a `"number"`).
* Returns `true` only when the type matches exactly.
* Returns `false` when types do not match (unless silent mode is off, see below).

---

## ❗ Error Messages (Silent Mode Off)

If silent mode is disabled (`Validate.silent(false)`), validation errors will throw clear exceptions:

```js
Validate.silent(false);
Validate.check("hello", "number");
// ❌ Error: Invalid value: expected "Number", received "String"
```

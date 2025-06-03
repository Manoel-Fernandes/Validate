# `checkOptions()`

The `checkOptions()` method validates whether a value is strictly equal to one of the allowed options provided in an array.
It is best suited for **primitive values** such as strings, numbers, booleans, and bigints.

---

## Usage

```js
Validate.checkOptions(value, options);
```

### Parameters

* `value` (any): The value to validate.
* `options` (array): An array of **primitive values** that the value must match.

---

### Return Value

* Returns `true` if the value matches one of the provided options (strict comparison).
* Returns `false` if the value is not found in the list.

---

## Examples

```js
// Valid cases
Validate.checkOptions("single", ["single", "married", "divorced"]);  // true
Validate.checkOptions(10, [5, 10, 15]);                              // true
Validate.checkOptions(false, [true, false]);                         // true

// Invalid cases
Validate.checkOptions("widowed", ["single", "married", "divorced"]);  // false
Validate.checkOptions(20, [5, 10, 15]);                               // false
```

---

## Limitations

* Only **primitive types** (e.g., `string`, `number`, `boolean`, `bigint`) are supported.
* It **does not support deep comparison** of objects, arrays, or custom structures.

```js
Validate.checkOptions([1, 2], [[1, 2], [3, 4]]); 
// Error: (checkOptions) Invalid value. See the docs.
```

---

## Error Messages (Silent Mode Off)

If silent mode is disabled (`Validate.silent(false)`), and the value is not found in the options, a descriptive error will be thrown:

```js
Validate.silent(false);
Validate.checkOptions("unknown", ["yes", "no"]);
// Check failed: (checkOptions) Value "unknown" not found.
```

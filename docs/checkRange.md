# `checkRange()`

The `checkRange()` method validates whether a value is within a specified range, inclusive of the bounds. Unlike `checkOptions()`, this method expects an object for the range definition, with properties `from` and `to`.

It works with **numeric values**, **BigInt** (`123n`), **Infinity**, **-Infinity**, and can also be used to validate **dates** (via `getTime()`) or **hours** (via `getHours()`).

---

## 📌 Usage

```js
Validate.checkRange(value, { from, to });
```

### Parameters

* `value` (`number | bigint`): The value to validate. It can be:

  * A **number** (including `Infinity` and `-Infinity`),
  * A **BigInt** (`123n`),
  * A **timestamp** (e.g., from `Date.getTime()`),
  * An **hour of the day** (e.g., from `Date.getHours()`).

* `range` (object): An object containing two properties:

  * `from` (number | bigint): The minimum value of the range.
  * `to` (number | bigint): The maximum value of the range.

---

### Return Value

* ✅ Returns `true` if the value is within the specified range (inclusive).
* ❌ Returns `false` if the value is outside the range.

---

## ✅ Examples

### Valid cases with numeric values:

```js
Validate.checkRange(28, {from: 18, to: 65});  // ✅ true (28 is within the range)
Validate.checkRange(0, {from: 0, to: 0});     // ✅ true (0 is equal to both the min and max)
Validate.checkRange(100, {from: 0, to: 100}); // ✅ true (100 is within the range)
```

### Valid cases with **BigInt** values:

```js
Validate.checkRange(123n, {from: 100n, to: 150n}); // ✅ true (123n is within the range)
```

### Valid cases with **Infinity**:

```js
Validate.checkRange(512, {from: 0, to: Infinity});     // ✅ true (512 is within the range 0 to Infinity)
Validate.checkRange(-512, {from: -Infinity, to: 0});   // ✅ true (-512 is within the range -Infinity to 0)
```

### Valid cases with **Dates timestamps** (`getTime()`):

```js
let start = new Date(2020, 0, 1).getTime();
let end = new Date(2027, 0, 1).getTime();
let now = new Date().getTime();

Validate.checkRange(now, {from: start, to: end}); 
// ✅ true (current timestamp is within the specified date range)
```

### Valid cases with **Hours values** (`getHours()`):

```js
let hour = new Date().getHours();
Validate.checkRange(hour, {from: 8, to: 17}); 
// ✅ true (current hour is within 8 AM to 5 PM)
```

### Invalid cases:

```js
Validate.checkRange(70, {from: 18, to: 65});  // ❌ false (70 is greater than 65)
Validate.checkRange(-10, {from: 0, to: 100}); // ❌ false (-10 is less than 0)
```

---

## ⚠️ Limitations

* The library checks for valid input types before performing any range checks.
* Only **numbers** and **BigInt** values (including `Infinity` and `-Infinity`) are accepted.
* **Non-numeric values** will be rejected immediately with an error.

---

## ❗ Error Messages (Silent Mode Off)

If silent mode is disabled (`Validate.silent(false)`) and the value is outside the range, a descriptive error will be thrown:

```js
Validate.silent(false);
Validate.checkRange(200, {from: 50, to: 150});
// ❌ Error: The value 200 is outside the range.
```

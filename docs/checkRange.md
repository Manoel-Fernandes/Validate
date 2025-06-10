# `checkRange()`

The `checkRange()` method validates whether a value is within a specified range, inclusive of the bounds. Unlike `checkOptions()`, this method expects an object for the range definition, with properties `from` and `to`.

It works with **numeric values**, **BigInt** (`123n`), **Infinity**, **-Infinity**, and can also be used to validate **dates** (via `getTime()`) or **hours** (via `getHours()`).

---

## Usage

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

* Returns `true` if the value is within the specified range (inclusive).
* Returns `false` if the value is outside the range.

---

## Examples

### Valid cases with numeric values:

```js
Validate.checkRange(28, {from: 18, to: 65});  // true
Validate.checkRange(0, {from: 0, to: 5});     // true
Validate.checkRange(100, {from: 0, to: 100}); // true
```

### Valid cases with **BigInt** values:

```js
Validate.checkRange(123n, {from: 100n, to: 150n}); // true
```

### Valid cases with **Infinity**:

```js
Validate.checkRange(512, {from: 0, to: Infinity});     // true
Validate.checkRange(-512, {from: -Infinity, to: 0});   // true
```

### Valid cases with **Dates timestamps** (`getTime()`):

```js
let start = new Date(2020, 0, 1).getTime();
let end = new Date(2027, 0, 1).getTime();
let now = new Date().getTime();

Validate.checkRange(now, {from: start, to: end}); 
// true
```

### Valid cases with **Hours values** (`getHours()`):

```js
let hour = new Date().getHours();
Validate.checkRange(hour, {from: 8, to: 17}); 
// true
```

### Valid cases with **String values**:

```js
let name = "validate";
Validate.checkRange(name.length, {from: 5, to: 10}); 
// true
```

### Invalid cases:

```js
Validate.checkRange(70, {from: 18, to: 65});  // false
Validate.checkRange(-10, {from: 0, to: 100}); // false
```

---

## Limitations

* The library checks for valid input types before performing any range checks.
* Only **numbers** and **BigInt** values (including `Infinity` and `-Infinity`) are accepted.
* **Non-numeric values** will be rejected immediately with an error.

---

## Error Messages (Silent Mode Off)

If silent mode is disabled (`Validate.silent(false)`) and the value is outside the range, a descriptive error will be thrown:

```js
Validate.silent(false);
Validate.checkRange(200, {from: 50, to: 150});
// Check failed: (checkRange) Value "200" is out of range.
```

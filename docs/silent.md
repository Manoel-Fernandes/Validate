# Silent

The `silent()` method enables or disables **silent mode**, which controls whether validation methods should throw errors or simply return `false` when validation fails.

To check if silent mode is enabled, use `isSilent()` method.

This setting only affects **data validation failures**, not **invalid usage** of the library (such as passing incorrect argument types). Usage errors will always throw an exception, regardless of the silent mode.


## Usage

```js
Validate.silent(boolean);
```

### Parameters

* `boolean` (`true | false`):

  * `true`: Enables silent mode – methods return `false` instead of throwing errors when validation fails.
  * `false`: Disables silent mode – methods throw descriptive errors when validation fails.


## Default Behavior

Silent mode is **enabled by default**.
If you don’t call `Validate.silent(false)`, all validations will quietly return `false` on failure — no error is thrown.

```js
Validate.check(123, "string"); 
// false (no error, silent mode is active by default)
```

---

### Example: Silent mode enabled (default)

```js
Validate.silent(true);

Validate.check(false, "string"); 
// false (no error, just failed validation)
```


### Example: Silent mode disabled

```js
Validate.silent(false);

Validate.check(false, "string"); 
// Check failed: (check) Type mismatch. Expected "String", got "Boolean".
```


## ⚠️ Important Behavior

* Silent mode **only suppresses validation errors** (i.e., when values don’t match the expected type or format).
* **Incorrect usage** of the library — such as passing a string instead of a number — will **always throw an error**, regardless of silent mode.

```js
Validate.silent(true);

// Invalid input → still throws
Validate.checkRange("25", {from: "20", to: "40"});
// Error: (checkRange) "from" must be a number.
```

## Checking Silent Mode Status

Use the `isSilent()` method to check the current silent mode status.

It returns a boolean indicating whether silent mode is currently enabled.

Example:
```js
Validate.silent(true);
console.log(Validate.isSilent()); 
// true

Validate.silent(false);
console.log(Validate.isSilent()); 
// false
```

This is useful if you need to verify or toggle behavior based on the current validation mode.


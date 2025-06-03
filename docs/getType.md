# Get the Type

The getType() method returns the type of a given value using custom logic that improves upon JavaScript's native typeof.
It is designed to provide more accurate and consistent type identification, especially for values that typeof handles ambiguously.

For example:

```
typeof []        // "object"
Validate.getType([]);   // "array"

typeof Infinity  // "number"
Validate.getType(Infinity); // "infinity"

```

## Supported Output Types
The method returns a string representing the detected type, such as:

- "string"

- "number"

- "boolean"

- "array"

- "object"

- "bigInt"

- "null"

- "undefined"

- "infinity"

- "nan"

- "symbol"

This is useful for error reporting, dynamic validation, or when type inspection is required beyond what typeof offers.

## Usage

```js
Validate.getType(value);

```

**Example:**

```js
Validate.getType(123);           // "number"
Validate.getType(null);          // "null"
Validate.getType(undefined);     // "undefined"
Validate.getType([]);            // "array"
Validate.getType(NaN);           // "nan"
```

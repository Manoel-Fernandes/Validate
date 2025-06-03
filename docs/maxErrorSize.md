# `maxErrorSize()`

The `maxErrorSize()` method lets you configure the maximum number of validation error messages the library stores internally.

When the limit is reached, the oldest error messages are discarded to keep only the most recent ones.

## Default Behavior

- The default maximum size is 10 error messages.

- This default typically consumes about 1.7 KB of memory, based on average error message length.

- Increasing the max size will increase memory usage proportionally (e.g., 1,000 errors ≈ 166 KB).

## Parameters

```js
Validate.maxErrorSize(number);
```

`number` (integer ≥ 1): Sets the new maximum number of stored error messages.

If a value less than 1 is provided, the method will throw an error because 1 is the minimum allowed value.

## Usage Example

```js
import Validate from '@manoelfernandes/validate';

// Increase max error storage to 100
Validate.maxErrorSize(100);

// Your validation code here...
```

## Why Adjust maxErrorSize?

- Increase it if you want to keep a longer history of errors for analysis or logging.

- Decrease it to save memory in environments with limited resources.

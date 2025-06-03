# `getErrors()`

The `getErrors()` method returns an array of recent validation error messages stored internally by the library.

This is especially useful in silent mode, where failed validations don’t throw errors but are still tracked. With this method, you can inspect the latest issues — helpful for debugging, logging, or analytics.

## What It Returns

An array of strings. Each string contains:

- The validation method used (check, checkRange, checkOptions, etc.)

- A brief explanation of the failure

- Expected vs. received types

- A UTC timestamp showing when the error occurred

## Example Output

```js
[
  'Check failed: (check) Type mismatch. Expected "String", got "Boolean". - 2025-06-03T07:58:21.112Z',
  'Check failed: (checkRange) Value "27" is out of range. - 2025-06-03T08:17:12.145Z',
  'Check failed: (checkOptions) Value "22" not found. - 2025-06-03T08:42:21.177Z',
  'Check failed: (check) Type mismatch. Expected "BigInt", got "Object". - 2025-06-03T09:51:32.210Z'
]
```

# Default Behavior

By default, the library stores up to 10 recent validation errors.
Older entries are discarded as new ones come in.

You can customize this behavior using `maxErrorSize()` to increase or limit the number of stored errors.

# Usage Example

```js
import Validate from '@manoelfernandes/validate';

Validate.check(false, "string");
Validate.checkRange("25", { from: 10, to: 30 });
Validate.checkOptions("X", ["A", "B", "C"]);

const errors = Validate.getErrors();
console.log(errors);
```

## Saving to File (Node.js)

```js
import fs from 'fs';

const errors = Validate.getErrors();

if (errors.length > 0) {
  fs.writeFileSync('validation-errors.log', errors.join('\n') + '\n');
}
```

This is useful for tracking multiple validation issues, especially in production logs or test reports.

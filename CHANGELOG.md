# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.1] - 2025-06-11

### Added
- Full TypeScript support with exported `.d.ts` type declarations.
- New type support in `check()` method:
  - Now detects: `Date`, `RegExp`, `Map`, `Set`, `WeakMap`, `WeakSet`.
- `getType()` can now identify:
  - `Promises`
  - `Date`
  - `RegExp`
  - `Set`
  - `Map`
  - `WeakMap`
  - `WeakSet`
  - Error instances: `Error`, `TypeError`, `URIError`, `SyntaxError`, `ReferenceError`, `RangeError`, `EvalError`
- New tests added using Vitest to cover all newly supported types.


## [1.4.0] - 2025-06-03

### Added
- New methods for error tracking and type introspection:
  - `isSilent()` – Returns whether silent mode is currently active.
  - `maxErrorSize(size)` – Sets the maximum size of the internal error log buffer.
  - `getLastError()` – Returns the most recent validation error message.
  - `getErrors()` – Returns an array containing all logged validation errors.
  - `getType(input)` – Returns the detected type of a given value, including special types like `Infinity`, `NaN`, `Array`, and `Null`.
- Added a new minified build (`validate.min.js`) using [esbuild](https://esbuild.github.io/).
- Introduced a GitHub Actions workflow to automatically publish new releases to npm.
- Added full documentation for all new methods.

### Changed
- The main entry point (`index.js`) was moved to the root directory and now references the minified build output.
- All error messages now include the name of the method that triggered the error, such as `check`, `checkRange`, `checkOptions`, and `silent`.
- The library now exports both a default validator instance and the validator class/constructor.
  This enables users to either use the default instance directly (for simplicity) or create multiple independent instances when needed (for better modularity and testability).

### Improved
- Significant internal code optimization: the codebase was reduced by approximately **30%**, while maintaining the same number of lines as version `1.3.0`, despite the addition of five new methods.
- Refactored error messages for improved clarity and structure:
  - Validation failures are now prefixed with `Check failed:`.
  - Configuration or usage errors are now prefixed with `Error:`.
  - Example:
    ```
    Before:
    Invalid value: expected "Number", received "Array"

    Now:
    Check failed: (check) Type mismatch. Expected "Number", got "Array".
    ```

### Fixed
- `checkRange` and `checkOptions` now correctly respect silent mode and return `false` instead of throwing errors when validation fails.
- Fixed an issue in `checkRange` where a failed validation on the `value` input (e.g., value out of range) would incorrectly throw an error even with silent mode enabled. Since `value` is considered user or external input, it now returns `false` silently, as expected.

### Tests
- All existing test cases have been updated to reflect internal changes and the new error message format.
- New tests have been added to cover the newly introduced methods.


## [1.3.0] - 2025-05-20

### Added
- The checkOptions method has been added to validate data in a set of data passed through an array.
- Added checkRange to validate a value within a specific range.
- Documentation has been created and hosted on gitbook.
- New error messages have been added for the new methods (checkRange and checkOptions).

### Changed
- Updated README with new examples and information about the added types and documentation.

## [1.2.1] - 2025-05-12
### Improved
- Error messages now correctly identify the actual type of the received value.  
  **Example:**  
  Before -> `Invalid value: expected "number", received "object"`  
  Now -> `Invalid value: expected "Number", received "Array"`
- Data types in error messages are now capitalized (`Null`, `Array`, `Infinity`, etc.) for better readability.


## [1.2.0] - 2025-05-09
### Added
- Support for `array` and `object` types in data validation.
- Automated tests using GitHub Actions.
- Code optimizations for improved performance.

### Changed
- Updated README with new examples and information about the added types.

### Fixed
- Adjusted existing tests for compatibility with the new types.

## [1.1.1] - 2025-05-06
### Fixed
- Silent mode validation to ensure the received value is a boolean. If not, an error is thrown.

## [1.1.0] - 2025-05-05
### Added
- Silent mode implementation, which returns `false` instead of throwing errors.
- Updated README with information about silent mode and usage examples.

## [1.0.1] - 2025-04-29
### Added
- Included unpkg CDN link in README for front-end usage.
- Added Deno support information in README.

## [1.0.0] - 2025-04-29
### Added
- Initial release on npm package registry.
- Support for types: `number`, `string`, `boolean`, `bigint`, `undefined`, `null`, `symbol`.
- Included README and license.

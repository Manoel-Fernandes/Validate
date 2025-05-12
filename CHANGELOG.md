# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

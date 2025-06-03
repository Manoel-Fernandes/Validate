# Error Handling

The Validate library offers mechanisms to help you handle and inspect validation errors flexibly.

## Validation Errors vs. Usage Errors

- Validation errors occur when the input data does not meet the expected type or format.
  If silent mode is enabled (Validate.silent(true)), these errors will not throw exceptions but instead return false.
  However, error messages for these failed validations are still saved internally and can be accessed later for inspection.

- Usage errors happen when the library is used incorrectly — for example, passing arguments with the wrong types to the validation methods.
  These errors always throw exceptions, regardless of silent mode.
  To suppress these exceptions, you must handle them explicitly using `try/catch`.


## Accessing Validation Errors

Even when silent mode is active and validation errors don’t throw exceptions, you can retrieve detailed error information using:

- `getLastError()` — returns the last validation error message.

- `getErrors()` — returns an array of recent error messages.

- `maxErrorSize()` — configures how many error messages are stored internally.

These tools let you monitor validation results and debug your application without interrupting its flow.

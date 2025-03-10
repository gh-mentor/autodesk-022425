## JavaScript and TypeScript Instructions

### General Guidelines
* Use ES6 syntax for JavaScript.
* Prefer `const` and `let` over `var`.
* Use meaningful variable and function names.
* Ensure code is modular and reusable.
* Follow the Airbnb JavaScript style guide.
* Add comments to all functions and classes explaining their purpose and usage.

### TypeScript Specific
* Use TypeScript for new files.
* Define types and interfaces for all objects and functions.
* Use strict typing to avoid any type.
* Enable strict mode in `tsconfig.json`.
* Use type assertions sparingly and only when necessary.
* Prefer `unknown` over `any` for unknown types.

### Functions
* Use arrow functions for anonymous functions.
* Use named functions for better stack traces.
* Ensure functions are small and perform a single task.
* Use default parameters where applicable.

### Asynchronous Code
* Use async/await for handling asynchronous operations.
* Avoid using callbacks; prefer Promises.
* Handle errors using try/catch blocks.

### Error Handling
* Always handle errors gracefully.
* Use custom error messages to make debugging easier.
* Log errors to the console for debugging purposes.

### Testing
* Write unit tests for all functions using Jest.
* Ensure tests cover edge cases and potential error scenarios.
* Use descriptive names for test cases.
* Mock external dependencies in tests.

### Linting and Formatting
* Use ESLint to enforce coding standards.
* Configure ESLint to follow the Airbnb style guide.
* Use Prettier for code formatting.
* Ensure code is properly linted and formatted before committing.

### Documentation
* Add JSDoc comments to all functions and classes.
* Maintain a README file with project setup instructions.
* Document any third-party libraries or frameworks used.

### Version Control
* Use meaningful commit messages.
* Commit small, incremental changes.
* Use feature branches for new features and bug fixes.
* Merge changes to the main branch only after code review.

### Dependencies
* Keep dependencies up to date.
* Use npm or yarn for package management.
* Avoid using deprecated or unmaintained packages.

### Security
* Avoid using eval or other potentially dangerous functions.
* Sanitize user inputs to prevent injection attacks.
* Use HTTPS for all network requests.
* Store sensitive information securely.

### Performance
* Optimize code for performance.
* Avoid unnecessary computations or memory usage.
* Use lazy loading for large modules or components.
* Profile and monitor performance in production.

### Code Review
* Always perform code reviews before merging changes.
* Provide constructive feedback during code reviews.
* Address all comments and suggestions from code reviews.
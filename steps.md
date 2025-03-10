
Objective: Build a web service that hooks into the Bing public search engine using NodeJS with Express server-side and ReactJS client-side.

Plan:
Follow the guidelines specified in the 'project-plan.md' file..

Minimal Requirements:
- the API must support the GET and POST protocols over HTTPS
- all requests must be logged
- adherence to SOLID principles 
- proper handling of errors and exceptions
Details:
- will be written using the latest version of NodeJS with Express server-side and ReactJS client-side.
- support indexing internal content
- processes search queries through a dispatch using 'Axios'
- uses promises to handle different tasks concurrently 
- includes the dispatch logic to route queries to either Bing or an internal indexer, depending on the query type 

Step 1: Create a basic project structure

Step 2: Implement the API:
- Create endpoints that support GET and POST protocols over HTTPS.
- Ensure all requests are logged.

Step 3: Review the code to ensure adherence to at least the following SOLID principles
- Implement the Single Responsibility Principle.
- Implement the Open/Closed Principle.
- Implement the Liskov Substitution Principle.

Step 4: Support indexing internal content:
- Implement functionality to index internal content.
- Ensure the indexing is efficient and scalable.
- Assume the internal content is stored in a database.

Step 5: Implement dispatch logic:
- Create logic to route queries to either Bing or an internal indexer, depending on the query type.

Step 6: Handle concurrency:
- Use threads to handle different tasks concurrently.
- Ensure the service can handle multiple requests simultaneously.

Step 7: Proper handling of errors and exceptions:
- Implement error and exception handling mechanisms.
- Ensure the service can recover from errors gracefully.

Step 8: Integrate and test the service:
- Ensure all components work together seamlessly.
- Use Jest to for tests to verify the functionality.
- Perform integration tests to ensure the entire service works as expected.

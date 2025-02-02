# Next.js Unhandled Promise Rejection: Fetch API in Page Component

This repository demonstrates an issue where using the `fetch` API within a Next.js page component without proper error handling or asynchronous behavior leads to an unhandled promise rejection.

## Bug Description
The `fetch` call in `pages/about.js` is not properly handled.  This leads to an unhandled promise rejection, causing unexpected behavior and potentially crashing the application.

## Solution
The solution involves using `async/await` to properly handle the asynchronous nature of `fetch` and incorporating a `try...catch` block to gracefully manage potential errors.
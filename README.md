# useEffect Cleanup Function Issue in React

This repository demonstrates a common issue with the cleanup function in React's `useEffect` hook. The cleanup function, returned from the `useEffect` callback, is designed to perform cleanup actions before the component unmounts or before the next effect runs. However, there might be scenarios where the cleanup function doesn't behave as intended.

The `bug.js` file showcases the issue. The `useEffect` hook logs the current `count` on every render and includes a cleanup function that logs a 'Cleanup' message. However, this cleanup function might not always execute correctly, especially when the component unmounts quickly or if there are frequent state updates.

The `bugSolution.js` file provides a possible solution.  It demonstrates best practices for ensuring proper cleanup.
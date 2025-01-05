```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldCleanup, setShouldCleanup] = useState(true);

  useEffect(() => {
    let cleanup = () => {
      console.log('Cleanup');
    };
    // Only call cleanup if setShouldCleanup is true
    return () => {
      if(shouldCleanup){
        cleanup();
      }
    };
  }, [count, shouldCleanup]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleUnmount = () => {
    setShouldCleanup(false);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleUnmount}>Unmount</button>
    </div>
  );
}
```
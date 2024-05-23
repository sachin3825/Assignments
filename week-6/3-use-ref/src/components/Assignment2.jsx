import React, { useState, useCallback, useRef, useEffect } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  // Increment render count only once after the initial render

  const handleReRender = () => {
    // No need to update state, just trigger re-render
    // This won't cause a re-render due to the useRef usage
    setCount(count + 1);
  };

  renderCount.current += 1;

  return (
    <div>
      <p>This component has rendered {renderCount.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}

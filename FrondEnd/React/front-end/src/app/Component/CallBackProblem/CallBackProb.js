import React, { useState, useCallback } from "react";

const Child = React.memo(({ handleClick }) => {
    console.log("Child rendered");
    return <button onClick={handleClick}>Click Me</button>;
});

function Parent() {
    const [count, setCount] = useState(0);

    // Memoize the callback to prevent Child re-render when `count` changes
    const handleClick = useCallback(() => {
        console.log("Button clicked!");
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Child handleClick={handleClick} />
        </div>
    );
}

export default Parent;

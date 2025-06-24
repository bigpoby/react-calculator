import React, { useEffect, useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        console.log("클릭함!!!");
    });

    useEffect(() => {
        console.log("API 연결상태");
        myFn();
    },[isOnline]);

    function myFn() {};


    return (
        <div>
            <p>총 {count}번 클릭</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
            <button onClick={() => setCount(count)}>클릭2</button>
        </div>
    )
}

export default Counter;
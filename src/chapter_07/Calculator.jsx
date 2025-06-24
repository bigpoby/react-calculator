import { useState } from "react";

export default function Calculator() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const handleChange1 = (e) => setNumber1(Number(e.target.value));
    const handleChange2 = (e) => setNumber2(Number(e.target.value));

    return (
        <div>
            <input type="text" value={number1} onChange={handleChange1}/>
            <input type="text" value={number2} onChange={handleChange2}/>
            <button>첫번째 입력에 포커스</button>
            <div>결과(제곱의 합): </div>
        </div>
    )
}
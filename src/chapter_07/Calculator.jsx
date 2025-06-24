import { useState } from "react";
import InputBox from "./InputBox";
import Result from "./Result";

export default function Calculator() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const handleChange1 = (e) => setNumber1(Number(e.target.value));
    const handleChange2 = (e) => setNumber2(Number(e.target.value));

    return (
        <div>
            <InputBox value={number1} handleChange={handleChange1} />
            <InputBox value={number2} handleChange={handleChange2} />
            <button>첫번째 입력에 포커스</button>
            <Result val1={number1} val2={number2}/>
        </div>
    )
}
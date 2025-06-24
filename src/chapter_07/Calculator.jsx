import { useCallback, useState } from "react";
import InputBox from "./InputBox";
import Result from "./Result";

export default function Calculator() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    // useCallback적용
    // 의존성 목록이 비어 있으면 최초 한 번만 함수를 반환
    // 컴포넌트가 리렌더링되어도 handleChange1 함수는 동일한 참조값을 유지
    const handleChange1 = useCallback((e) => setNumber1(Number(e.target.value)), []);
    const handleChange2 = useCallback((e) => setNumber2(Number(e.target.value)), []);

    return (
        <div>
            <InputBox value={number1} handleChange={handleChange1} />
            <InputBox value={number2} handleChange={handleChange2} />
            <button>첫번째 입력에 포커스</button>
            <Result val1={number1} val2={number2}/>
        </div>
    )
}
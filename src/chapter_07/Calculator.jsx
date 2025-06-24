import { useCallback, useRef, useState } from "react";
import InputBox from "./InputBox";
import Result from "./Result";
import CalcPad from "./CalcPad";

export default function Calculator() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const inputRef = useRef(null);

    // useCallback적용
    // 의존성 목록이 비어 있으면 최초 한 번만 함수를 반환
    // 컴포넌트가 리렌더링되어도 handleChange1 함수는 동일한 참조값을 유지
    const handleChange1 = useCallback((e) => setNumber1(Number(e.target.value)), []);
    const handleChange2 = useCallback((e) => setNumber2(Number(e.target.value)), []);

    const focusInput = () => {
      inputRef.current.focus();
    }

    return (
        <div>
            <CalcPad />
        </div>
    )
}
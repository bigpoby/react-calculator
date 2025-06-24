import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';

function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const inputRef = useRef(null);

  // 무거운 연산을 useMemo로 처리 (예: 제곱의 합)
  const result = useMemo(() => {
    // 실제로는 복잡한 연산으로 대체 가능
    return number1 * number1 + number2 * number2;
  }, [number1, number2]);

  // 입력이 바뀔 때마다 실행되는 함수 (useCallback으로 메모이제이션)
  const handleChange1 = useCallback((e) => setNumber1(Number(e.target.value)), []);
  const handleChange2 = useCallback((e) => setNumber2(Number(e.target.value)), []);

  // number1, number2가 변할 때마다 로그
  useEffect(() => {
    console.log('입력값이 변경되었습니다:', number1, number2);
  }, [number1, number2]);

  // 버튼 클릭 시 input에 포커스
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="number" value={number1} onChange={handleChange1} />
      <input type="number" value={number2} onChange={handleChange2} />
      <button onClick={focusInput}>첫 번째 입력에 포커스</button>
      <div>결과(제곱의 합): {result}</div>
    </div>
  );
}

export default Calculator;
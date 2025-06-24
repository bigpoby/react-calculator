import { useMemo } from "react";

export default function Result({val1, val2}) {
    // 메모이제이션: 지정된 의존성이 변경될 때만 값을 다시 계산합니다.
    // useMemo 자체는 렌더링을 유발하지 않으며, 오히려 불필요한 연산을 줄여 렌더링 성능을 향상
    // 아래에서 useMemo는 number1 또는 number2의 이 값이 바뀌지 않으면 이전 결과를 반환한다.
    // 의존성 목록이 비어 있는 것은 의미가 없다!(교재 223페이지 하단)
    const result = useMemo(() => {
        return val1*val1+val2*val2;
    }, [val1, val2])

    return <div>결과(제곱의 합): {result}</div>;
}
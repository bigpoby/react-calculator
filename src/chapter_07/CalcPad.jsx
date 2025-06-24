import CalcBtn from "./CalcBtn";

const onButtonClick = () => {};

function CalcPad() {
    return (
        <div style={{
            display:'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gap: '16px'
        }}>
            <CalcBtn type='operator' value="AC" onClick={onButtonClick} />
            <CalcBtn type='operator' value="DEL" onClick={onButtonClick} />
            <CalcBtn type='operator' value="%" onClick={onButtonClick} />
            <CalcBtn type='operator' value="÷" onClick={onButtonClick} />
            <CalcBtn type='' value="7" onClick={onButtonClick} />
            <CalcBtn type='' value="8" onClick={onButtonClick} />
            <CalcBtn type='' value="9" onClick={onButtonClick} />
            <CalcBtn type='operator' value="×" onClick={onButtonClick} />
            <CalcBtn type='' value="4" onClick={onButtonClick} />
            <CalcBtn type='' value="5" onClick={onButtonClick} />
            <CalcBtn type='' value="6" onClick={onButtonClick} />
            <CalcBtn type='operator' value="-" onClick={onButtonClick} />
            <CalcBtn type='' value="1" onClick={onButtonClick} />
            <CalcBtn type='' value="2" onClick={onButtonClick} />
            <CalcBtn type='' value="3" onClick={onButtonClick} />
            <CalcBtn type='operator' value="+" onClick={onButtonClick} />
            <CalcBtn type='' value="0" onClick={onButtonClick} />
            <CalcBtn type='' value="0" onClick={onButtonClick} />
            <CalcBtn type='operator' value="=" onClick={onButtonClick} />
        </div>
    )
}

export default CalcPad;
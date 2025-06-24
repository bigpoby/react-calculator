import './assets/css/Button.css';

function CalcBtn({type, value, onClick}) {
    let className = "button";
    if (type === 'operator') className += " operator"; // button operator
    if (type === 'zero') className += " zero";

    return (
        <button className={className} onClick={() => onClick(value)}>
            {value}
        </button>
    )
}

export default CalcBtn;
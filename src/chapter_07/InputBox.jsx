export default function InputBox({value, handleChange, ref}) {
    return <input type="text" value={value} onChange={handleChange} ref={ref}/>
}
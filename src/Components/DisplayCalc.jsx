import styles from './DisplayCalc.module.css'
function DisplayCalc({displayValue}){
    return (
        <>
        <input type="text" placeholder="Calculate here" className={`${styles.inputField}`} value={displayValue} readOnly/>
        </>
    );
}

export default DisplayCalc;
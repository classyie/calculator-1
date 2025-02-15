import styles from './ButtonDisplay.module.css';
function ButtonDisplay({onButtonClick}){
    const buttonNames = [
        "C",
        "1",
        "2",
        "+",
        "3",
        "4",
        "-",
        "5",
        "6",
        "*",
        "7",
        "8",
        "/",
        "=",
        "9",
        "0",
        ".",
      ];
    return(
    <>
    <div className={`${styles.buttonsContainer}`}>       
        {buttonNames.map((buttonName) =>
             <button 
             className={`${styles.button}`} 
             key={buttonName}
             onClick={()=> onButtonClick (buttonName)}>
                {buttonName}
            </button>)}
    </div>

    </>);
}

export default ButtonDisplay;
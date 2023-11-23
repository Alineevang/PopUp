import styles from './popup.module.css';
const PopUp = ({message, typeColor}) => {
    let color = '';
    if(typeColor === 'success'){
        color = styles.success;
    } else{
        color = styles.error
    }

    return(
        <div className={color}>
            <p>{message}</p>
        </div>
    )
}
export default PopUp

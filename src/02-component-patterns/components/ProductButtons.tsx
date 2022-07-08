
import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from "../styles/styles.module.css";

export const ProductButtons = () => {
    const { counter, incrementarButton } = useContext(ProductContext);
    return (
        <div className={styles.buttonsContainer}>
            <button onClick={() => incrementarButton(-1)} className={styles.buttonMinus}> - </button>
            <button className={styles.countLabel}> {counter} </button>
            <button onClick={() => incrementarButton(+1)} className={styles.buttonAdd}> + </button>
        </div>

    )
}

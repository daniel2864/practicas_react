
import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from "../styles/styles.module.css";
import { ProductButtonProps } from '../interfaces/ProductoInterface';

export const ProductButtons = ({ className, style }: ProductButtonProps) => {
    const { counter, incrementarButton } = useContext(ProductContext);
    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button onClick={() => incrementarButton(-1)} className={styles.buttonMinus}> - </button>
            <button className={styles.countLabel}> {counter} </button>
            <button onClick={() => incrementarButton(+1)} className={styles.buttonAdd}> + </button>
        </div>

    )
}

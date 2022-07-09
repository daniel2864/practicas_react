import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from "../styles/styles.module.css";
import { ProductTitleProps } from '../interfaces/ProductoInterface';

export const ProductTitle = ({ titulo, className, style }: ProductTitleProps) => {
    const { product } = useContext(ProductContext);
    return (
        <span
            className={`${styles.productDescription} ${className}`}
            style={style}>
            {titulo ? titulo : product.titulo}
        </span>
    )
}
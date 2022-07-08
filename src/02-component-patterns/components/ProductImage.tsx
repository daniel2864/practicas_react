import { useContext } from 'react';
import noImage from "../assets/no-image.jpg";
import { ProductContext } from './ProductCard';
import styles from "../styles/styles.module.css";

export const ProductImage = ({ imagen = '' }) => {
    const { product } = useContext(ProductContext);
    const img = imagen ? imagen : product.img
    return (
        <img className={styles.productImg} src={img ? img : noImage} alt='imagen' />
    )
}
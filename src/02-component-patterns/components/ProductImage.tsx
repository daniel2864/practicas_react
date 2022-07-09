import { useContext } from 'react';
import noImage from "../assets/no-image.jpg";
import { ProductContext } from './ProductCard';
import styles from "../styles/styles.module.css";
import { ProductImageProps } from '../interfaces/ProductoInterface';

export const ProductImage = ({ imagen = '', className, style }: ProductImageProps) => {
    const { product } = useContext(ProductContext);
    const img = imagen ? imagen : product.img
    return (
        <img
            className={`${styles.productImg} ${className}`} src={img ? img : noImage}
            style={style}
            alt='imagen' />
    )
}
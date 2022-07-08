import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from "../styles/styles.module.css";

export const ProductTitle = ({ titulo }: { titulo?: string }) => {
    const { product } = useContext(ProductContext);
    return (
        <span className={styles.productDescription}>
            {titulo ? titulo : product.titulo}
        </span>
    )
}
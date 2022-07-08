import { createContext } from "react";

import { useProduct } from '../hooks/useProduct';
import { ProductCardprops, ProductContextProps } from "../interfaces/ProductoInterface";
import styles from "../styles/styles.module.css";



export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardprops) => {

    const { counter, incrementarButton } = useProduct()

    return (
        <Provider value={{ counter, incrementarButton, product }} >
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>

    )
}

// ProductCard.Imagen = ProductImage;
// ProductCard.Title = ProductTitle;
// ProductCard.Buttons = ProductButtons;

import { ProductCard as ProductCardComponent } from './ProductCard';

import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import { ProductCadMainProps } from '../interfaces/ProductoInterface';

export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';
export { ProductButtons } from './ProductButtons';


export const ProductCard : ProductCadMainProps =  Object.assign(ProductCardComponent,{
    Title: ProductTitle,
    Imagen: ProductImage,
    Buttons: ProductButtons
});
export default ProductCard;
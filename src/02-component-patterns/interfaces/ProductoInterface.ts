import { ReactElement } from 'react';

export interface ProductCardprops {
    children?: ReactElement | ReactElement[]
    product: product;
}
export interface product {
    id: string;
    titulo: string;
    img?: string;
}
export interface ProductContextProps {
    counter: number,
    incrementarButton: (value: number) => void,
    product: product

}

export interface ProductCadMainProps{
    ({ children, product }: ProductCardprops): JSX.Element,
    Title: ({ titulo }: {titulo?: string}) => JSX.Element,
    Imagen: ({ imagen }: {imagen?: string}) => JSX.Element,
    Buttons: () => JSX.Element
}

export interface product {
    id: string;
    img?: string;
    titulo: string;
}

export interface ProductTitleProps {
    className?: string;
    titulo?: string;
    activeClass?: string;
    style?: React.CSSProperties;
}

export interface ProductImageProps{
    imagen?: string;
    className?: string;
    style?: React.CSSProperties;
}
export interface ProductButtonProps{ 
    className?: string;
    style?: React.CSSProperties;
}
export interface ProductCardprops {
    children?: React.ReactElement |React.ReactElement[];
    className?: string;
    product: product;

    style?: React.CSSProperties;
    
}

export interface ProductContextProps {
    counter: number;
    incrementarButton: (value: number) => void;
    product: product;

}

export interface ProductCadMainProps{
    ({ children, product }: ProductCardprops): JSX.Element,
    Buttons: (props: ProductButtonProps) => JSX.Element
    Imagen: (props: ProductImageProps) => JSX.Element,
    Title: (props: ProductTitleProps) => JSX.Element,
}


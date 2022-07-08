import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/';

const producto = {
    id: '1',
    titulo: 'Coffee mag',
    img: '../../../images/coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <ProductCard product={producto} >
                    <ProductImage />
                    <ProductTitle titulo='Titulo set' />
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={producto} >
                    <ProductCard.Imagen />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>

        </div>
    )
}

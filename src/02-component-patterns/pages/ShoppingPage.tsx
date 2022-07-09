import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/';
import '../styles/custom_styles.css';
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
                <ProductCard product={producto} className='bg_dark text-white' >
                    <ProductImage className='custom-image' />
                    <ProductTitle titulo='Titulo set' className='text-bold' />
                    <ProductButtons className='custom-button' />
                </ProductCard>

                <ProductCard product={producto} className='bg_dark text-white' >
                    <ProductCard.Imagen
                        className='custom-image'
                        style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                    <ProductCard.Title className='text-bold' />
                    <ProductCard.Buttons className='custom-button' style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }} />
                </ProductCard>
            </div>

        </div>
    )
}

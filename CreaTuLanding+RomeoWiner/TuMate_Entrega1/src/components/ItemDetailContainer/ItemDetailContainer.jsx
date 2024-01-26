import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from '../../util/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState()
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(product => {
            // setProduct(product)
            console.log(product);
            })
            .catch( error => {
                console.log(error);
            } )
    }, [productId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
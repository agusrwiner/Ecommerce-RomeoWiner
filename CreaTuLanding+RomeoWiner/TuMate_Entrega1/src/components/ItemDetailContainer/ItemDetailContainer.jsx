import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from '../../util/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
import './ItemDetailContainer.css'

const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState()
    const [loading, setloading] = useState(true);
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(product => {
            setProduct(product)
            setloading(false);
            })
            .catch( error => {
                console.log(error);
            } )
    }, [productId])

    return loading ? (
        <Spinner />
    ) : (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
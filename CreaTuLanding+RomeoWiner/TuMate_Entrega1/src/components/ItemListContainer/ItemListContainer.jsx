import { useEffect, useState } from "react"
import './ItemListContainer.css'
import { getProductById, getProducts } from "../../util/asyncMock";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then( (products) => {
            setProducts(products)
            console.log('Data: ', products);
        } )
    }, [])

    getProductById(3).then( product => {
        console.log( `Single Product:` );
        console.log(product);
    } )

    return (
        <div className='itemListContainer'>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
import { useEffect, useState } from "react"
import './ItemListContainer.css'
import { getProducts } from "../../util/asyncMock";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ message }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className='itemListContainer'>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
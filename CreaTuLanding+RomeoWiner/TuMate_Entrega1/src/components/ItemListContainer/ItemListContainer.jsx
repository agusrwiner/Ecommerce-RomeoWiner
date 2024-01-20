import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock";
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
        // <div>
        //     <h1>{message}</h1>
        //     <ItemList products={products} />
        // </div>
        <ItemList products={products} />
    )
}

export default ItemListContainer
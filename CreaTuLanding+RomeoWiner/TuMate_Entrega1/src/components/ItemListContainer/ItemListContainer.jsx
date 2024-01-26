import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import { getProductById, getProducts } from "../../util/asyncMock";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    console.log(categoryId);

    useEffect(() => {
        getProducts().then( (products) => {
            if (categoryId) {
                const filteredProducts = products.filter(
                    (product) => product.category === categoryId
                )
                setProducts(filteredProducts)
            }else{
                setProducts(products)
            }
        })
    }, [categoryId])

    getProductById(3).then( product => {
        // console.log( `Single Product:` );
        // console.log(product);
    } )

    return (
        <div className='itemListContainer'>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './ItemListContainer.css'
import { getProductById, getProducts } from "../../util/asyncMock";
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

import { importProdcuts } from "../../util/products";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const productsCollection = collection( db,'products' )

        //if category get filtered products
        if (categoryId) {
            const queryCollection = query( 
                productsCollection, where( 'category','==',categoryId ) 
            )
            getDocs(queryCollection).then( ( {docs} ) => {
                const products = docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }))

                setProducts(products);
                setloading(false);
            } )
        } else { //if NO category get all products WITHOUT filter
            getDocs(productsCollection).then( ( {docs} ) => {
                const products = docs.map( doc => ({
                    id: doc.id,
                    ...doc.data(),
                }) )

                setProducts(products);
                setloading(false);
            })
        }
        
        // getProducts().then( (products) => {
        //     if (categoryId) {
        //         const filteredProducts = products.filter(
        //             (product) => product.category === categoryId
        //         )
        //         setProducts(filteredProducts)
        //         setloading(false);
        //     }else{
        //         setProducts(products);
        //         setloading(false);
        //     }
        // })
    }, [categoryId])

    return loading ? (
        <Spinner/>
    ) : (
        <div className='itemListContainer'>
            <button onClick={importProdcuts}>IMPORT DATA</button>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
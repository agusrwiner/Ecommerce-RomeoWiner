import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
import './ItemDetailContainer.css'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState()
    const [loading, setloading] = useState(true);
    const { productId } = useParams()

    useEffect(() => {
        const docRef = doc(db, "products", productId);

        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    setProduct( { id: docSnap.id, ...docSnap.data() } );
                } else {
                    console.log("No existe el documento con ese ID!");
                }
                setloading(false);
            })
            .catch((error) => {
                console.error("Error: ", error);
            });

        setloading(false);
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
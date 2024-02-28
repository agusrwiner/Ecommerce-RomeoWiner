import { useState } from "react"
import { useParams } from "react-router-dom";

const Checkout = ( () => {
    const { orderId } = useParams();

    return(
        <h1 className="notFound">Oreden realizada con exito! Numero de orden: {orderId}</h1>
    )
} )

export default Checkout
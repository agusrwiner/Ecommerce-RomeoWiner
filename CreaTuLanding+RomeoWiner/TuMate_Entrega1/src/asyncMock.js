const products = [
    {
        id: '1',
        name: "Iphone 13",
        price: 1000,
        category: 'celular',
        img: '',
        stock: 23,
        description: 'Description Iphone 13'
    },
    {
        id: '2',
        name: "Samsung S22",
        price: 6584,
        category: 'celular',
        img: '',
        stock: 3,
        description: 'Description Samsung S22'
    },
    {
        id: '3',
        name: "Tablet Samsung S9",
        price: 3257,
        category: 'tablet',
        img: '',
        stock: 63,
        description: 'Description Tablet Samsung S9'
    }
]

export const getProducts = () => {
    return new Promise( (resolve) =>{
        setTimeout( () => {
            resolve(products)
        }, 500 )
    } )
}
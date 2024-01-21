const products = [
    {
        id: '1',
        name: "Iphone 13",
        price: 1000,
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
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
        id: '12',
        name: "Tablet Samsung S9",
        price: 3257,
        category: 'tablet',
        img: '',
        stock: 63,
        description: 'Description Tablet Samsung S9'
    },
    {
        id: '3',
        name: "Tablet Samsung S9",
        price: 3257,
        category: 'tablet',
        img: '',
        stock: 63,
        description: 'Description Tablet Samsung S9'
    },
    {
        id: '4',
        name: "Samsung S9",
        price: 3257,
        category: 'tablet',
        img: '',
        stock: 63,
        description: 'Description Tablet Samsung S9'
    },
    {
        id: '5',
        name: "Samsung S9",
        price: 3257,
        category: 'tablet',
        img: '',
        stock: 63,
        description: 'Description Tablet Samsung S9'
    },
    {
        id: '6',
        name: "Tablet Samsung S9",
        price: 3257,
        category: 'tablet',
        img: '',
        stock: 63,
        description: 'Description Tablet Samsung S9'
    },
    {
        id: '7',
        name: "Samsung S9",
        price: 3257,
        category: 'tablet',
        img: '',
        stock: 63,
        description: 'Description Tablet Samsung S9'
    },
    {
        id: '8',
        name: "Samsung S9",
        price: 3257,
        category: 'tablet',
        img: '',
        stock: 63,
        description: 'Description Tablet Samsung S9'
    },
    {
        id: '9',
        name: "Samsung S9",
        price: 3257,
        category: 'tablet',
        img: '',
        stock: 63,
        description: 'Description Tablet Samsung S9'
    }
    , {
        id: '10',
        name: "Samsung S9",
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
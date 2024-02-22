const products = [
    {
        "title": "Mate Imperial Premium Calabaza Costuras Uruguayas Cincelado",
        "description": "turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor",
        "category": "mate",
        "image": "http://dummyimage.com/137x100.png/dddddd/000000",
        "price": 29843.7,
        "stock": 47
    },
    {
        "title": "Mate Imperial Acero Inox Anti Hongos No curado",
        "description": "blandit nam nulla",
        "category": "bombilla",
        "image": "http://dummyimage.com/168x100.png/ff4444/ffffff",
        "price": 11534,
        "stock": 5
    },
    {
        "title": "Mate Camionero Premium Calabaza",
        "description": "Lorem in imperdiet et commodo vulputate justo in",
        "category": "mate",
        "image": "http://dummyimage.com/158x100.png/dddddd/000000",
        "price": 11814.37,
        "stock": 25
    },
    {
        "title": "Mate Torpedo Premium Mediano",
        "description": "Lorem nec dui luctus rutrum nulla tellus in sagittis dui",
        "category": "mate",
        "image": "http://dummyimage.com/128x100.png/ff4444/ffffff",
        "price": 6465.07,
        "stock": 10
    },
    {
        "title": "Mate Imperial Premium Virola Lisa",
        "description": "Lorem tortor id nulla ultrices aliquet",
        "category": "mate",
        "image": "http://dummyimage.com/197x100.png/cc0000/ffffff",
        "price": 23631.28,
        "stock": 43
    },
    {
        "title": "Termo Lumilagro XL 1.5L",
        "description": "Lorem fermentum justo nec condimentum neque",
        "category": "termo",
        "image": "http://dummyimage.com/239x100.png/dddddd/000000",
        "price": 4949,
        "stock": 59
    },
    {
        "title": "Mate Torpedo Deluxe Acero",
        "description": "Lorem in faucibus orci luctus et ultrices posuere",
        "category": "mate",
        "image": "http://dummyimage.com/166x100.png/dddddd/000000",
        "price": 28660.27,
        "stock": 3
    },
    {
        "title": "Mate Torpedo Calabaza",
        "description": "Lorem auctor gravida sem praesent id massa id nisl",
        "category": "mate",
        "image": "http://dummyimage.com/224x100.png/ff4444/ffffff",
        "price": 9321.21,
        "stock": 86
    },
    {
        "title": "Mate Ceramica personalizado",
        "description": "Lorem sed accumsan felis ut at dolor quis odio consequat varius",
        "category": "mate",
        "image": "http://dummyimage.com/153x100.png/cc0000/ffffff",
        "price": 16405.35,
        "stock": 74
    },
    {
        "title": "Mate Vidrio Mediano",
        "description": "Lorem vestibulum vulputate ut ultrices",
        "category": "mate",
        "image": "http://dummyimage.com/119x100.png/dddddd/000000",
        "price": 19931.54,
        "stock": 84
    },
    {
        "title": "Mate Ceramica Argentina",
        "description": "Lorem imperdiet sapien urna pretium nisl ut volutpat sapien arcu",
        "category": "mate",
        "image": "http://dummyimage.com/169x100.png/5fa2dd/ffffff",
        "price": 31210,
        "stock": 14
    },
    {
        "title": "Mate Camionero 3 Letras Acero Grabadas",
        "description": "Lorem at vulputate vitae nisl",
        "category": "mate",
        "image": "http://dummyimage.com/154x100.png/ff4444/ffffff",
        "price": 10585.29,
        "stock": 40
    },
    {
        "title": "Mate Madera Grabado Boca Jrs",
        "description": "Lorem a in",
        "category": "mate",
        "image": "http://dummyimage.com/198x100.png/5fa2dd/ffffff",
        "price": 29324.76,
        "stock": 0
    },
    {
        "title": "Mate Tacilla Peque�o",
        "description": "Loremet commodo vulputate justo in blandit ultrices enim",
        "category": "mate",
        "image": "http://dummyimage.com/195x100.png/cc0000/ffffff",
        "price": 15875.42,
        "stock": 67
    },
    {
        "title": "Bombilla Pico De Loro Acero",
        "description": "Lorem duis aliquam convallis",
        "category": "bombilla",
        "image": "http://dummyimage.com/177x100.png/dddddd/000000",
        "price": 17152.7,
        "stock": 83
    },
    {
        "title": "Bombilla Pico De Loro Alpaca",
        "description": "Lorem odio elementum eu interdum eu tincidunt in leo",
        "category": "bombilla",
        "image": "http://dummyimage.com/205x100.png/cc0000/ffffff",
        "price": 21855.85,
        "stock": 22
    },
    {
        "title": "Bombilla XXL Pico De Loro Alpaca",
        "description": "Loremnon sodales sed tincidunt eu felis fusce posuere felis sed",
        "category": "bombilla",
        "image": "http://dummyimage.com/196x100.png/5fa2dd/ffffff",
        "price": 5793.94,
        "stock": 52
    },
    {
        "title": "Bombilla Pico De Loro 10cm (corta) Alpaca",
        "description": "Lorem sem duis aliquam convallis nunc proin",
        "category": "bombilla",
        "image": "http://dummyimage.com/233x100.png/dddddd/000000",
        "price": 3795.31,
        "stock": 25
    },
    {
        "title": "Bombilla Recta Alpaca",
        "description": "Lorem volutpat eleifend donec ut dolor morbi vel lectus in quam",
        "category": "bombilla",
        "image": "http://dummyimage.com/154x100.png/cc0000/ffffff",
        "price": 5190.51,
        "stock": 85
    },
    {
        "title": "Bombilla Pico De Loro Personalizada",
        "description": "Lorem quisque porta volutpat erat",
        "category": "bombilla",
        "image": "http://dummyimage.com/236x100.png/dddddd/000000",
        "price": 23319.43,
        "stock": 81
    },
    {
        "title": "Termo Stanley 1L",
        "description": "Lorem vivamus tortor duis mattis egestas",
        "category": "termo",
        "image": "http://dummyimage.com/141x100.png/ff4444/ffffff",
        "price": 28117,
        "stock": 7
    },
    {
        "title": "Termo Stanley 1.5L",
        "description": "Lorem morbi porttitor lorem id ligula suspendisse ornare",
        "category": "termo",
        "image": "http://dummyimage.com/236x100.png/ff4444/ffffff",
        "price": 25090.59,
        "stock": 39
    },
    {
        "title": "Termo Stanley 750 ml",
        "description": "Lorem lectus aliquam",
        "category": "termo",
        "image": "http://dummyimage.com/150x100.png/ff4444/ffffff",
        "price": 16921.94,
        "stock": 99
    },
    {
        "title": "Termo Media Manija Pico Cebador",
        "description": "Lorem in sagittis dui vel nisl",
        "category": "termo",
        "image": "http://dummyimage.com/239x100.png/5fa2dd/ffffff",
        "price": 28603.48,
        "stock": 0
    },
    {
        "title": "Termo Personalizado Media Manija Pico Cebador",
        "description": "Lorem mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum",
        "category": "termo",
        "image": "http://dummyimage.com/184x100.png/dddddd/000000",
        "price": 5263.47,
        "stock": 24
    },
    {
        "title": "Termo Personalizado Grabado Acero 1L",
        "description": "Lorem non mattis pulvinar nulla pede ullamcorper augue a",
        "category": "termo",
        "image": "http://dummyimage.com/193x100.png/5fa2dd/ffffff",
        "price": 29355.6,
        "stock": 64
    },
    {
        "title": "Termo Lumilagro Negro 1L",
        "description": "Lorem nulla suspendisse potenti cras in purus",
        "category": "termo",
        "image": "http://dummyimage.com/222x100.png/cc0000/ffffff",
        "price": 18773.37,
        "stock": 90
    },
    {
        "title": "Termo XXL 2L Terere",
        "description": "Lorem posuere felis sed lacus morbi sem mauris",
        "category": "termo",
        "image": "http://dummyimage.com/242x100.png/cc0000/ffffff",
        "price": 11427,
        "stock": 27
    },
    {
        "title": "Mate Metalico Terere",
        "description": "Lorem id mauris vulputate elementum nullam varius nulla",
        "category": "mate",
        "image": "http://dummyimage.com/188x100.png/ff4444/ffffff",
        "price": 16908.92,
        "stock": 72
    },
    {
        "title": "Termo Stanley Manija Verde",
        "description": "Lorem erat volutpat in congue etiam justo etiam",
        "category": "termo",
        "image": "http://dummyimage.com/242x100.png/ff4444/ffffff",
        "price": 3849.12,
        "stock": 50
    }
]
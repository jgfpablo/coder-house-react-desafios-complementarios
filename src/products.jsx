const products = new Promise((resolve) => {
    resolve([
        {
            id: 0,
            nombre: "Macchiato Bombom",
            precio: 240,
            cantidad: 13,
            categoria: "Bebidas Calientes",
            imagen: "../assets/img/productos/bebidas_calientes/Macchiato-Bombóm.png",
            descripcion:
                "Una exquisita base de leche condensada, rico café espresso, espuma de leche, canela y cacao. ¡Lo mejor para endulzar tu día!",
        },
        {
            id: 1,
            nombre: "Cappuccino Moka",
            precio: 240,
            cantidad: 12,
            categoria: "Bebidas Calientes",
            imagen: "../assets/img/productos/bebidas_calientes/Cappuccino-Moka.png",
            descripcion:
                "Una exquisita base de leche condensada, rico café espresso, espuma de leche, canela y cacao. ¡Lo mejor para endulzar tu día!",
        },
        {
            id: 2,
            nombre: "Cappuccino",
            precio: 220,
            cantidad: 1,
            categoria: "Bebidas Calientes",
            imagen: "../assets/img/productos/bebidas_calientes/Cappuccino.png",
            descripcion:
                "Una exquisita base de leche condensada, rico café espresso, espuma de leche, canela y cacao. ¡Lo mejor para endulzar tu día!",
        },
        {
            id: 3,
            nombre: "Cappuccino Tentación",
            precio: 250,
            cantidad: 7,
            categoria: "Bebidas Calientes",
            imagen: "../assets/img/productos/bebidas_calientes/Capuccino-Tentación.png",
            descripcion:
                "Una exquisita base de leche condensada, rico café espresso, espuma de leche, canela y cacao. ¡Lo mejor para endulzar tu día!",
        },
        {
            id: 4,
            nombre: "Cappuccino Bombóm",
            precio: 230,
            cantidad: 9,
            categoria: "Bebidas Calientes",
            imagen: "../assets/img/productos/bebidas_calientes/Cappuccino-Bombóm.png",
            descripcion:
                "Una exquisita base de leche condensada, rico café espresso, espuma de leche, canela y cacao. ¡Lo mejor para endulzar tu día!",
        },
        {
            id: 5,
            nombre: "Macchiato",
            precio: 220,
            cantidad: 0,
            categoria: "Bebidas Calientes",
            imagen: "../assets/img/productos/bebidas_calientes/Macchiato.png",
            descripcion:
                "Una exquisita base de leche condensada, rico café espresso, espuma de leche, canela y cacao. ¡Lo mejor para endulzar tu día!",
        },
        {
            id: 6,
            nombre: "Té de Frambuesa",
            precio: 150,
            cantidad: 7,
            categoria: "Bebidas Frias",
            imagen: "../assets/img/productos/bebidas_frias/te-frambuesa.png",
            descripcion:
                "Una exquisita base de leche condensada, rico café espresso, espuma de leche, canela y cacao. ¡Lo mejor para endulzar tu día!",
        },
        {
            id: 7,
            nombre: "Té de Limon",
            precio: 120,
            cantidad: 3,
            categoria: "Bebidas Frias",
            imagen: "../assets/img/productos/bebidas_frias/te-limon.png",
            descripcion:
                "Una exquisita base de leche condensada, rico café espresso, espuma de leche, canela y cacao. ¡Lo mejor para endulzar tu día!",
        },
        {
            id: 8,
            nombre: "Té de Naranja",
            precio: 140,
            cantidad: 2,
            categoria: "Bebidas Frias",
            imagen: "../assets/img/productos/bebidas_frias/te-naranja.png",
            descripcion:
                "Una exquisita base de leche condensada, rico café espresso, espuma de leche, canela y cacao. ¡Lo mejor para endulzar tu día!",
        },
        {
            id: 9,
            nombre: "Tostado Napolitano",
            precio: 200,
            cantidad: 5,
            categoria: "Salados",
            imagen: "../assets/img/productos/salados/Tostado-4-quesos.png",
            descripcion:
                "Una exquisita base de leche condensada, rico café espresso, espuma de leche, canela y cacao. ¡Lo mejor para endulzar tu día!",
        },
        {
            id: 10,
            nombre: "Tostado Mixto",
            precio: 250,
            cantidad: 6,
            categoria: "Salados",
            imagen: "../assets/img/productos/salados/Tostado-mixto.png",
            descripcion:
                "Una exquisita base de leche condensada, rico café espresso, espuma de leche, canela y cacao. ¡Lo mejor para endulzar tu día!",
        },
        {
            id: 11,
            nombre: "Tostado 4 Quesos",
            precio: 230,
            cantidad: 3,
            categoria: "Salados",
            imagen: "../assets/img/productos/salados/Tostado-napolitano.png",
            descripcion:
                "Una exquisita base de leche condensada, rico café espresso, espuma de leche, canela y cacao. ¡Lo mejor para endulzar tu día!",
        },
        {
            id: 12,
            nombre: "Flan",
            precio: 170,
            cantidad: 2,
            categoria: "Postres",
            imagen: "../assets/img/productos/dulces/flan_casero.png",
            descripcion:
                "Una exquisita base de leche condensada, rico café espresso, espuma de leche, canela y cacao. ¡Lo mejor para endulzar tu día!",
        },
        {
            id: 13,
            nombre: "Pay de Queso",
            precio: 250,
            cantidad: 1,
            categoria: "Postres",
            imagen: "../assets/img/productos/dulces/pay_de_queso.png",
            descripcion:
                "Una exquisita base de leche condensada, rico café espresso, espuma de leche, canela y cacao. ¡Lo mejor para endulzar tu día!",
        },
    ]);
});

export default products;

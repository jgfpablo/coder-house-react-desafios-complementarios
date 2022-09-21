const category = new Promise((resolve) => {
    resolve([
        {
            id: 0,
            categoria: "Bebidas-Calientes",
        },

        {
            id: 1,
            categoria: "Bebidas-Frias",
        },

        {
            id: 2,
            categoria: "Salados",
        },
        {
            id: 3,
            categoria: "Postres",
        },
    ]);
});

export default category;

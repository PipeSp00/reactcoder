const products = [
    {
      nombre: "Tenis Ultrabux",
      stock: 5,
      precio: 4200,
      img:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
      id: 0,
      categoria: "hombre",
    },
    {
      nombre: "Tenis Ultrabux2",
      stock: 5,
      precio: 4200,
      img:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
      id: 1,
      categoria: "hombre",
    },
    {
      nombre: "Tenis Ultrabux2",
      stock: 5,
      precio: 4200,
      img:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
      id: 1,
      categoria: "hombre",
    },
    {
      nombre: "Tenis Ultrabux2",
      stock: 5,
      precio: 4200,
      img:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c60b90c34e0f413f916caa4300d3589f_9366/tenis-galaxy-4.jpg",
      id: 1,
      categoria: "hombre",
    },
    {
      nombre: "Tesla",
      stock: 5,
      precio: 420000000,
      img:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/75f66b5e751845b9ae07adfb016ee64f_9366/tenis-adidas-adidas-court-bold.jpg",
      id: 2,
      categoria: "mujer",
    },
    {
      nombre: "Mercedes",
      stock: 5,
      precio: 9999,
      img:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c387bb1a0e64883a419aed30125bbb2_9366/forum-bold-w.jpg",
      id: 3,
      categoria: "mujer",
    },
  
    {
      nombre: "Tesla",
      stock: 5,
      precio: 420000000,
      img:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cdd312f9b9641599d49ae3000cd5087_9366/tenis-adidas-grand-court-lifestyle-para-tenis-con-cordones.jpg",
      id: 4,
      categoria: "infantil",
    },
    {
      nombre: "Mercedes",
      stock: 5,
      precio: 9999,
      img:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cdd312f9b9641599d49ae3000cd5087_9366/tenis-adidas-grand-court-lifestyle-para-tenis-con-cordones.jpg",
      id: 5,
      categoria: "infantil",
    },
  ];

  export const getProducts = () =>
  new Promise((res, rej) => {
    const response = products;
    setTimeout(() => {
      res(response);
    }, 3000);
  });

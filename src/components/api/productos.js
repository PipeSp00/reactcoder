const products = [
  {
    nombre: "Smart Lamp Wiz",
    tag: "10 colores",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consequuntur, necessitatibus sit dolore accusantium in esse aliquid optio obcaecati iure animi quae quis perferendis odio ad recusandae numquam tenetur cum!",
    precio: 1900,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_688931-MLA51630763852_092022-F.webp",
    id: 0,
    categoria: "luz",
    stock: 10,
  },
  {
    nombre: "Lamp Philips Hue",
    tag: "10 colores",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil ipsum perferendis, obcaecati facere quisquam id facilis reprehenderit? Fugiat, quae autem eum omnis tenetur qui maiores vero et consectetur maxime",
    precio: 3200,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_966615-MLA50018849581_052022-O.webp",
    id: 1,
    categoria: "luz",
    stock: 10,
  },
  {
    nombre: "Philips Lightstrips",
    tag: "10 colores",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus sapiente voluptates totam nostrum veritatis libero consequatur rerum. Est error vitae repudiandae perferendis earum dolor quis, maiores esse dignissimos inventore.",
    precio: 4100,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_902739-MLA48992752179_022022-O.webp",
    id: 2,
    categoria: "luz",
    stock: 10,
  },
 

  {
    nombre: "Google Home",
    tag: "10 colores",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus sapiente voluptates totam nostrum veritatis libero consequatur rerum. Est error vitae repudiandae perferendis earum dolor quis, maiores esse dignissimos inventore.",
    precio: 14100,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_747055-MLA51559102373_092022-O.webp",
    id: 3,
    categoria: "domotica",
    stock: 10,
  },
  {
    nombre: "Alexa",
    tag: "10 colores",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus sapiente voluptates totam nostrum veritatis libero consequatur rerum. Est error vitae repudiandae perferendis earum dolor quis, maiores esse dignissimos inventore.",
    precio: 16300,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_942285-MLA45737671908_042021-O.webp",
    id: 4,
    categoria: "domotica",
    stock: 10,
  },
  {
    nombre: "HomePod",
    tag: "10 colores",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus sapiente voluptates totam nostrum veritatis libero consequatur rerum. Est error vitae repudiandae perferendis earum dolor quis, maiores esse dignissimos inventore.",
    precio: 19100,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp",
    id: 5,
    categoria: "domotica",
    stock: 10,
  },
  {
    nombre: "Parlantes Nisuta",
    tag: "10 colores",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus sapiente voluptates totam nostrum veritatis libero consequatur rerum. Est error vitae repudiandae perferendis earum dolor quis, maiores esse dignissimos inventore.",
    precio: 9200,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_950597-MLA52221263921_102022-O.webp",
    id: 6,
    categoria: "audio",
    stock: 10,
  },
  {
    nombre: "Barra Genius",
    tag: "10 colores",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus sapiente voluptates totam nostrum veritatis libero consequatur rerum. Est error vitae repudiandae perferendis earum dolor quis, maiores esse dignissimos inventore.",
    precio: 3900,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_929751-MLA48062554439_102021-O.webp",
    id: 7,
    categoria: "audio",
    stock: 10,
  },
  {
    nombre: "Parlantes HP",
    tag: "10 colores",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus sapiente voluptates totam nostrum veritatis libero consequatur rerum. Est error vitae repudiandae perferendis earum dolor quis, maiores esse dignissimos inventore.",
    precio: 6500,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_923943-MLA45738471521_042021-O.webp",
    id: 8,
    categoria: "audio",
    stock: 10,
  },

  {
    nombre: "Elevador de monitor",
    tag: "10 colores",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus sapiente voluptates totam nostrum veritatis libero consequatur rerum. Est error vitae repudiandae perferendis earum dolor quis, maiores esse dignissimos inventore.",
    precio: 7400,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_627711-MLA48139685973_112021-O.webp",
    id: 9,
    categoria: "desk",
    stock: 10,
    
  },
  {
    nombre: "Soportes monitor aritculado",
    tag: "10 colores",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus sapiente voluptates totam nostrum veritatis libero consequatur rerum. Est error vitae repudiandae perferendis earum dolor quis, maiores esse dignissimos inventore.",
    precio: 10250,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_799681-MLA48534844047_122021-O.webp",
    id: 10,
    categoria: "desk",
    stock: 10,
  },
  {
    nombre: "Soporte Monitor Doble",
    tag: "10 colores",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum accusamus sapiente voluptates totam nostrum veritatis libero consequatur rerum. Est error vitae repudiandae perferendis earum dolor quis, maiores esse dignissimos inventore.",
    precio: 13210,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_739317-MLA44041915846_112020-O.webp",
    id: 11,
    categoria: "desk",
    stock: 10,
  },
  
 
];

export const getProducts = (categoria) =>
  new Promise((res, rej) => {
    const response = categoria
      ? products.filter((p) => p.categoria === categoria)
      : products;
    setTimeout(() => {
      res(response);
    }, 0);
  });

  export const getInfo = (productoId) =>
  new Promise((res, rej) => {
    const response = productoId
      ? products.find((p) => p.id === +productoId)
      : products;
    setTimeout(() => {
      res(response);
    }, 0);
  });
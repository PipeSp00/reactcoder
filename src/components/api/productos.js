const products = [
  {
    nombre: "Smart Lamp Wiz",
    tag: "10 colores",
    descripcion: "La lámpara Full Color WiZ LED A60 brinda iluminación inteligente para tu vida diaria. Se adapta a cualquier luminaria para crear el ambiente que desees con 16 millones de colores y luz blanca cálida a fría. Puedes establecer un horario para encender y apagar las luces de acuerdo con las rutinas diarias o semanales, controlar con tu teléfono inteligente o tu voz y tener acceso remoto a tus luces incluso cuando no estés. Las luces WiZ se conectan a tu Wi-Fi existente, no se necesita ningún hardware adicional. ",
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
    descripcion: "Philips Hue es el sistema de iluminación inalámbrico personal que te permite controlar la iluminación de tu hogar a través de nuestra aplicación en tu dispositivo móvil y así crear el ambiente ideal para cada momento. Hue es la combinación de iluminación LED con alta eficiencia energética y una tecnología inteligente. Las posibilidades para convertir la iluminación de todos los días en una experiencia extraordinaria son ilimitadas. Philips Hue hace que tu vida sea más práctica, fácil y tranquila",
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
    descripcion: "Luz brillante para ambiente de luz y funcionalidad, Con cobertura de luz en toda su longitud y una potente salida de 1600 lúmenes, la tira de Philips Hue proporciona suficiente luz para usarse como fuente de luz tanto decorativa como funcional",
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
    descripcion: "Compacto y poderoso, el Home Mini es el parlante más popular de Google. Te permitirá no solo reproducir música y realizar llamadas, sino también controlar los dispositivos smart de tu casa mediante la voz. Además, vas a poder conectarlo a tu TV con Chromecast para pedirle que reproduzca videos de YouTube, series y películas.",
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
    descripcion: "Alexa te acompaña, La ventaja de este asistente virtual es que tiene mejor integración con todos los servicios y dispositivos de Amazon. ¿Necesitás ayuda con tus tareas diarias? Alexa organizará tu rutina, te brindará noticias, comprobará el estado del clima y mucho más.",
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
    descripcion: "El HomePod mini fue hecho para grandes cosas. Tiene una calidad de sonido sorprendente para su tamaño. Coloca varios parlantes en distintos lugares de tu casa para crear un sistema de sonido conectado. Siri es tu asistente perfecto que te ayuda con las tareas del día a día y a controlar tu casa inteligente de forma privada y segura(1). Y por si fuera poco, el HomePod mini funciona a la perfección con tu iPhone.",
    precio: 53100,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp",
    id: 5,
    categoria: "domotica",
    stock: 10,
  },
  {
    nombre: "Parlantes Nisuta",
    tag: "10 colores",
    descripcion: "Nisuta NSPAU10B ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.",
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
    descripcion: "Genius SOUNDBAR 100 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.",
    precio: 3900,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_929751-MLA48062554439_102021-O.webp",
    id: 7,
    categoria: "audio",
    stock: 10,
  },
  {
    nombre: "Parlantes HP DHS",
    tag: "10 colores",
    descripcion: "HP DHS-2101 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.",
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
    descripcion: "Soporte elevador de monitor, permite colocar las pantallas a una altura acorde para la vista cuidando asi la postura durante largas horas de trabajo",
    precio: 3400,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_627711-MLA48139685973_112021-O.webp",
    id: 9,
    categoria: "desk",
    stock: 10,
    
  },
  {
    nombre: "Soporte aritculado",
    tag: "10 colores",
    descripcion: "Permite obtener el ángulo perfecto con este soporte inclinable y articulado. Vas a poder ajustarlo a la posición más confortable para ver tus contenidos preferidos y ganar espacio.",
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
    descripcion: "La ubicación de tu TV o monitor es de suma importancia ya que, frente a él, compartirás muchas horas de entretenimiento o trabajo. En tu casa o negocio, aprovechá al máximo el espacio con un soporte que te brinde comodidad. ¡Nada mejor que tenerlo a tu alcance",
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
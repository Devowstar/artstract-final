
const artistas = [
    {
       id:1,
       nombre:"Pablo Picasso",
       nacimiento:1881,
       muerte:1973,
       nacionalidad:"Española",
       puntuacion:9.8,
       categoria:"Cubismo",
       obras:[
          "Guernica",
          "Las Señoritas de Avignon"
       ],
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/800px-Pablo_picasso_1.jpg",
       liked: false
    },
    {
       id:2,
       nombre:"Vincent van Gogh",
       nacimiento:1853,
       muerte:1890,
       nacionalidad:"Neerlandesa",
       puntuacion:9.7,
       categoria:"Postimpresionismo",
       obras:[
          "La noche estrellada",
          "Los Girasoles"
       ],
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1200px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
       liked: false
    },
    {
       id:3,
       nombre:"Frida Kahlo",
       nacimiento:1907,
       muerte:1954,
       nacionalidad:"Mexicana",
       puntuacion:9.6,
       categoria:"Surrealismo",
       obras:[
          "Las dos Fridas",
          "La columna rota"
       ],
       image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
       liked: false
    },
    {
       id:4,
       nombre:"Claude Monet",
       nacimiento:1840,
       muerte:1926,
       nacionalidad:"Francesa",
       puntuacion:9.5,
       categoria:"Impresionismo",
       obras:[
          "Impresión, sol naciente",
          "Nenúfares"
       ],
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/640px-Claude_Monet_1899_Nadar_crop.jpg",
       liked: false
    },
    {
     id: 5,
     nombre: "Leonardo da Vinci",
     nacimiento: 1452,
     muerte: 1519,
     nacionalidad: "Italiana",
     puntuacion: 9.4,
     categoria: "Renacimiento",
     obras: ["La Última Cena", "La Mona Lisa"],
     image: "https://static.nationalgeographic.es/files/styles/image_3200/public/01-leonardo-da-vinci-book-talk.jpg?w=1900&h=2279",
     liked: false
 },
 {
     id: 6,
     nombre: "Salvador Dalí",
     nacimiento: 1904,
     muerte: 1989,
     nacionalidad: "Española",
     puntuacion: 9.3,
     categoria: "Surrealismo",
     obras: ["La persistencia de la memoria", "Cisnes que se reflejan como elefantes"],
     image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Salvador_Dal%C3%AD_1939.jpg",
     liked: false
 },

    {
       id:7,
       nombre:"Rembrandt",
       nacimiento:1606,
       muerte:1669,
       nacionalidad:"Neerlandesa",
       puntuacion:9.2,
       categoria:"Barroco",
       obras:[
          "La ronda de noche",
          "El regreso del hijo pródigo"
       ],
       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/220px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
       liked: false
    },
    {
       id:8,
       nombre:"Georgia O'Keeffe",
       nacimiento:1887,
       muerte:1986,
       nacionalidad:"Estadounidense",
       puntuacion:9.1,
       categoria:"Modernismo",
       obras:[
          "Jimson Weed",
          "Black Iris"
       ],
       image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Georgia_O%27Keeffe_UVa.jpg",
       liked: false
    },
    {
       id:9,
       nombre:"Jackson Pollock",
       nacimiento:1912,
       muerte:1956,
       nacionalidad:"Estadounidense",
       puntuacion:9.0,
       categoria:"Expresionismo Abstracto",
       obras:[
          "No. 5, 1948",
          "Convergence"
       ],
       image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Jackson_Pollock%27s_passport_%28cropped_2%29.jpg",
       liked: false
    },
    {
     id: 10,
     nombre: "Andy Warhol",
     nacimiento: 1928,
     muerte: 1987,
     nacionalidad: "Estadounidense",
     puntuacion: 8.9,
     categoria: "Arte Pop",
     obras: [
         "Marilyn Diptych",
         "Latas de sopa Campbell"
     ],
     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Andy_Warhol_at_the_Jewish_Museum_%28by_Bernard_Gotfryd%29_%E2%80%93_LOC.jpg/800px-Andy_Warhol_at_the_Jewish_Museum_%28by_Bernard_Gotfryd%29_%E2%80%93_LOC.jpg",
     liked: false
 },
 {
     id: 11,
     nombre: "Edvard Munch",
     nacimiento: 1863,
     muerte: 1944,
     nacionalidad: "Noruego",
     puntuacion: 8.8,
     categoria: "Expresionismo",
     obras: [
         "El grito",
         "La Madonna"
     ],
     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Edvard_Munch_1921.jpg/220px-Edvard_Munch_1921.jpg",
     liked: false
 },
 {
     id: 12,
     nombre: "Henri Matisse",
     nacimiento: 1869,
     muerte: 1954,
     nacionalidad: "Francesa",
     puntuacion: 8.7,
     categoria: "Fauvismo",
     obras: [
         "La danza",
         "La mujer con la guitarra"
     ],
     image: "https://historia.nationalgeographic.com.es/medio/2020/10/29/captura-de-pantalla-2020-10-29-a-las-154404_7b96b0c7_550x674.png",
     liked: false
 },
 {
     id: 13,
     nombre: "Paul Cézanne",
     nacimiento: 1839,
     muerte: 1906,
     nacionalidad: "Francesa",
     puntuacion: 8.6,
     categoria: "Postimpresionismo",
     obras: [
         "Los jugadores de cartas",
         "La montaña Sainte-Victoire"
     ],
     image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Cezanne_-_Self-portrait_-_1879-80.jpg",
     liked: false
 },
 {
     id: 14,
     nombre: "Gustav Klimt",
     nacimiento: 1862,
     muerte: 1918,
     nacionalidad: "Austríaca",
     puntuacion: 8.5,
     categoria: "Simbolismo",
     obras: [
         "El beso",
         "El árbol de la vida"
     ],
     image: "https://historia.nationalgeographic.com.es/medio/2021/07/13/gustav-klimt-fotografia-tomada-en-1916_4f9a5fd0_550x705.jpg",
     liked: false
 },
     
     {
         id: 15,
         nombre: "Jean-Michel Basquiat",
         nacimiento: 1960,
         muerte: 1988,
         nacionalidad: "Estadounidense",
         puntuacion: 8.4,
         categoria: "Neoexpresionismo",
         obras: [
             "Untitled",
             "Hollywood Africans"
         ],
         image: "https://basquiatart.org/wp-content/uploads/2020/06/Basquiat-artista-de-Galeria-Portada.jpg",
         liked: false
     },
     {
         id: 16,
         nombre: "Yayoi Kusama",
         nacimiento: 1929,
         muerte: null,
         nacionalidad: "Japonesa",
         puntuacion: 8.3,
         categoria: "Arte contemporáneo",
         obras: [
             "Infinity Mirror Room",
             "Pumpkin"
         ],
         image: "https://media.hero-magazine.com/wp-content/uploads/2023/07/03112423/yk_photo_by_yusuke_miyazaki-aspect-ratio-1000-1250.jpg",
         liked: false
     },
     {
         id: 17,
         nombre: "Lucian Freud",
         nacimiento: 1922,
         muerte: 2011,
         nacionalidad: "Británico",
         puntuacion: 8.2,
         categoria: "Expresionismo",
         obras: [
             "Retrato de un hombre",
             "La mujer que llora"
         ],
         image: "https://www.larepublica.ec/wp-content/uploads/2011/07/freud.reflection.jpg",
         liked: false
     },
     {
         id: 18,
         nombre: "Alfredo García",
         nacimiento: 1985,
         muerte: null,
         nacionalidad: "Mexicana",
         puntuacion: 8.1,
         categoria: "Contemporáneo",
         obras: [
             "Visiones",
             "El despertar"
         ],
         image: "https://static.wixstatic.com/media/e54050_40d562dc301657619a2766ec6b3bc2cc.jpg/v1/fill/w_552,h_654,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e54050_40d562dc301657619a2766ec6b3bc2cc.jpg",
         liked: false
     },
     {
         id: 19,
         nombre: "Mark Rothko",
         nacimiento: 1903,
         muerte: 1970,
         nacionalidad: "Estadounidense",
         puntuacion: 8.0,
         categoria: "Expresionismo Abstracto",
         obras: [
             "Sin título",
             "Rostro de Rothko"
         ],
         image: "https://www.markrothko.org/images/Mark-Rothko.jpg?ezimgfmt=ngcb1/notWebP",
         liked: false
     },
     {
         id: 20,
         nombre: "Diego Rivera",
         nacimiento: 1886,
         muerte: 1957,
         nacionalidad: "Mexicana",
         puntuacion: 7.9,
         categoria: "Muralismo",
         obras: [
             "El hombre en el cruce de caminos",
             "La historia de México"
         ],
         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Diego_Rivera_-_Google_Art_Project_%28cropped%29.jpg/220px-Diego_Rivera_-_Google_Art_Project_%28cropped%29.jpg",
         liked: false
     },
     {
         id: 21,
         nombre: "Paul Gauguin",
         nacimiento: 1848,
         muerte: 1903,
         nacionalidad: "Francés",
         puntuacion: 7.8,
         categoria: "Postimpresionismo",
         obras: [
             "¿De dónde venimos? ¿Quiénes somos? ¿Adónde vamos?",
             "La visión del sermón"
         ],
         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Paul_Gauguin_111.jpg/1200px-Paul_Gauguin_111.jpg",
         liked: false
     },
     {
         id: 22,
         nombre: "Amedeo Modigliani",
         nacimiento: 1884,
         muerte: 1920,
         nacionalidad: "Italiano",
         puntuacion: 7.7,
         categoria: "Modernismo",
         obras: [
             "Retrato de Jeanne Hébuterne",
             "Chica con collar"
         ],
         image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Amedeo_Modigliani_Photo.jpg",
         liked: false
     },
     {
         id: 23,
         nombre: "Edgar Degas",
         nacimiento: 1834,
         muerte: 1917,
         nacionalidad: "Francesa",
         puntuacion: 7.6,
         categoria: "Impresionismo",
         obras: [
             "La clase de danza",
             "Bailarina en la sombra"
         ],
         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Edgar_Degas_self_portrait_1855FXD.jpg/220px-Edgar_Degas_self_portrait_1855FXD.jpg",
         liked: false
     },
     {
         id: 24,
         nombre: "Henri Rousseau",
         nacimiento: 1844,
         muerte: 1910,
         nacionalidad: "Francés",
         puntuacion: 7.5,
         categoria: "Naïf",
         obras: [
             "El sueño",
             "La guerra"
         ],
         image: "https://cdn.finestresullarte.info/rivista/immagini/2021/fn/ritratto-di-henri-rousseau.jpg",
         liked: false
     },
     {
         id: 25,
         nombre: "Piet Mondrian",
         nacimiento: 1872,
         muerte: 1944,
         nacionalidad: "Neerlandesa",
         puntuacion: 7.4,
         categoria: "Neoplasticismo",
         obras: [
             "Composición en rojo, amarillo y azul",
             "Broadway Boogie Woogie"
         ],
         image: "https://www.singulart.com/blog/wp-content/uploads/2024/02/Piet-Mondrian-768x1024.webp",
         liked: false
     },        
    {
       id:26,
       nombre:"Rene Magritte",
       nacimiento:1898,
       muerte:1967,
       nacionalidad:"Belga",
       puntuacion:7.3,
       categoria:"Surrealismo",
       obras:[
          "El hijo del hombre",
          "La traición de las imágenes"
       ],
       image: "https://cdn-iedmb.nitrocdn.com/ksXrSAqrFaUtiMXzvjtgvAkxTpppPdrB/assets/images/optimized/rev-1c6b016/sietefotografos.com/wp-content/uploads/2020/04/magritte.jpg",
       liked: false
    },
    {
     id: 27,
     nombre: "Jasper Johns",
     nacimiento: 1930,
     muerte: null,
     nacionalidad: "Estadounidense",
     puntuacion: 7.2,
     categoria: "Arte contemporáneo",
     obras: [
         "Flag",
         "Target"
     ],
     image: "https://www.heatherjames.com/Art_Images/Medium/artists/Jasper%20Johns.jpeg",
     liked: false
 },
 {
     id: 28,
     nombre: "Anselm Kiefer",
     nacimiento: 1945,
     muerte: null,
     nacionalidad: "Alemán",
     puntuacion: 7.1,
     categoria: "Arte contemporáneo",
     obras: [
         "Los desiertos",
         "La seducción de la historia"
     ],
     image: "https://i0.wp.com/blog.artsper.com/wp-content/uploads/2013/11/New-Featured-Image-1200-x-675-1.jpg?fit=1200%2C675&ssl=1",
     liked: false
 },
 {
     id: 29,
     nombre: "Cindy Sherman",
     nacimiento: 1954,
     muerte: null,
     nacionalidad: "Estadounidense",
     puntuacion: 7.0,
     categoria: "Fotografía contemporánea",
     obras: [
         "Untitled Film Stills",
         "History Portraits"
     ],
     image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydGlzdFwvaW1hZ2VGaWxlXC9jaW5keS1zaGVybWFuLXVudGl0bGVkLWZpbG0tc3RpbGxzLTEzNDQxNzkwMDhfb3JnLmpwZyIsInJlc2l6ZUNyb3AsNDAwLDQwMCxDUk9QX0VOVFJPUFkiXX0.Kmj/Tzd0ZNxDFW1j3b_bDuggP6SkB8IN02Xxoyerz6lY.jpg",
     liked: false
 },
 {
     id: 30,
     nombre: "Damien Hirst",
     nacimiento: 1965,
     muerte: null,
     nacionalidad: "Británico",
     puntuacion: 6.9,
     categoria: "Arte contemporáneo",
     obras: [
         "The Physical Impossibility of Death in the Mind of Someone Living",
         "For the Love of God"
     ],
     image: "https://www.latempestad.mx/wp-content/uploads/2024/06/Damien-Hirst.jpg",
     liked: false
 }
 
 ];

 const publicacionesDiv = document.getElementById('artista');

 // Muestra todos los artistas
 artistas.forEach(pub => {
     const div = document.createElement('div');
     div.className = 'artista';
     div.innerHTML = `
         <h2>${pub.nombre}</h2>
         <p><strong>Nacimiento:</strong> ${pub.nacimiento}</p>
         <p><strong>Muerte:</strong> ${pub.muerte}</p>
         <p><strong>Nacionalidad:</strong> ${pub.nacionalidad}</p>
         <p><strong>Corrientes:</strong> ${pub.categoria}</p>
         <p><strong>Obras:</strong> ${pub.obras.join(', ')}</p>
         <p><strong>Puntuación:</strong> ${pub.puntuacion}</p>
         <img src="${pub.image}" alt="${pub.nombre}" style="width: 100%;">
         
         <div class="interacciones">
             <button class="like-btn"> 🤍 </button>
         </div>
     `;
     publicacionesDiv.appendChild(div);
 });
 
 // Interacción del botón de like
 publicacionesDiv.addEventListener('click', function(event) {
     if (event.target.classList.contains('like-btn')) {
         event.target.textContent = event.target.textContent === '🤍' ? '❤️' : '🤍';
     }
 });
 
 const publicacionesPorPagina = 6;
 let paginaActual = 0;
 
 // Mostrar publicaciones en la página actual
 function mostrarPublicaciones(pagina) {
     const inicio = pagina * publicacionesPorPagina;
     const fin = inicio + publicacionesPorPagina;
     const publicacionesParaMostrar = artistas.slice(inicio, fin);
 
     publicacionesDiv.innerHTML = ''; // Limpiar el contenedor
     publicacionesParaMostrar.forEach(pub => {
         const div = document.createElement('div');
         div.className = 'artista';
         div.innerHTML = `
             <h2>${pub.nombre}</h2>
             <p><strong>Nacimiento:</strong> ${pub.nacimiento}</p>
             <p><strong>Muerte:</strong> ${pub.muerte}</p>
             <p><strong>Nacionalidad:</strong> ${pub.nacionalidad}</p>
             <p><strong>Corrientes:</strong> ${pub.categoria}</p>
             <p><strong>Obras:</strong> ${pub.obras.join(', ')}</p>
             <p><strong>Puntuación:</strong> ${pub.puntuacion}</p>
             <img src="${pub.image}" alt="${pub.nombre}" style="width: 100%;">
             <div class="interacciones">
                 <button class="like-btn"> 🤍 </button>
             </div>
         `;
         publicacionesDiv.appendChild(div);
     });
 
     document.getElementById('pagina-info').textContent = `Página ${pagina + 1} de ${Math.ceil(artistas.length / publicacionesPorPagina)}`;
 }
 
 // Actualizar botones de paginación
 function actualizarBotonesPaginacion() {
     document.getElementById('prev-btn').disabled = paginaActual === 0;
     document.getElementById('next-btn').disabled = (paginaActual + 1) * publicacionesPorPagina >= artistas.length;
 }
 
 // Botones de navegación
 document.getElementById('prev-btn').addEventListener('click', () => {
     if (paginaActual > 0) {
         paginaActual--;
         mostrarPublicaciones(paginaActual);
         actualizarBotonesPaginacion();
     }
 });
 
 document.getElementById('next-btn').addEventListener('click', () => {
     if ((paginaActual + 1) * publicacionesPorPagina < artistas.length) {
         paginaActual++;
         mostrarPublicaciones(paginaActual);
         actualizarBotonesPaginacion();
     }
 });
 
 // Inicializar primera página
 mostrarPublicaciones(paginaActual);
 actualizarBotonesPaginacion();
 
 // Mostrar y ocultar el sidebar
 document.getElementById('toggle-button').addEventListener('click', function(event) {
     event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
     const sidebar = document.getElementById('sidebar');
     sidebar.classList.toggle('show'); // Cambia la clase para mostrar/ocultar
 });
 
 document.getElementById('close-button').addEventListener('click', function() {
     const sidebar = document.getElementById('sidebar');
     sidebar.classList.remove('show'); // Quitar la clase para ocultar
 });



//contador de likes




 let totalLikes = 0; // Variable para llevar el conteo de likes

// Función para actualizar el contador de likes en pantalla
function actualizarContadorLikes() {
 document.getElementById('like-count').textContent = `Total Likes: ${totalLikes}`;
}

// Muestra todos los artistas
artistas.forEach(pub => {
 const div = document.createElement('div');
 div.className = 'artista';
 div.innerHTML = `
     <h2>${pub.nombre}</h2>
     <p><strong>Nacimiento:</strong> ${pub.nacimiento}</p>
     <p><strong>Muerte:</strong> ${pub.muerte}</p>
     <p><strong>Nacionalidad:</strong> ${pub.nacionalidad}</p>
     <p><strong>Corrientes:</strong> ${pub.categoria}</p>
     <p><strong>Obras:</strong> ${pub.obras.join(', ')}</p>
     <p><strong>Puntuación:</strong> ${pub.puntuacion}</p>
     <img src="${pub.image}" alt="${pub.nombre}" style="width: 100%;">
     
     <div class="interacciones">
         <button class="like-btn"> 🤍 </button>
     </div>
 `;
 publicacionesDiv.appendChild(div);
});

// Interacción del botón de like
publicacionesDiv.addEventListener('click', function(event) {
 if (event.target.classList.contains('like-btn')) {
     const likeBtn = event.target;
     const artistaDiv = likeBtn.closest('.artista');
     const artistaId = Array.from(publicacionesDiv.children).indexOf(artistaDiv);
     
     if (artistas[artistaId].liked) {
         likeBtn.textContent = '🤍';
         totalLikes--; // Disminuir total de likes
     } else {
         likeBtn.textContent = '❤️';
         totalLikes++; // Aumentar total de likes
     }
     
     // Cambiar el estado de "liked" del artista
     artistas[artistaId].liked = !artistas[artistaId].liked;
     
     // Actualizar el contador de likes en pantalla
     actualizarContadorLikes();
 }
});

// Inicializar el contador de likes en pantalla
actualizarContadorLikes();
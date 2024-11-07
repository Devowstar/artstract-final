const publicaciones = [
    {
        _id: "5",
        titulo: "La persistencia de la memoria",
        descripcion: "Obra de Salvador Dalí que ilustra relojes derritiéndose, simbolizando la relatividad del tiempo.",
        categoria: ["surrealismo", "historia"],
        artista: "Salvador Dalí",
        obra: "La persistencia de la memoria",
        fecha: "1931",
        fuente: "Museo de Arte Moderno",
        etiquetas: ["Surrealismo, tiempo, sueños"],
        imagen: "https://art3x2.com/storage/posts/65f6bace9268f.webp"
    },
    {
        _id: "13",
        titulo: "El grito de la naturaleza",
        descripcion: "Obra de Frida Kahlo que refleja el dolor y el sufrimiento personal a través de elementos naturales.",
        categoria: ["surrealismo", "autorretrato"],
        artista: "Frida Kahlo",
        obra: "El grito de la naturaleza",
        fecha: "1937",
        fuente: "Museo Dolores Olmedo",
        etiquetas: ["Surrealismo, dolor, naturaleza"],
        imagen: "https://imagenes.muyinteresante.com.mx/files/vertical_image_414/uploads/2024/05/21/664ca8240e6b3.png"
    },
    {
        _id: "24",
        titulo: "El hijo del hombre",
        descripcion: "Pintura de René Magritte que presenta un hombre con un sombrero de copa y la cara oculta tras una manzana.",
        categoria: ["surrealismo", "pintura", "identidad"],
        artista: "René Magritte",
        obra: "El hijo del hombre",
        fecha: "1964",
        fuente: "Colección privada",
        etiquetas: ["Surrealismo, misterio, identidad"],
        imagen: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvZjU5Zjk5YWI0Nzg0OWZjMDQ2MzNiOGYzZmJlZjVlM2MuanBnIiwicmVzaXplLDgwMCJdfQ.0NL9TMRSfnATqyIteTHZvFrQazj4xwBO__NPHHaQthg.jpg"
    },
    {
        __id: "43",
        titulo: "La persistencia de la memoria",
        descripcion: "Pintura de Dalí que representa relojes derretidos en un paisaje onírico, explorando la naturaleza del tiempo y la realidad.",
        categoria: ["surrealismo", "pintura", "sueños"],
        artista: "Salvador Dalí",
        obra: "La persistencia de la memoria",
        fecha: "1931",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Surrealismo, tiempo, onírico"],
        imagen: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvbnljLTItMjY4LmpwZyIsInJlc2l6ZSwyMDAwLDIwMDAiXX0.kyLjy8saXwwv-oGbJBh7X0tgXbgo4aN-d5IcAxw7A2w.jpg"
    },
    {
        _id: "45",
        titulo: "La tentación de San Antonio",
        descripcion: "Pintura de Salvador Dalí que representa a San Antonio siendo atormentado por visiones surrealistas y figuras fantásticas.",
        categoria: ["surrealismo", "religión", "pintura"],
        artista: "Salvador Dalí",
        obra: "La tentación de San Antonio",
        fecha: "1946",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Surrealismo, religión, tentación"],
        imagen: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNWVkY2FjYWE1ZTY2MS5qcGciLCJyZXNpemUsODAwIl19.VdFHqJP01m9a91087_yAFhVM9LtPrM9bNsw1QSpa0p0.jpg"
    },
    {
        _id: "46",
        titulo: "El sueño",
        descripcion: "Pintura de de Chirico que representa un paisaje melancólico con estatuas y sombras, evocando una atmósfera de misterio y nostalgia.",
        categoria: ["surrealismo", "pintura", "misterio"],
        artista: "Giorgio de Chirico",
        obra: "El sueño",
        fecha: "1914",
        fuente: "Colección privada",
        etiquetas: ["Surrealismo, misterio, melancolía"],
        imagen: "https://pro-tectonica-s3.s3.eu-west-1.amazonaws.com/chirico-web-cxf-ok-730x471_1553247797.jpg"
    },
    {
        _id: "47",
        titulo: "La lluvia de fuego",
        descripcion: "Pintura de Salvador Dalí que representa un paisaje onírico lleno de elementos surrealistas y una lluvia de fuego, simbolizando el caos y la destrucción.",
        categoria: ["surrealismo", "pintura", "caos"],
        artista: "Salvador Dalí",
        obra: "La lluvia de fuego",
        fecha: "1934",
        fuente: "Colección privada",
        etiquetas: ["Surrealismo, caos, simbolismo"],
        imagen: "https://www.todocuadros.cl/cdn/shop/products/tcdl0009-jirafa-llamas-dali.jpg?crop=center&height=1200&v=1715363431&width=1200"
    },
    {
        _id: "48",
        titulo: "El gran masturbador",
        descripcion: "Pintura de Salvador Dalí que explora temas de deseo y ansiedad a través de imágenes oníricas y símbolos fálicos, reflejando la psique humana.",
        categoria: ["surrealismo", "psicología", "pintura"],
        artista: "Salvador Dalí",
        obra: "El gran masturbador",
        fecha: "1929",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Surrealismo, deseo, psicología"],
        imagen: "https://uploads3.wikiart.org/00475/images/salvador-dali/salvador-dali-the-great-masturbator-1929-obelisk-art-history.jpg!Large.jpg"
    },
    {
        _id: "72",
        titulo: "El elefante espacial",
        descripcion: "Pintura de Salvador Dalí que muestra un elefante con patas largas y delgadas, simbolizando la dualidad entre la fuerza y la fragilidad.",
        categoria: ["surrealismo", "fantástico", "pintura"],
        artista: "Salvador Dalí",
        obra: "El elefante espacial",
        fecha: "1948",
        fuente: "Colección privada",
        etiquetas: ["Surrealismo, elefante, dualidad"],
        imagen: "https://i.pinimg.com/474x/91/1f/77/911f778b1b06fe55362603b713e3d9ee.jpg"
    },
    
    {
        _id: "74",
        titulo: "Los amantes",
        descripcion: "Pintura de René Magritte que muestra a dos figuras cubiertas con telas, simbolizando la incomunicación y el misterio en las relaciones humanas.",
        categoria: ["surrealismo", "relaciones", "pintura"],
        artista: "René Magritte",
        obra: "Los amantes",
        fecha: "1928",
        fuente: "Museo de Bellas Artes, Gante",
        etiquetas: ["Surrealismo, misterio, incomunicación"],
        imagen: "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FZUVCFZ7Y5COBKPBBCFRHSRSMY.jpg"
    }
    
    
];






function mezclarArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Intercambiar elementos
    }
    return arr;
}

// Seleccionar 6 publicaciones aleatorias
const publicacionesAleatorias = mezclarArray(publicaciones).slice(0, 6);

// Obtener el contenedor de publicaciones
const publicacionesDiv = document.getElementById('publicaciones');

// Agregar las publicaciones al contenedor
publicacionesAleatorias.forEach(pub => {
    const div = document.createElement('div');
    div.className = 'publicacion';
    div.innerHTML = `
        <h2>${pub.titulo}</h2>
        <p>${pub.descripcion}</p>
        <p><strong>Artista:</strong> ${pub.artista}</p>
        <p><strong>Obra:</strong> ${pub.obra}</p>
        <p><strong>Fecha:</strong> ${pub.fecha}</p>
        <p><strong>Fuente:</strong> ${pub.fuente}</p>
        <p><strong>Categorías:</strong> ${pub.categoria.join(', ')}</p>
        <p><strong>Etiquetas:</strong> ${pub.etiquetas.join(', ')}</p>
        <img src="${pub.imagen}" alt="${pub.titulo}" style="width: 100%;">
        
        <div class="interacciones">
            <button class="like-btn"> 🤍 </button>
            <button class="comment-btn">💬</button>
        </div>
        <div class="comentarios">
            <textarea placeholder="Escribe un comentario..."></textarea>
            <button class="submit-comment">Enviar</button>
            <div class="comentarios-list"></div>
        </div>
    `;
    publicacionesDiv.appendChild(div);

});






// Evento para el manejo de los 'like' y 'quitar like'
publicacionesDiv.addEventListener('click', function(event) {
    if (event.target.classList.contains('like-btn')) {
        // Cambia el estado del 'like' al hacer clic
        if (event.target.textContent === '🤍') {
            event.target.textContent = '❤️'; // Cambiar a 'like'
        } else {
            event.target.textContent = '🤍'; // Cambiar a 'quitar like'
        }
    }

    if (event.target.classList.contains('submit-comment')) {
        const commentBox = event.target.previousElementSibling;
        const commentText = commentBox.value;
        if (commentText) {
            const comentariosList = event.target.parentElement.querySelector('.comentarios-list');
            const newComment = document.createElement('div');
            newComment.className = 'comentario';
            newComment.textContent = commentText;
            comentariosList.appendChild(newComment);
            commentBox.value = ''; // Limpiar el campo de comentario
        }
    }
});


const publicacionesPorPagina = 6;
let paginaActual = 0;

function mostrarPublicaciones(pagina) {
    const inicio = pagina * publicacionesPorPagina;
    const fin = inicio + publicacionesPorPagina;
    const publicacionesParaMostrar = publicaciones.slice(inicio, fin);

    publicacionesDiv.innerHTML = ''; // Limpiar el contenedor
    publicacionesParaMostrar.forEach(pub => {
        const div = document.createElement('div');
        div.className = 'publicacion';
        div.innerHTML = `
            <h2>${pub.titulo}</h2>
            <p>${pub.descripcion}</p>
            <p><strong>Artista:</strong> ${pub.artista}</p>
            <p><strong>Obra:</strong> ${pub.obra}</p>
            <p><strong>Fecha:</strong> ${pub.fecha}</p>
            <p><strong>Fuente:</strong> ${pub.fuente}</p>
            <p><strong>Categorías:</strong> ${pub.categoria.join(', ')}</p>
            <p><strong>Etiquetas:</strong> ${pub.etiquetas.join(', ')}</p>
            <img src="${pub.imagen}" alt="${pub.titulo}" style="width: 100%;">
            <div class="interacciones">
                <button class="like-btn"> 🤍 </button>
                <button class="comment-btn">💬</button>
            </div>
            <div class="comentarios">
                <textarea placeholder="Escribe un comentario..."></textarea>
                <button class="submit-comment">Enviar</button>
                <div class="comentarios-list"></div>
            </div>
        `;
        publicacionesDiv.appendChild(div);
    });

    document.getElementById('pagina-info').textContent = `Página ${pagina + 1} de ${Math.ceil(publicaciones.length / publicacionesPorPagina)}`;
}

function actualizarBotonesPaginacion() {
    document.getElementById('prev-btn').disabled = paginaActual === 0;
    document.getElementById('next-btn').disabled = (paginaActual + 1) * publicacionesPorPagina >= publicaciones.length;
}

// Eventos para los botones de paginación
document.getElementById('prev-btn').addEventListener('click', () => {
    if (paginaActual > 0) {
        paginaActual--;
        mostrarPublicaciones(paginaActual);
        actualizarBotonesPaginacion();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if ((paginaActual + 1) * publicacionesPorPagina < publicaciones.length) {
        paginaActual++;
        mostrarPublicaciones(paginaActual);
        actualizarBotonesPaginacion();
    }
});

// Inicializar la primera página
mostrarPublicaciones(paginaActual);
actualizarBotonesPaginacion();


document.getElementById('toggle-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show'); // Cambia la clase para mostrar/ocultar
});

// Cerrar sidebar al hacer clic en el botón de cierre
document.getElementById('close-button').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('show'); // Quitar la clase para ocultar
});
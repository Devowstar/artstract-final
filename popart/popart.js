const publicaciones = [
    {
        _id: "87",
        titulo: "Campbell's Soup Cans",
        descripcion: "Serie de 32 latas de sopa Campbell, creada por Andy Warhol, que explora la comercialización y la cultura de consumo en la sociedad estadounidense.",
        categoria: ["pop art", "comercial", "pintura"],
        artista: "Andy Warhol",
        obra: "Campbell's Soup Cans",
        fecha: "1962",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Pop Art, consumo, cultura"],
        imagen: "https://s3-us-west-2.amazonaws.com/collections.lacma.org-images/remote_images/ma-19261-WEB.jpg?HfckTzVLl_rgF7klA6oO4rGOA7DoOGu1"
    },
    {
        _id: "88",
        titulo: "Whaam!",
        descripcion: "Pintura de Roy Lichtenstein que representa un avión de combate disparando un misil, utilizando técnicas de cómic y colores brillantes.",
        categoria: ["pop art", "comic", "pintura"],
        artista: "Roy Lichtenstein",
        obra: "Whaam!",
        fecha: "1963",
        fuente: "Tate Modern, Londres",
        etiquetas: ["Pop Art, cómic, guerra"],
        imagen: "https://www.singulart.com/blog/wp-content/uploads/2024/05/Whaam-1.png"
    },
    {
        _id: "89",
        titulo: "I was a Rich Man's Plaything",
        descripcion: "Pintura de Eduardo Paolozzi que combina imágenes de la cultura popular y la publicidad, reflejando la influencia del consumismo.",
        categoria: ["pop art", "collage", "pintura"],
        artista: "Eduardo Paolozzi",
        obra: "I was a Rich Man's Plaything",
        fecha: "1947",
        fuente: "Tate Modern, Londres",
        etiquetas: ["Pop Art, collage, consumismo"],
        imagen: "https://upload.wikimedia.org/wikipedia/en/d/d0/I_was_a_Rich_Man%27s_Plaything_1947.jpg"
    },
    {
        _id: "90",
        titulo: "Drowning Girl",
        descripcion: "Pintura de Roy Lichtenstein que representa a una mujer ahogándose, utilizando el estilo de los cómics y un texto dramático.",
        categoria: ["pop art", "comic", "pintura"],
        artista: "Roy Lichtenstein",
        obra: "Drowning Girl",
        fecha: "1963",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Pop Art, cómic, drama"],
        imagen: "https://upload.wikimedia.org/wikipedia/en/d/df/Roy_Lichtenstein_Drowning_Girl.jpg"
    },
    {
        _id: "91",
        titulo: "Marilyn Diptych",
        descripcion: "Pintura de Andy Warhol que presenta la imagen de Marilyn Monroe repetida en una serie de 50 cuadros, explorando la fama y la cultura de la celebridad.",
        categoria: ["pop art", "celebridad", "pintura"],
        artista: "Andy Warhol",
        obra: "Marilyn Diptych",
        fecha: "1962",
        fuente: "Tate Modern, Londres",
        etiquetas: ["Pop Art, fama, repetición"],
        imagen: "https://upload.wikimedia.org/wikipedia/en/8/87/Marilyndiptych.jpg"
    },
    {
        _id: "92",
        titulo: "Crying Girl",
        descripcion: "Pintura de Roy Lichtenstein que retrata a una chica llorando en un estilo de cómic, combinando drama y humor en un único marco.",
        categoria: ["pop art", "comic", "pintura"],
        artista: "Roy Lichtenstein",
        obra: "Crying Girl",
        fecha: "1963",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Pop Art, cómic, emociones"],
        imagen: "https://upload.wikimedia.org/wikipedia/en/0/04/Crying_Girl_%28lithograph%29.jpg"
    },
    {
        _id: "93",
        titulo: "The Store",
        descripcion: "Instalación artística de Claes Oldenburg que presenta un espacio de venta lleno de esculturas de productos cotidianos, desdibujando la línea entre arte y comercio.",
        categoria: ["pop art", "instalación", "arte comercial"],
        artista: "Claes Oldenburg",
        obra: "The Store",
        fecha: "1961",
        fuente: "Colección privada",
        etiquetas: ["Pop Art, comercio, arte"],
        imagen: "https://cdn.thecollector.com/wp-content/uploads/2023/05/claes-oldenburg-the-store.jpg"
    },
    {
        _id: "94",
        titulo: "Femme Maison",
        descripcion: "Pintura de Louise Bourgeois que representa una figura femenina fusionada con una casa, explorando la relación entre la identidad y el hogar.",
        categoria: ["pop art", "identidad", "pintura"],
        artista: "Louise Bourgeois",
        obra: "Femme Maison",
        fecha: "1994",
        fuente: "Colección privada",
        etiquetas: ["Pop Art, identidad, hogar"],
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM18P7IfP1DyYNCj9ACGaXQ0fC7sLBleOW8BmkXV2RuBEckXrWD0amDCkKa_LUlZM52WhwoehjU4Z3jsTmQMIFQXDD87k90sjViL3_v7QZxMQBquDLjPWNnMjDC3bpUmLzis9uj5DbdWmz/s1600/Louise+Bourgeois.jpg"
    },
    {
        _id: "95",
        titulo: "Love",
        descripcion: "Escultura de Robert Indiana que presenta la palabra 'LOVE' en letras de colores, simbolizando el amor y la cultura pop en una forma icónica.",
        categoria: ["pop art", "escultura", "cultura"],
        artista: "Robert Indiana",
        obra: "Love",
        fecha: "1966",
        fuente: "Colección privada",
        etiquetas: ["Pop Art, amor, iconografía"],
        imagen: "https://img.artlogic.net/w_2020,h_1830,c_limit/exhibit-e/61fd44bf9789833084405ac2/7b645ab72d74dadccdb420fd99aa1adf.jpeg"
    },
    {
        _id: "96",
        titulo: "Scream",
        descripcion: "Versión del famoso cuadro de Edvard Munch reinterpretada por Andy Warhol, que combina el simbolismo del original con el estilo del Pop Art.",
        categoria: ["pop art", "reinterpretación", "pintura"],
        artista: "Andy Warhol",
        obra: "Scream",
        fecha: "1980",
        fuente: "Colección privada",
        etiquetas: ["Pop Art, reinterpretación, emoción"],
        imagen: "https://www.munchmuseet.no/globalassets/kunstverk/xandy-warhol-the-scream-after-munch-1984warhol_the-scream.jpg.pagespeed.ic.k5meyeegyh.jpg?w=1000"
    },
    {
        _id: "97",
        titulo: "Self-Portrait",
        descripcion: "Pintura de Chuck Close que presenta un retrato hiperrealista de él mismo, usando la técnica de cuadrícula y un enfoque pop en la presentación.",
        categoria: ["pop art", "retrato", "pintura"],
        artista: "Chuck Close",
        obra: "Self-Portrait",
        fecha: "1968",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Pop Art, retrato, hiperrealismo"],
        imagen: "https://walker-web.imgix.net/cms/Close_1969.16.jpg?auto=format,compress&h=1000&fit=clip&dpr=1.5"
    },
    {
        _id: "98",
        titulo: "Brillo Boxes",
        descripcion: "Instalación de Andy Warhol que presenta cajas de productos de limpieza Brillo, cuestionando el concepto de arte y el consumo masivo.",
        categoria: ["pop art", "instalación", "arte comercial"],
        artista: "Andy Warhol",
        obra: "Brillo Boxes",
        fecha: "1964",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Pop Art, instalación, consumo"],
        imagen: "https://cdn.sanity.io/images/dqllnil6/production/fb44ebe9eb457ceca55c271bf96e8176f63aa789-700x525.jpg?w=3840&q=60&auto=format"
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
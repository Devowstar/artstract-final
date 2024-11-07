const publicaciones = [
    {
        _id: "2",
        titulo: "La noche estrellada",
        descripcion: "Pintura de Vincent van Gogh que representa un paisaje nocturno.",
        categoria: ["técnica", "historia"],
        artista: "Vincent van Gogh",
        obra: "La noche estrellada",
        fecha: "1889",
        fuente: "Libro de Arte ABC",
        etiquetas: ["Postimpresionismo", "paisaje", "noche"], // Etiquetas para búsqueda y clasificación
        imagen: "https://media.admagazine.com/photos/618a7dbc58ac69e38abb6c2c/16:9/w_1280,c_limit/43884.jpg"
    },
    {
        _id: "16",
        titulo: "Los girasoles",
        descripcion: "Serie de pinturas de Vincent van Gogh que representan girasoles en jarrones, simbolizando la alegría y la vida.",
        categoria: ["postimpresionismo", "naturaleza"],
        artista: "Vincent van Gogh",
        obra: "Los girasoles",
        fecha: "1888",
        fuente: "Museo Van Gogh, Ámsterdam",
        etiquetas: ["Postimpresionismo, naturaleza, color"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vincent_Willem_van_Gogh_128.jpg/640px-Vincent_Willem_van_Gogh_128.jpg"
    },
    {
        _id: "23",
        titulo: "El café de noche",
        descripcion: "Pintura de Vincent van Gogh que representa la atmósfera de un café nocturno.",
        categoria: ["postimpresionismo", "vida nocturna"],
        artista: "Vincent van Gogh",
        obra: "El café de noche",
        fecha: "1888",
        fuente: "Museo de Arte de Filadelfia",
        etiquetas: ["Postimpresionismo, nocturno, café"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vincent_Willem_van_Gogh_076.jpg/1200px-Vincent_Willem_van_Gogh_076.jpg"
    },
    {
        _id: "25",
        titulo: "La mujer de Tahití",
        descripcion: "Obra de Paul Gauguin que representa a dos mujeres tahitianas.",
        categoria: ["postimpresionismo", "exotismo"],
        artista: "Paul Gauguin",
        obra: "La mujer de Tahití",
        fecha: "1891",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Postimpresionismo, exotismo, cultura"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Paul_Gauguin_056.jpg/1200px-Paul_Gauguin_056.jpg"
    },
    {
        _id: "35",
        titulo: "La estación de Saint-Lazare",
        descripcion: "Pintura de Monet que muestra una de las estaciones de tren de París, con énfasis en el humo y la luz en movimiento.",
        categoria: ["impresionismo", "urbanismo", "pintura"],
        artista: "Claude Monet",
        obra: "La estación de Saint-Lazare",
        fecha: "1877",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Impresionismo, tren, luz"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/9/96/La_Gare_Saint-Lazare_-_Claude_Monet.jpg"
    },
    {
        _id: "36",
        titulo: "El puente de Europa",
        descripcion: "Obra de Caillebotte que muestra el puente de Europa en París, capturando a las personas de diferentes clases sociales caminando en la ciudad moderna.",
        categoria: ["impresionismo", "urbanismo", "pintura"],
        artista: "Gustave Caillebotte",
        obra: "El puente de Europa",
        fecha: "1876",
        fuente: "Museo Petit Palais, Ginebra",
        etiquetas: ["Impresionismo, urbanismo, París"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/0/00/Caillebotte-PontdeL%27Europe-Geneva.jpg"
    },
    {
        _id: "37",
        titulo: "La clase de danza",
        descripcion: "Pintura de Degas que muestra a un grupo de bailarinas en clase, capturando la atmósfera y la precisión de la danza clásica.",
        categoria: ["impresionismo", "danza", "pintura"],
        artista: "Edgar Degas",
        obra: "La clase de danza",
        fecha: "1874",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Impresionismo, danza, academia"],
        imagen: "https://images.squarespace-cdn.com/content/v1/5f638d3adfa9c677cced1579/1602000194813-LHD80ZRQRO3X9J9CULD8/degas_dancingclass_.jpg"
    },
    {
        _id: "67",
        titulo: "Impresión, sol naciente",
        descripcion: "Pintura de Claude Monet que captura la salida del sol sobre el puerto de Le Havre, dando nombre al movimiento impresionista.",
        categoria: ["impresionismo", "paisaje", "pintura"],
        artista: "Claude Monet",
        obra: "Impresión, sol naciente",
        fecha: "1872",
        fuente: "Museo Marmottan Monet, París",
        etiquetas: ["Impresionismo, paisaje, luz"],
        imagen: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvY2xhdWRlX21vbmV0X2ltcHJlc3Npb25fc29sZWlsX2xldmFudF8xODcyLmpwZyIsInJlc2l6ZUNyb3AsNjAwLDMwMCxDUk9QX0JBTEFOQ0UiXX0.jlKvffFHbR1/x8doZpJigcKfkZuVjnKlnOGadSrcwZEg.jpg"
    },
    {
        _id: "68",
        titulo: "El almuerzo de los remeros",
        descripcion: "Pintura de Pierre-Auguste Renoir que muestra a amigos disfrutando de un almuerzo en un paisaje junto al río, capturando la alegría de la vida.",
        categoria: ["impresionismo", "vida cotidiana", "pintura"],
        artista: "Pierre-Auguste Renoir",
        obra: "El almuerzo de los remeros",
        fecha: "1881",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Impresionismo, alegría, social"],
        imagen: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvcmVub2lyLXJlbWVyb3MuanBnIiwicmVzaXplLDgwMCJdfQ.he7Af_NCxgcDTRCdJlLuLr1tm0TDo2WsCfA85M4vZJw.jpg"
    },
    {
        _id: "69",
        titulo: "La danza en el Moulin de la Galette",
        descripcion: "Pintura de Renoir que captura a la gente bailando y disfrutando en el famoso molino de Montmartre, llena de luz y color.",
        categoria: ["impresionismo", "vida social", "pintura"],
        artista: "Pierre-Auguste Renoir",
        obra: "La danza en el Moulin de la Galette",
        fecha: "1876",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Impresionismo, baile, luz"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg/640px-Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg"
    },
    {
        _id: "70",
        titulo: "Los nenúfares",
        descripcion: "Serie de pinturas de Claude Monet que representa su jardín en Giverny, explorando la luz y la reflexión sobre el agua.",
        categoria: ["impresionismo", "naturaleza", "pintura"],
        artista: "Claude Monet",
        obra: "Los nenúfares",
        fecha: "1899-1926",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Impresionismo, naturaleza, luz"],
        imagen: "https://media.admagazine.com/photos/64530b2f73d7f735d6aa5430/master/w_2560%2Cc_limit/lirios-monet.jpg"
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
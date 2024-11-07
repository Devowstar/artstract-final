const publicaciones = [
    {
        _id: "20",
        titulo: "El origen del mundo",
        descripcion: "Pintura de Gustave Courbet que representa un torso femenino, considerada una obra provocadora y audaz.",
        categoria: ["realismo", "erotismo"],
        artista: "Gustave Courbet",
        obra: "El origen del mundo",
        fecha: "1866",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Realismo, erotismo, provocación"],
        imagen: "https://pbs.twimg.com/media/EDFQZVmW4AEjpcd.jpg:large"
    },
    {
        _id: "27",
        titulo: "El Ángelus",
        descripcion: "Pintura de Millet que representa a dos campesinos rezando al atardecer, mostrando la vida rural con respeto y sobriedad.",
        categoria: ["realismo", "rural", "pintura"],
        artista: "Jean-François Millet",
        obra: "El Ángelus",
        fecha: "1857",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Realismo, campesinos, vida cotidiana"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/JEAN-FRAN%C3%87OIS_MILLET_-_El_%C3%81ngelus_%28Museo_de_Orsay%2C_1857-1859._%C3%93leo_sobre_lienzo%2C_55.5_x_66_cm%29.jpg/800px-JEAN-FRAN%C3%87OIS_MILLET_-_El_%C3%81ngelus_%28Museo_de_Orsay%2C_1857-1859._%C3%93leo_sobre_lienzo%2C_55.5_x_66_cm%29.jpg"
    },
    {
        _id: "28",
        titulo: "El estudio del pintor",
        descripcion: "Obra de Courbet en la que el artista se autorretrata trabajando en su estudio, rodeado de figuras representativas de la sociedad de su tiempo.",
        categoria: ["realismo", "autorretrato", "pintura"],
        artista: "Gustave Courbet",
        obra: "El estudio del pintor",
        fecha: "1855",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Realismo, sociedad, arte"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Courbet_LAtelier_du_peintre.jpg/1200px-Courbet_LAtelier_du_peintre.jpg"
    },
    {
        _id: "29",
        titulo: "Enterrando en Ornans",
        descripcion: "Pintura de Courbet que retrata un funeral en el pueblo de Ornans, mostrando a personas comunes sin idealización.",
        categoria: ["realismo", "vida cotidiana", "pintura"],
        artista: "Gustave Courbet",
        obra: "Un entierro en Ornans",
        fecha: "1850",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Realismo, funeral, vida rural"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project_2.jpg"
    },
    {
        _id: "30",
        titulo: "Los picapedreros",
        descripcion: "Pintura de Courbet que muestra a dos hombres trabajando en la carretera, retratados con una crudeza y detalle inusuales.",
        categoria: ["realismo", "trabajo", "pintura"],
        artista: "Gustave Courbet",
        obra: "Los picapedreros",
        fecha: "1849",
        fuente: "Destruida en 1945 (original)",
        etiquetas: ["Realismo, trabajo, crudeza"],
        imagen: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNjNkYzUwMGVkYzZiYi5qcGciLCJyZXNpemUsODAwIl19.RSUetdt6UGFy41E76DpBe31sbz7Qqlrx9fshqFsUGnY.jpg"
    },
    {
        _id: "39",
        titulo: "La lavandera",
        descripcion: "Pintura de Daumier que retrata a una mujer trabajadora con su hijo, resaltando las dificultades de la vida obrera.",
        categoria: ["realismo", "trabajo", "pintura"],
        artista: "Honoré Daumier",
        obra: "La lavandera",
        fecha: "1863",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Realismo, trabajo, vida cotidiana"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Honor%C3%A9_Daumier_-_The_Washerwoman_-_WGA05957.jpg"
    },
    {
        _id: "40",
        titulo: "Los cosechadores de heno",
        descripcion: "Pintura de Millet que muestra a campesinos trabajando en la cosecha, con énfasis en su esfuerzo físico.",
        categoria: ["realismo", "trabajo", "pintura"],
        artista: "Jean-François Millet",
        obra: "Los cosechadores de heno",
        fecha: "1853",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Realismo, campesinos, trabajo"],
        imagen: "https://www.1st-art-gallery.com/media/catalog/product/cache/193ef6a9f006ae1b1bc12f2750137772/paintingsL/174715/gleaners-reproduction-millet.webp"
    },
    {
        _id: "41",
        titulo: "El cargador de piedras",
        descripcion: "Pintura de Courbet que muestra a un trabajador levantando una pesada piedra, representando el esfuerzo y la dureza del trabajo manual.",
        categoria: ["realismo", "trabajo", "pintura"],
        artista: "Gustave Courbet",
        obra: "El cargador de piedras",
        fecha: "1850",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Realismo, trabajo, esfuerzo"],
        imagen: "https://cache.getarchive.net/Prod/thumb/cdn2/L3Bob3RvLzIwMjMvMDYvMjUvZ2lsbG90LXRoZS1zdG9uZS1icmVha2VyLWFmdGVyLTE4NDktMWE4MmRkLTEwMjQuanBn/320/423/jpg"
    },
    {
        _id: "42",
        titulo: "Los tejadores",
        descripcion: "Pintura de Daumier que muestra a un grupo de trabajadores en un tejado, capturando la dureza de su labor y el riesgo que enfrentan.",
        categoria: ["realismo", "trabajo", "pintura"],
        artista: "Honoré Daumier",
        obra: "Los tejadores",
        fecha: "1860",
        fuente: "Colección privada",
        etiquetas: ["Realismo, trabajo, vida urbana"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Honor%C3%A9_Daumier_034.jpg/640px-Honor%C3%A9_Daumier_034.jpg"
    },
    {
        _id: "63",
        titulo: "El baile en el pueblo",
        descripcion: "Pintura de Édouard Manet que representa una escena de un baile en el campo, capturando la vida cotidiana de la clase trabajadora.",
        categoria: ["realismo", "vida cotidiana", "pintura"],
        artista: "Édouard Manet",
        obra: "El baile en el pueblo",
        fecha: "1862",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Realismo, vida cotidiana, clase trabajadora"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg/800px-Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg"
    },
    {
        _id: "64",
        titulo: "La cosecha de la uva",
        descripcion: "Pintura de Gustave Courbet que muestra a campesinos en la vendimia, resaltando el trabajo y la conexión con la tierra.",
        categoria: ["realismo", "trabajo", "pintura"],
        artista: "Gustave Courbet",
        obra: "La cosecha de la uva",
        fecha: "1848",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Realismo, campesinos, trabajo"],
        imagen: "https://www.artisoo.com/images/oil-painting-474/ARTS474998.jpg"
    },
    {
        _id: "65",
        titulo: "El dormitorio",
        descripcion: "Pintura de Vincent van Gogh que muestra una habitación simple, reflejando la vida cotidiana y la soledad del artista.",
        categoria: ["realismo", "vida cotidiana", "pintura"],
        artista: "Vincent van Gogh",
        obra: "El dormitorio",
        fecha: "1888",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Realismo, soledad, vida cotidiana"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/640px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg"
    },
    {
        _id: "66",
        titulo: "Las dos familias",
        descripcion: "Pintura de Jean-François Millet que muestra a dos familias de campesinos en un paisaje rural, simbolizando la vida y las luchas de la clase trabajadora.",
        categoria: ["realismo", "familia", "pintura"],
        artista: "Jean-François Millet",
        obra: "Las dos familias",
        fecha: "1850",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Realismo, vida rural, comunidad"],
        imagen: "https://www.aparences.net/wp-content/uploads/2019/06/millet-la-famille-du-paysan.jpg"
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
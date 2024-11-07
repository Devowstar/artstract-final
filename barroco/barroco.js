const publicaciones = [
    {
        _id: "8",
        titulo: "Las meninas",
        descripcion: "Obra maestra de Diego Velázquez que representa a la infanta Margarita y su séquito en la corte española.",
        categoria: ["barroco", "historia"],
        artista: "Diego Velázquez",
        obra: "Las meninas",
        fecha: "1656",
        fuente: "Museo del Prado",
        etiquetas: ["Barroco, retrato, perspectiva"],
        imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/45J6YXJGKVF63BQ66BBZV2NPZM.jpg"
    },
    {
        _id: "17",
        titulo: "La joven de la perla",
        descripcion: "Famoso retrato de Johannes Vermeer, a menudo llamado la 'Mona Lisa del norte'.",
        categoria: ["barroco", "retratos"],
        artista: "Johannes Vermeer",
        obra: "La joven de la perla",
        fecha: "1665",
        fuente: "Mauritshuis, La Haya",
        etiquetas: ["Barroco, retrato, misterio"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/800px-Meisje_met_de_parel.jpg"
    },
    {
        _id: "21",
        titulo: "La ronda de noche",
        descripcion: "Pintura de Rembrandt que muestra una milicia urbana en acción.",
        categoria: ["barroco", "historia"],
        artista: "Rembrandt",
        obra: "La ronda de noche",
        fecha: "1642",
        fuente: "Rijksmuseum, Ámsterdam",
        etiquetas: ["Barroco, milicia, drama"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/1200px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg"
    },
    {
        _id: "22",
        titulo: "El éxtasis de Santa Teresa",
        descripcion: "Escultura de Bernini que representa la experiencia mística de la santa en un momento de éxtasis religioso.",
        categoria: ["barroco", "religión", "escultura"],
        artista: "Gian Lorenzo Bernini",
        obra: "El éxtasis de Santa Teresa",
        fecha: "1652",
        fuente: "Iglesia de Santa Maria della Vittoria, Roma",
        etiquetas: ["Barroco, misticismo, movimiento"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Ecstasy_of_Saint_Teresa_September_2015-2a.jpg"
    },
    {
        _id: "23",
        titulo: "La vocación de San Mateo",
        descripcion: "Pintura de Caravaggio que muestra el momento en que Jesús llama a Mateo para convertirse en su discípulo.",
        categoria: ["barroco", "religión", "pintura"],
        artista: "Caravaggio",
        obra: "La vocación de San Mateo",
        fecha: "1600",
        fuente: "Iglesia de San Luis de los Franceses, Roma",
        etiquetas: ["Barroco, claroscuro, dramatismo"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Caravaggio_%281571-1610%29_-_De_roeping_van_Matte%C3%BCs_%281599-1600%29_-_Rome_San_Luigi_dei_Francesi_10-01-2011_12-07-56.png/1200px-Caravaggio_%281571-1610%29_-_De_roeping_van_Matte%C3%BCs_%281599-1600%29_-_Rome_San_Luigi_dei_Francesi_10-01-2011_12-07-56.png"
    },
    {
        _id: "25",
        titulo: "La adoración de los pastores",
        descripcion: "Pintura de Georges de La Tour que muestra la escena bíblica de la adoración de Jesús recién nacido, con un uso intenso del claroscuro.",
        categoria: ["barroco", "religión", "pintura"],
        artista: "Georges de La Tour",
        obra: "La adoración de los pastores",
        fecha: "1644",
        fuente: "Museo del Louvre, París",
        etiquetas: ["Barroco, claroscuro, religiosidad"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/5/5b/L%27adoration_des_bergers.jpg"
    },
    {
        _id: "26",
        titulo: "Apolo y Dafne",
        descripcion: "Escultura de Bernini que representa el momento en que Dafne se transforma en laurel para escapar de Apolo.",
        categoria: ["barroco", "mitología", "escultura"],
        artista: "Gian Lorenzo Bernini",
        obra: "Apolo y Dafne",
        fecha: "1625",
        fuente: "Galería Borghese, Roma",
        etiquetas: ["Barroco, mitología, transformación"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Apollo_and_Daphne_by_Bernini_-_Galleria_Borghese_-_Rome%2C_Italy_-_DSC04587.jpg/1200px-Apollo_and_Daphne_by_Bernini_-_Galleria_Borghese_-_Rome%2C_Italy_-_DSC04587.jpg"
    },
    {
        _id: "52",
        titulo: "El carro de heno",
        descripcion: "Pintura de Bruegel el Viejo que retrata una escena de campesinos en un paisaje rural, llena de detalles y simbolismo.",
        categoria: ["barroco", "paisaje", "pintura"],
        artista: "Pieter Bruegel el Viejo",
        obra: "El carro de heno",
        fecha: "1565",
        fuente: "Museo del Prado, Madrid",
        etiquetas: ["Barroco, campesinos, simbolismo"],
        imagen: "https://i0.wp.com/deartesacra.com/wp-content/uploads/2017/03/el-carro-de-heno-7.jpg?ssl=1"
    },
    {
        _id: "53",
        titulo: "El retorno del hijo pródigo",
        descripcion: "Pintura de Rembrandt que muestra la emotiva reunión de un padre y su hijo, simbolizando el perdón y la redención.",
        categoria: ["barroco", "religión", "pintura"],
        artista: "Rembrandt",
        obra: "El retorno del hijo pródigo",
        fecha: "1669",
        fuente: "Museo del Prado, Madrid",
        etiquetas: ["Barroco, redención, emoción"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Return_of_the_Prodigal_Son_1667-1670_Murillo.jpg/1200px-Return_of_the_Prodigal_Son_1667-1670_Murillo.jpg"
    },
    {
        _id: "54",
        titulo: "El mártir de San Esteban",
        descripcion: "Pintura de Caravaggio que muestra el momento del martirio de San Esteban, con un fuerte uso del claroscuro y dramatismo.",
        categoria: ["barroco", "religión", "pintura"],
        artista: "Caravaggio",
        obra: "El mártir de San Esteban",
        fecha: "1603",
        fuente: "Colección privada",
        etiquetas: ["Barroco, dramatismo, claroscuro"],
        imagen: "https://content3.cdnprado.net/imagenes/Documentos/imgsem/63/637b/637be782-674b-47db-bd73-1789aecdd2d4/4ff9d42d-9d4e-4c72-bff3-c90f1ea4c56c.jpg"
    },
    {
        _id: "22",
        titulo: "Las tres gracias",
        descripcion: "Pintura de Jean-Baptiste Carpeaux que representa a las tres gracias de la mitología.",
        categoria: ["clasicismo", "mitología"],
        artista: "Jean-Baptiste Carpeaux",
        obra: "Las tres gracias",
        fecha: "1873",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Clasicismo, mitología, belleza"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Rapha%C3%ABl_-_Les_Trois_Gr%C3%A2ces_-_Google_Art_Project_2.jpg"
    },
    

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
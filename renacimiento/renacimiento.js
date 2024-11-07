const publicaciones = [
    {
        _id: "1",
        titulo: "El color azul de la Gioconda",
        descripcion: "Leonardo da Vinci utilizó un pigmento azul extremadamente raro y costoso para pintar la Gioconda.",
        categoria: ["técnica", "historia"], // Permite múltiples categorías
        artista: "Leonardo da Vinci", // Campo adicional para el artista
        obra: "Mona Lisa", // Campo adicional para la obra
        fecha: "1503-1519", // Fecha de creación de la obra
        fuente: "Libro de Arte XYZ",
        etiquetas: ["Renacimiento", "pintura al óleo", "enigmas artísticos"], // Etiquetas para búsqueda y clasificación
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQEk-uG2EcrfsfbYlqDK5LjoZ7r3TOakizfDVyFlaiLG1wm6cTWm3ki1PxQDfBp71aIqqKt3e5rVBwEF8S-SBqqzyecTNjmnAxW_jRIejROaD-dzHfecBEoKA7ABt7LQU3W-vbFbF5hsA/s1600/LA+GIOCONDA.jpg"
    },
    {
        _id: "6",
        titulo: "La creación de Adán",
        descripcion: "Fresco de Miguel Ángel que representa la creación del primer hombre según la Biblia.",
        categoria: ["renacimiento", "religión"],
        artista: "Miguel Ángel",
        obra: "La creación de Adán",
        fecha: "1512",
        fuente: "Capilla Sixtina, Ciudad del Vaticano",
        etiquetas: ["Renacimiento, religión, frescos"],
        imagen: "https://historiauniversal.org/wp-content/uploads/la-creacion-de-adan-1024x533.jpg.webp"    

    },
    {
        _id: "7",
        titulo: "El nacimiento de Venus",
        descripcion: "Pintura de Sandro Botticelli que representa el nacimiento de la diosa Venus de la espuma del mar.",
        categoria: ["renacimiento", "mitología"],
        artista: "Sandro Botticelli",
        obra: "El nacimiento de Venus",
        fecha: "1484-1486",
        fuente: "Galería Uffizi",
        etiquetas: ["Renacimiento, mitología, belleza"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/640px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"
    },
    {
        _id: "10",
        titulo: "El jardín de las delicias",
        descripcion: "Obra de Hieronymus Bosch que representa el paraíso, la vida terrenal y el infierno en un tríptico.",
        categoria: ["renacimiento", "simbolismo"],
        artista: "Hieronymus Bosch",
        obra: "El jardín de las delicias",
        fecha: "1490-1510",
        fuente: "Museo del Prado",
        etiquetas: ["Renacimiento, tríptico, alegoría"],
        imagen: "https://menocchio.uniandes.edu.co/wp-content/uploads/2017/06/edit-jardin.jpg"
    },
    {
        _id: "11",
        titulo: "La escuela de Atenas",
        descripcion: "Fresco de Rafael que representa a los filósofos griegos en un espacio arquitectónico idealizado.",
        categoria: ["renacimiento", "filosofía"],
        artista: "Rafael Sanzio",
        obra: "La escuela de Atenas",
        fecha: "1509-1511",
        fuente: "Ajuste en los Museos Vaticanos",
        etiquetas: ["Renacimiento, filosofía, frescos"],
        imagen: "https://investinhistory.ca/wp-content/uploads/2024/05/dreamstime_s_15341980028129.jpg"
    },
    {
        _id: "15",
        titulo: "La última cena",
        descripcion: "Fresco de Leonardo da Vinci que representa la última cena de Jesús con sus discípulos.",
        categoria: ["renacimiento", "religión"],
        artista: "Leonardo da Vinci",
        obra: "La última cena",
        fecha: "1495-1498",
        fuente: "Convento de Santa María delle Grazie, Milán",
        etiquetas: ["Renacimiento, religión, frescos"],
        imagen: "https://fpp.org.pe/wp-content/uploads/2022/04/Ultima-Cena-1024x614-1.jpg"
    },
    {
        _id: "26",
        titulo: "La primavera",
        descripcion: "Pintura de Sandro Botticelli que simboliza el renacer de la naturaleza.",
        categoria: ["renacimiento", "mitología"],
        artista: "Sandro Botticelli",
        obra: "La primavera",
        fecha: "1482",
        fuente: "Galería Uffizi, Florencia",
        etiquetas: ["Renacimiento, mitología, naturaleza"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sandro_Botticelli_-_La_Primavera_-_Google_Art_Project.jpg/1200px-Sandro_Botticelli_-_La_Primavera_-_Google_Art_Project.jpg"
    },
    {
        _id: "27",
        titulo: "La torre de Babel",
        descripcion: "Pintura de Pieter Bruegel el Viejo que representa la construcción de la Torre de Babel.",
        categoria: ["renacimiento", "historia"],
        artista: "Pieter Bruegel el Viejo",
        obra: "La torre de Babel",
        fecha: "1563",
        fuente: "Museo de Historia del Arte, Viena",
        etiquetas: ["Renacimiento, historia, alegoría"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg/1200px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg"
    },
    {
        _id: "59",
        titulo: "La Madonna de la silla",
        descripcion: "Pintura de Rafael que representa a la Virgen María con el niño Jesús y San Juan Bautista, en un entorno sereno y armónico.",
        categoria: ["renacimiento", "religión", "pintura"],
        artista: "Rafael",
        obra: "La Madonna de la silla",
        fecha: "1514",
        fuente: "Museo del Prado, Madrid",
        etiquetas: ["Renacimiento, Virgen María, armonía"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Raphael_Madonna_della_seggiola.jpg/640px-Raphael_Madonna_della_seggiola.jpg"
    },
    {
        _id: "60",
        titulo: "El hombre de Vitruvio",
        descripcion: "Dibujo de Leonardo da Vinci que ilustra las proporciones del cuerpo humano, combinando arte y ciencia en un solo trabajo.",
        categoria: ["renacimiento", "anatomía", "dibujo"],
        artista: "Leonardo da Vinci",
        obra: "El hombre de Vitruvio",
        fecha: "c. 1490",
        fuente: "Galería de la Academia, Venecia",
        etiquetas: ["Renacimiento, proporciones, anatomía"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitruvian_Man_by_Leonardo_da_Vinci.jpg/1200px-Vitruvian_Man_by_Leonardo_da_Vinci.jpg"
    },
    {
        _id: "61",
        titulo: "El juicio final",
        descripcion: "Fresco de Miguel Ángel que representa el juicio final de las almas, mostrando a Cristo en el centro rodeado de santos y pecadores.",
        categoria: ["renacimiento", "religión", "fresco"],
        artista: "Miguel Ángel",
        obra: "El juicio final",
        fecha: "1536-1541",
        fuente: "Capilla Sixtina, Ciudad del Vaticano",
        etiquetas: ["Renacimiento, juicio final, frescos"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Last_Judgement_%28Michelangelo%29.jpg/1200px-Last_Judgement_%28Michelangelo%29.jpg"
    },
    {
        _id: "62",
        titulo: "La caza de los jabalíes",
        descripcion: "Pintura de Paolo Uccello que representa a un grupo de cazadores en la persecución de un jabalí, con un enfoque en el movimiento y el dinamismo.",
        categoria: ["renacimiento", "caza", "pintura"],
        artista: "Paolo Uccello",
        obra: "La caza de los jabalíes",
        fecha: "c. 1470",
        fuente: "Museo Nacional de Arte, Lisboa",
        etiquetas: ["Renacimiento, caza, dinamismo"],
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Hunt_in_the_forest_by_paolo_uccello.jpg/2560px-Hunt_in_the_forest_by_paolo_uccello.jpg"
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
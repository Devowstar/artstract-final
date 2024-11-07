const publicaciones = [
    {
        _id: "75",
        titulo: "Les Demoiselles d'Avignon",
        descripcion: "Pintura de Pablo Picasso que muestra cinco mujeres en una composición fragmentada, representando un cambio radical en la representación del cuerpo humano.",
        categoria: ["cubismo", "pintura", "revolución"],
        artista: "Pablo Picasso",
        obra: "Les Demoiselles d'Avignon",
        fecha: "1907",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Cubismo, fragmentación, modernidad"],
        imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/640px-Les_Demoiselles_d%27Avignon.jpg"
    },
    {
        _id: "76",
        titulo: "Violin y uvas",
        descripcion: "Pintura de Georges Braque que representa un violín y uvas en una composición cubista, explorando la intersección de formas y planos.",
        categoria: ["cubismo", "naturaleza muerta", "pintura"],
        artista: "Georges Braque",
        obra: "Violin y uvas",
        fecha: "1912",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Cubismo, naturaleza muerta, formas"],
        imagen: "https://assets.isu.pub/document-structure/230607143522-a1815d08f7549254de85baf38c44b173/v1/c7bb4529b8502e17ccb4efb2f4547fcf.jpeg"
    },
    {
        _id: "77",
        titulo: "Retrato de Dora Maar",
        descripcion: "Pintura de Pablo Picasso que retrata a su amante y musa en un estilo cubista, fusionando características faciales y geométricas.",
        categoria: ["cubismo", "retrato", "pintura"],
        artista: "Pablo Picasso",
        obra: "Retrato de Dora Maar",
        fecha: "1937",
        fuente: "Museo de arte de París, París",
        etiquetas: ["Cubismo, retrato, fusión"],
        imagen: "https://blocdejavier.wordpress.com/wp-content/uploads/2022/03/picasso-retrato-de-dora-maar-1937.jpg"
    },
    {
        _id: "78",
        titulo: "El hombre con la pipa",
        descripcion: "Pintura de Juan Gris que muestra a un hombre con una pipa, utilizando un enfoque cubista para descomponer la figura en formas geométricas.",
        categoria: ["cubismo", "retrato", "pintura"],
        artista: "Juan Gris",
        obra: "El hombre con la pipa",
        fecha: "1912",
        fuente: "Museo Thyssen-Bornemisza, Madrid",
        etiquetas: ["Cubismo, retrato, geometría"],
        imagen: "https://www.meisterdrucke.es/kunstwerke/1000px/Juan%20Gris%20-%20LHomme%20%20la%20pipe%20-%20(MeisterDrucke-681272).jpg"
    },
    {
        __id: "79",
        titulo: "La guitarra",
        descripcion: "Pintura de Juan Gris que representa una guitarra descompuesta en formas geométricas, mostrando la complejidad y la riqueza del objeto.",
        categoria: ["cubismo", "naturaleza muerta", "pintura"],
        artista: "Juan Gris",
        obra: "La guitarra",
        fecha: "1912",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Cubismo, naturaleza muerta, geometría"],
        imagen: "https://artsdot.com/ADC/Art-ImgScreen-2.nsf/O/A-8XXF3A/$FILE/Juan_gris-the_guitar.Jpg"
    },
    {
        _id: "80",
        titulo: "El retrato de Ambroise Vollard",
        descripcion: "Pintura de Pablo Picasso que retrata al marchante de arte Ambroise Vollard en un estilo cubista, utilizando una paleta de colores vibrantes.",
        categoria: ["cubismo", "retrato", "pintura"],
        artista: "Pablo Picasso",
        obra: "El retrato de Ambroise Vollard",
        fecha: "1910",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Cubismo, retrato, color"],
        imagen: "https://es.wahooart.com/Art.nsf/O/5ZKDG3/$File/Pablo-Picasso-Portrait-of-Ambroise-Vollard-S.jpg"
    },
    {
        _id: "81",
        titulo: "El muchacho con la pipa",
        descripcion: "Pintura de Pablo Picasso que muestra a un joven con una pipa en una composición cubista, fusionando colores y formas para crear una figura dinámica.",
        categoria: ["cubismo", "retrato", "pintura"],
        artista: "Pablo Picasso",
        obra: "El muchacho con la pipa",
        fecha: "1905",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Cubismo, retrato, dinamismo"],
        imagen: "https://imagenes.elpais.com/resizer/v2/UOUKQBSQTF2PMEHS5VV22KMHCE.jpg?auth=b9722d4d24a78789e4fe7787e718fcab6040d97951399e2123ed3326e8373969&width=1960"
    },
    {
        _id: "82",
        titulo: "Mujer con sombrero",
        descripcion: "Pintura de Henri Matisse que, aunque no es estrictamente cubista, muestra influencias del cubismo en la fragmentación de formas y el uso del color.",
        categoria: ["cubismo", "retrato", "pintura"],
        artista: "Henri Matisse",
        obra: "Mujer con sombrero",
        fecha: "1905",
        fuente: "Museo de Arte Moderno, San Francisco",
        etiquetas: ["Cubismo, retrato, color"],
        imagen: "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/HMFLWAIK5FEKRD6XZYSGQS3AZQ.jpg"
    },
    {
        _id: "83",
        titulo: "El carnaval de Arlequín",
        descripcion: "Pintura de Juan Gris que representa una escena festiva con figuras y objetos en un estilo cubista, combinando formas y colores vibrantes.",
        categoria: ["cubismo", "fiesta", "pintura"],
        artista: "Juan Gris",
        obra: "El carnaval de Arlequín",
        fecha: "1912",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Cubismo, fiesta, geometría"],
        imagen: "https://cdn.pixabay.com/photo/2021/12/25/21/54/joan-miro-6893922_1280.jpg"
    },
    {
        _id: "84",
        titulo: "El perro ladrador",
        descripcion: "Pintura de Pablo Picasso que presenta un perro en una composición cubista, utilizando una paleta limitada de colores para crear un efecto dramático.",
        categoria: ["cubismo", "animal", "pintura"],
        artista: "Pablo Picasso",
        obra: "El perro ladrador",
        fecha: "1901",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Cubismo, perro, drama"],
        imagen: "https://i.etsystatic.com/22599579/r/il/4ac6bf/4843258642/il_fullxfull.4843258642_6nza.jpg"
    },
    {
        _id: "85",
        titulo: "Las tres mujeres",
        descripcion: "Pintura de Fernand Léger que muestra tres figuras femeninas en un entorno abstracto, explorando el cubismo en un estilo colorido y dinámico.",
        categoria: ["cubismo", "figura", "pintura"],
        artista: "Fernand Léger",
        obra: "Las tres mujeres",
        fecha: "1921",
        fuente: "Museo de Arte Moderno, Nueva York",
        etiquetas: ["Cubismo, figura, color"],
        imagen: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvZmVybmFuZC1sZWdlci10aGUtYnJlYWtmYXN0LTE5MjEuanBnIiwicmVzaXplLDIwMDAsMjAwMCJdfQ.5MJRQsYjbwtBAwVx9Y6CfgNRceValmSB7pHueyQXfps.jpg"
    },
    {
        _id: "86",
        titulo: "Los jugadores de cartas",
        descripcion: "Pintura de Paul Cézanne que, aunque es anterior al cubismo, influyó en el movimiento al descomponer figuras y formas en geometrías simples.",
        categoria: ["cubismo", "vida cotidiana", "pintura"],
        artista: "Paul Cézanne",
        obra: "Los jugadores de cartas",
        fecha: "1890-1892",
        fuente: "Museo de Orsay, París",
        etiquetas: ["Cubismo, influencia, figuras"],
        imagen: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvY2FyZF9wbGF5ZXJzLXBhdWxfY2V6YW5uZS5qcGciLCJyZXNpemUsMjAwMCwyMDAwIl19.-WaMNVUyALNHtlgbTPM5A8jmkt00wTtqmVlsx5oHu_U.jpg"
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
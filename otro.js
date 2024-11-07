// Función para abrir el modal de perfil
function openProfileModal() {
    const modal = new bootstrap.Modal(document.getElementById('editProfileModal'));
    modal.show();
}

// Función para previsualizar la imagen
function previewImage() {
    const file = document.getElementById('newProfileImage').files[0];
    const preview = document.getElementById('previewImage');
    const reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
        preview.style.display = 'block';
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = '';
        preview.style.display = 'none';
    }
}

// Función para guardar los cambios del perfil
function saveProfileChanges() {
    const username = document.getElementById("username").value;
    const location = document.getElementById("location").value;
    const bio = document.getElementById("bio").value;
    const fileInput = document.getElementById("newProfileImage");

    // Actualizar la interfaz con los nuevos valores en el encabezado
    document.querySelector("header h1").textContent = username;
    document.querySelector("header p:nth-of-type(1)").textContent = `Ubicación: ${location}`;
    document.querySelector("header p:nth-of-type(2)").textContent = `Biografía: ${bio}`;

    // Guardar los cambios en localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('location', location);
    localStorage.setItem('bio', bio);

    // Cambiar la imagen de perfil si se seleccionó una nueva
    if (fileInput.files[0]) {
        const reader = new FileReader();
        reader.onloadend = function () {
            document.getElementById("profileImage").src = reader.result;
            localStorage.setItem('profileImage', reader.result); // Guardar la imagen en localStorage
        };
        reader.readAsDataURL(fileInput.files[0]);
    }

    // Cerrar el modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('editProfileModal'));
    modal.hide();
}

// Función para publicar un comentario
function postComment() {
    const commentInput = document.getElementById("commentInput");
    const commentsList = document.getElementById("commentsList");

    const newCommentText = commentInput.value.trim();
    if (newCommentText) {
        const newComment = document.createElement("li");
        newComment.className = "list-group-item";
        newComment.textContent = newCommentText;

        commentsList.appendChild(newComment);
        commentInput.value = ""; // Limpiar el campo de entrada
    } else {
        alert("Por favor, escribe un comentario antes de publicar.");
    }
}

// Función para cargar datos desde localStorage al cargar la página
function loadProfileData() {
    const username = localStorage.getItem('username');
    const location = localStorage.getItem('location');
    const bio = localStorage.getItem('bio');
    const profileImage = localStorage.getItem('profileImage');

    if (username) document.querySelector("header h1").textContent = username;
    if (location) document.querySelector("header p:nth-of-type(1)").textContent = `Ubicación: ${location}`;
    if (bio) document.querySelector("header p:nth-of-type(2)").textContent = `Biografía: ${bio}`;
    if (profileImage) document.getElementById("profileImage").src = profileImage;
}

// Cargar los datos al cargar la página
window.onload = loadProfileData;
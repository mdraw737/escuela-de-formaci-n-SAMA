document.addEventListener('DOMContentLoaded', function() {
    // Validación de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'admin' && password === 'admin') {
                alert('Login exitoso');
                window.location.href = 'dashboard.html';
            } else {
                alert('Credenciales incorrectas');
            }
        });
    }

    // Agregar usuario
    const addUserForm = document.getElementById('addUserForm');
    const userList = document.getElementById('userList');
    if (addUserForm) {
        addUserForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;

            const li = document.createElement('li');
            li.textContent = `Usuario: ${newUsername}`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', function() {
                if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
                    li.remove();
                }
            });
            li.appendChild(deleteButton);
            userList.appendChild(li);

            addUserForm.reset();
        });
    }
});

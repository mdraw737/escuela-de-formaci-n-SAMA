const usuarios = [];

function agregarUsuario(usuario, contraseña) {
    usuarios.push({ usuario, contraseña });
}

function eliminarUsuario(usuario) {
    const index = usuarios.findIndex(u => u.usuario === usuario);
    if (index !== -1) {
        usuarios.splice(index, 1);
    }
}

function validarUsuario(usuario, contraseña) {
    return usuarios.some(u => u.usuario === usuario && u.contraseña === contraseña);
}






server.js




const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('vistas'));

app.get('/validarUsuario', (req, res) => {
    const { usuario, contraseña } = req.query;
    if (usuario === 'admin' && contraseña === 'admin') {
        res.json({ valido: true });
    } else {
        res.json({ valido: false });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

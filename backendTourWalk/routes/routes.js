const express = require('express')
const router  = express.Router();
const usuarioController =require('../controller/usuarioController');
const destinoController =require('../controller/destinoController');

router.post('/registrar-usuario', usuarioController.registrarUsuario);
router.post('/login-usuario', usuarioController.loginUsuario);
router.get('/consultar-usuarios', usuarioController.consultarUsuarios);
router.put('/actualizar-usuario', usuarioController.actualizarUsuario);
router.delete('/eliminar-usuario', usuarioController.eliminarUsuario)


router.post('/crear-destino', destinoController.crearDestino);
router.get('/listar-destinos', destinoController.obtenerDestinos);
router.put('/actualizar-destino/:id', destinoController.actualizarDestino);
router.delete('/eliminar-destino', destinoController.eliminarDestino);

module.exports= router;
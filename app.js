// app.js

const express = require('express');
const cors = require('cors');
const connectDB = require('./backend/config/database');
const path = require('path');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// 📁 Servir archivos estáticos desde la carpeta 'frontend'
app.use(express.static(path.join(__dirname, 'frontend')));

// Rutas de la API
app.use('/api/auth', require('./backend/routes/auth'));

// 📌 Ruta para cargar la página principal (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// 📌 Ruta para cargar el dashboard (dashboard.html)
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dashboard.html'));
});

// Rutas
app.use('/api', require('./backend/routes/asignatura'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT} 🚀`));

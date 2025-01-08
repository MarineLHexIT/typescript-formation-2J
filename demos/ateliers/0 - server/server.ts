import express from 'express'; // Import de la bibliothèque Express

const app = express(); // Création d'une application Express
const port = 3000; // Port d'écoute du serveur

// Route GET qui renvoie un message simple
app.get('/', (req, res) => {
    res.send('Hello, TypeScript!');
});

// Démarrage du serveur avec une fonction de callback
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importation des Routes

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Déclaration des routes de l'API


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});
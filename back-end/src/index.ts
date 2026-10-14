import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importation des Routes
import productRoutes from './routes/productRoutes.ts';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Déclaration des routes de l'API
app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});
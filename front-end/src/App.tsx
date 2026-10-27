import {Routes, Route, Navigate} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Products from './pages/Product';
import Material from './pages/Material';
import MaterialDetail from './pages/MaterialDetail';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

export default function App() {
  return (
    <CartProvider>
      <Routes>
        {/* Routes Client */}
        <Route path="/" element={<Home />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/materiel" element={<Material />} />
        <Route path="/materiel/:id" element={<MaterialDetail />} />
        <Route path="/produit/:id" element={<ProductDetail />} />
        <Route path="/panier" element={<Cart />} />
      </Routes>
    </CartProvider>  
  );
}
import {Routes, Route, Navigate} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Products from './pages/Product';
import Material from './pages/Material';
import MaterialDetail from './pages/MaterialDetail';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import AdminLogin from './pages/admin/Adminlogin';
import AdminLayout from './pages/admin/Adminlayout';
import ProtectedRoute from './pages/admin/ProtectedRoute';
import Admindashboard from './pages/admin/Admindashboard';
import AdminVentes from './pages/admin/AdminVentes';

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

        {/* Routes Connexion Admin */}
        <Route path="/login" element={<AdminLogin />} />

        {/* Routes Admin protégées */}
         <Route element={<ProtectedRoute />}>
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route index element={<Admindashboard />} />
            <Route path="ventes" element={<AdminVentes />} />
          </Route>
        </Route>

        {/* Redirection pour les routes non définies */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </CartProvider>  
  );
}
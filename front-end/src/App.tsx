import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Product';
import Material from './pages/Material';
import MaterialDetail from './pages/MaterialDetail';

export default function App() {
  return (
    <Routes>
      {/* Routes Client */}
      <Route path="/" element={<Home />} />
      <Route path="/produits" element={<Products />} />
      <Route path="/materiel" element={<Material />} />
      <Route path="/materiel/:id" element={<MaterialDetail />} />
    </Routes>
  );
}
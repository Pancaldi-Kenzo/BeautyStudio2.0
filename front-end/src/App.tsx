import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Product';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produits" element={<Products />} />
    </Routes>
  );
}
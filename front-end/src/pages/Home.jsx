import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Scissors } from 'lucide-react';
import '../styles/Home.css';

export default function Home() {
  const navigate = useNavigate();
  const clickCount = useRef(0);
  const timer = useRef(null);

  // Fonction de déclenchement secret (3 clics rapides)
  const handleSecretAdminAccess = () => {
    clickCount.current += 1;

    if (clickCount.current === 3) {
      navigate('/admin');
      clickCount.current = 0; // Réinitialise le compteur après la navigation
      if (timer.current) clearTimeout(timer.current);
      return;
    }
      
    // Réinitialise le compteur si on clique trop lentement (après 1 seconde)
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 1000);
  };

  return (
    <div className="home-container">
      <div className="home-overlay"></div>
      <div className="home-content">
        <h1 
          className="home-title" 
          onClick={handleSecretAdminAccess}
          style={{ cursor: 'pointer', userSelect: 'none' }}
          title=""
        >
          BeautyStudio
        </h1>
        <div className="home-button-container">
          <button className="home-card product" onClick={() => navigate('/produits')}>
            <Package size={48} color="#fff" />
            <span className="home-card-text">Produit</span>
          </button>
          <button className="home-card material" onClick={() => navigate('/materiel')}>
            <Scissors size={48} color="#fff" />
            <span className="home-card-text">MATERIEL</span>
          </button>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import '../../styles/admin/Adminlayout.css';

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminAuth');
    navigate('/');
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setSidebarOpen(false); // Ferme le menu sur mobile après un clic
  };

  return (
    <div className="admin-container">
      {/* Barre de navigation mobile avec menu burger */}
      <div className="admin-mobile-header">
        <span className="admin-mobile-title">Beauty Studio - Gérant</span>
        <button 
          className="admin-burger-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? '✕ Fermer' : '☰ Menu'}
        </button>
      </div>

      <div className="admin-layout-wrapper">
        {/* Barre latérale (Sidebar) */}
        <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div>
            <div className="admin-logo-circle">
              <span className="admin-logo-title">Beauty Studio</span>
              <span className="admin-logo-subtitle">Gérant</span>
            </div>
            <nav className="admin-nav">
              <button 
                className={`admin-side-btn ${location.pathname === '/admin' ? 'active' : ''}`} 
                onClick={() => handleNavClick('/admin')}
              >
                Tableau de Bord
              </button>
              <button 
                className={`admin-side-btn ${location.pathname === '/admin/stocks' ? 'active' : ''}`} 
                onClick={() => handleNavClick('/admin/stocks')}
              >
                Gestion des Stocks
              </button>
              <button 
                className={`admin-side-btn ${location.pathname === '/admin/ventes' ? 'active' : ''}`} 
                onClick={() => handleNavClick('/admin/ventes')}
              >
                Ventes
              </button>
              <button 
                className={`admin-side-btn ${location.pathname === '/admin/parametres' ? 'active' : ''}`} 
                onClick={() => handleNavClick('/admin/parametres')}
              >
                Paramètres
              </button>
            </nav>
          </div>

          {/* Boutons du bas (Accueil Client & Déconnexion) */}
          <div className="admin-sidebar-bottom">
            <button 
              onClick={() => navigate('/')}
              className="admin-side-btn admin-btn-client"
            >
              Accueil Client
            </button>

            <button 
              onClick={handleLogout}
              className="admin-side-btn admin-btn-logout"
            >
              Se déconnecter
            </button>
          </div>
        </aside>

        {/* Zone de contenu principale */}
        <main className="admin-main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
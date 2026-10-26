import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProductDetail.css';

interface MaterialDetailType {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  benefits?: string;
}

export default function MaterialDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [material, setMaterial] = useState<MaterialDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  
  const hasLogged = useRef(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/materials/${id}`)
      .then((res) => {
        setMaterial(res.data);
        setLoading(false);

        if (!hasLogged.current) {
          hasLogged.current = true;
          axios.post('http://localhost:5000/api/admin/consultations', {
            itemId: res.data.id,
            itemName: res.data.name,
            itemType: 'material' // Indiqué en tant que matériel
          }).catch(err => console.error("Erreur enregistrement consultation :", err));
        }
      })
      .catch((err) => {
        console.error('Erreur chargement détail matériel :', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!material) return <p>Matériel introuvable</p>;

  const benefitsList = material.benefits 
    ? material.benefits.split('\n').filter(Boolean) 
    : [];

  return (
    <div className="detail-container">
      <header className="detail-header">
        <div className="detail-logo-circle">
          <span className="detail-logo-title">Beauty Studio</span>
          <span className="detail-logo-subtitle">Coiffure</span>
        </div>
      </header>

      <div className="detail-main">
        <div className="detail-image-section">
          <img src={material.image_url} alt={material.name} className="detail-img" />
          <div className="detail-img-reflection"></div>
        </div>

        <div className="detail-info-section">
          <h1 className="detail-title">{material.name}</h1>
          <h2 className="detail-brand">Beauty Studio</h2>
          <span className="detail-price">{material.price}€</span>
          <p className="detail-desc">{material.description}</p>
          
          {benefitsList.length > 0 && (
            <div className="detail-benefits">
              <h3>Bénéfices</h3>
              <ul>
                {benefitsList.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
          <button className="detail-add-btn">AJOUTER</button>
          <button className="detail-back-btn" onClick={() => navigate(-1)}>RETOUR</button>
        </div>
      </div>
    </div>
  );
}
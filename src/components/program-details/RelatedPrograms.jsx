import { Link } from 'react-router-dom';
import { getProgramColor } from './mockDetails';

function RelatedPrograms({ programs }) {
  if (!programs?.length) return null;
  return (
    <div className="pd-card">
      <div className="pd-card-header">
        <i className="bi bi-arrow-repeat" /><h2>Programmes similaires</h2>
      </div>
      <div className="pd-related-scroll">
        {programs.map((p) => (
          <Link key={p.id} to={`/programs/${p.id}`} style={{textDecoration:'none',color:'inherit'}}>
            <div className="pc-card" style={{marginBottom:0}}>
              <div className="pc-card-image" style={{height:120,background:`linear-gradient(135deg, ${getProgramColor(p.id)}22, ${getProgramColor(p.id)}44)`}}>
                <i className="bi bi-trophy pc-card-image-icon" />
              </div>
              <div className="pc-card-body" style={{padding:'.85rem'}}>
                <div className="pc-card-category" style={{fontSize:'.6rem'}}>{p.category}</div>
                <h4 className="pc-card-title" style={{fontSize:'.9rem'}}>{p.title}</h4>
                <div style={{display:'flex',alignItems:'center',gap:'.5rem',marginTop:'.35rem'}}>
                  <span className="pc-card-meta-item"><i className="bi bi-calendar3" />{p.weeks} sem.</span>
                  <span className="pc-card-price" style={{fontSize:'.85rem',marginLeft:'auto'}}>{p.price?.toLocaleString()} FCFA</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default RelatedPrograms;

import { Link } from 'react-router-dom';
import { programs } from '../programs/catalog/mockPrograms';

function ProgramHero({ program, tags }) {
  const colorMap = { Débutant: 'success', Intermédiaire: 'warning', Avancé: 'danger' };
  const badgeType = colorMap[program.difficulty] || 'success';

  return (
    <section className="pd-hero">
      <div className="pd-hero-blob pd-hero-blob--1" />
      <div className="pd-hero-blob pd-hero-blob--2" />
      <div className="container pd-hero-content">
        <nav style={{marginBottom:'1rem',fontSize:'.8rem'}}>
          <Link to="/" style={{color:'rgba(255,255,255,.7)',textDecoration:'none'}}>Accueil</Link>
          <span style={{color:'rgba(255,255,255,.4)',margin:'0 .5rem'}}>/</span>
          <Link to="/programs/catalog" style={{color:'rgba(255,255,255,.7)',textDecoration:'none'}}>Programmes</Link>
          <span style={{color:'rgba(255,255,255,.4)',margin:'0 .5rem'}}>/</span>
          <span style={{color:'#fff'}}>{program.title}</span>
        </nav>

        <div className="pd-hero-badges">
          <span className="pc-badge pc-badge--info">{program.category}</span>
          <span className={`pc-badge pc-badge--${badgeType}`}>{program.difficulty}</span>
          <span className="pc-badge pc-badge--success">{program.type || 'En présentiel'}</span>
          {program.oldPrice && <span className="pc-badge pc-badge--warning">-{Math.round((1 - program.price / program.oldPrice) * 100)}%</span>}
        </div>

        <h1>{program.title}</h1>

        <div style={{display:'flex',alignItems:'center',gap:'.75rem',flexWrap:'wrap',marginTop:'.5rem'}}>
          <div style={{display:'flex',alignItems:'center',gap:'.35rem'}}>
            <div style={{width:28,height:28,borderRadius:'50%',background:'rgba(255,255,255,.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.65rem',fontWeight:700,color:'#fff'}}>
              {program.coach?.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase() || program.coachName?.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase()}
            </div>
            <span style={{color:'rgba(255,255,255,.85)',fontSize:'.85rem'}}>{program.coach || program.coachName}</span>
          </div>
          <span style={{color:'rgba(255,255,255,.5)'}}>|</span>
          <span style={{color:'rgba(255,255,255,.7)',fontSize:'.8rem'}}><i className="bi bi-geo-alt" /> {program.city || program.coachCity}</span>
          <span style={{color:'rgba(255,255,255,.5)'}}>|</span>
          <span style={{color:'rgba(255,255,255,.7)',fontSize:'.8rem'}}><i className="bi bi-star-fill" style={{color:'#F59E0B'}} /> {program.rating?.toFixed(1)} ({program.reviews || program.reviewCount || 0} avis)</span>
          <span style={{color:'rgba(255,255,255,.5)'}}>|</span>
          <span style={{color:'rgba(255,255,255,.7)',fontSize:'.8rem'}}><i className="bi bi-people" /> {program.enrolled || program.enrolledCount || 0} participants</span>
        </div>
      </div>
    </section>
  );
}
export default ProgramHero;

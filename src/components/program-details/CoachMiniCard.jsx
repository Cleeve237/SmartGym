import { Link } from 'react-router-dom';

function CoachMiniCard({ program }) {
  const initials = (program.coachName || program.coach)?.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase();
  return (
    <div className="pd-coach-mini">
      <div className="pd-coach-mini-avatar" style={{background:'var(--color-primary)'}}>{initials}</div>
      <div style={{flex:1}}>
        <div style={{fontSize:'.85rem',fontWeight:600}}>{program.coachName || program.coach}</div>
        <div style={{fontSize:.75,color:'var(--color-gray-500)'}}>Coach certifié</div>
      </div>
      <Link to={`/coaches/${program.coachId || '1'}`} className="pd-btn pd-btn--outline" style={{padding:'.35rem .75rem',fontSize:'.75rem',width:'auto'}}>Profil</Link>
    </div>
  );
}
export default CoachMiniCard;

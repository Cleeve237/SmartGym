import { useState } from 'react';

const THUMB_COLORS = ['#16A34A44','#F9731644','#8B5CF644','#DC262644'];

function ProgramGallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="pd-gallery">
      <div className="pd-gallery-main" style={{background:`linear-gradient(135deg, ${THUMB_COLORS[0]}, ${THUMB_COLORS[1]})`}}>
        <i className="bi bi-trophy pd-gallery-main-icon" />
      </div>
      <div className="pd-gallery-thumbs">
        {[0,1,2,3].map((i) => (
          <button
            key={i} onClick={() => setActive(i)}
            className={`pd-gallery-thumb ${active === i ? 'active' : ''}`}
            style={{background:`linear-gradient(135deg, ${THUMB_COLORS[i]}, ${THUMB_COLORS[(i+1)%4]})`}}
          >
            <i className="bi bi-image pd-gallery-thumb-icon" />
          </button>
        ))}
      </div>
    </div>
  );
}
export default ProgramGallery;

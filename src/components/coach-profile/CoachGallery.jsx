import { useState } from 'react';

const COLORS = ['#16A34A','#F97316','#2563EB','#8B5CF6','#EC4899','#14B8A6','#E11D48'];

export default function CoachGallery({ name }) {
  const [active, setActive] = useState(0);
  const images = Array.from({ length: 5 }, (_, i) => ({ id: i, bg: COLORS[i % COLORS.length], label: `${name} - ${i + 1}` }));
  const main = images[active];
  return (
    <div className="cp-card">
      <div className="cp-card-header">
        <i className="bi bi-images" />
        <h2>Galerie</h2>
      </div>
      <div className="cp-gallery-main" style={{ background: `linear-gradient(135deg, ${main.bg}, ${main.bg}88)` }}>
        <span style={{ color: '#fff', fontSize: 19, fontWeight: 700 }}>{main.label}</span>
      </div>
      <div className="cp-gallery-thumbs">
        {images.map((img, i) => (
          <div
            key={img.id}
            className={`cp-gallery-thumb ${i === active ? 'active' : ''}`}
            style={{ background: `linear-gradient(135deg, ${img.bg}, ${img.bg}88)` }}
            onClick={() => setActive(i)}
          >
            <span style={{ color: '#fff', fontSize: 10, fontWeight: 600 }}>{img.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

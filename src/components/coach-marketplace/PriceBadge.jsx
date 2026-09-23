function PriceBadge({ price, duration }) {
  return (
    <span className="mp-card-price">
      {price?.toLocaleString('fr-FR')} FCFA
      {duration && <small> / {duration}</small>}
    </span>
  );
}

export default PriceBadge;

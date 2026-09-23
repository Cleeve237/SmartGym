function ProgramPrice({ price, oldPrice }) {
  return (
    <div>
      <span className="pc-card-price">{price?.toLocaleString()} <small style={{fontWeight:400,fontSize:'.75rem'}}>FCFA</small></span>
      {oldPrice && <span className="pc-card-old-price">{oldPrice.toLocaleString()} FCFA</span>}
    </div>
  );
}
export default ProgramPrice;

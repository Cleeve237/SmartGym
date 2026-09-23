import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkClass = ({ isActive }) =>
    `nav-link${isActive ? ' active' : ''}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top gradient-dark" style={{ zIndex: 'var(--z-sticky)' }}>
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
          <i className="bi bi-activity fs-4" style={{ color: 'var(--color-primary)' }} />
          <span>SmartGym</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#smartgym-navbar"
          aria-controls="smartgym-navbar"
          aria-expanded="false"
          aria-label="Menu de navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="smartgym-navbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={linkClass} to="/" end>
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/coaches">
                Coachs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/programmes">
                Programmes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/about">
                A propos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2">
            <NavLink to="/login" className="btn btn-outline-light btn-sm">
              Connexion
            </NavLink>
            <NavLink to="/register" className="btn btn-light btn-sm">
              Inscription
            </NavLink>
            <NavLink to="/coaches" className="btn btn-primary btn-sm ms-lg-2">
              <i className="bi bi-geo-alt me-1" />
              Trouver un coach
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

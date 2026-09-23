function MobileAppSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span
              className="d-inline-block px-3 py-1 rounded-pill mb-3"
              style={{
                backgroundColor: 'var(--color-accent-lighter)',
                color: 'var(--color-accent)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-semibold)',
              }}
            >
              Bientot disponible
            </span>
            <h2 className="mb-4">
              Votre coach dans votre poche
            </h2>
            <p style={{ color: 'var(--color-gray-600)', fontSize: 'var(--font-size-lg)', lineHeight: '1.7' }}>
              Telechargez l&apos;application SmartGym et accedez a vos coachs,
              programmes et reservations partout et a tout moment.
            </p>

            <ul className="list-unstyled mb-4">
              {[
                'Suivez vos progres en temps reel',
                'Recevez des notifications de seance',
                'Communiquez directement avec votre coach',
              ].map((item) => (
                <li key={item} className="d-flex align-items-center gap-2 mb-2">
                  <i className="bi bi-check-circle-fill" style={{ color: 'var(--color-primary)' }} />
                  <span style={{ color: 'var(--color-gray-700)' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="d-flex flex-wrap gap-3">
              <button
                type="button"
                className="btn btn-dark btn-lg d-flex align-items-center gap-2 px-4"
                style={{ borderRadius: 'var(--radius-lg)' }}
              >
                <i className="bi bi-google-play fs-4" />
                <div className="text-start">
                  <small style={{ fontSize: '0.65rem', opacity: 0.7 }}>Disponible sur</small>
                  <div style={{ fontWeight: 'var(--font-weight-semibold)', lineHeight: 1.2 }}>Google Play</div>
                </div>
              </button>
              <button
                type="button"
                className="btn btn-dark btn-lg d-flex align-items-center gap-2 px-4"
                style={{ borderRadius: 'var(--radius-lg)' }}
              >
                <i className="bi bi-apple fs-4" />
                <div className="text-start">
                  <small style={{ fontSize: '0.65rem', opacity: 0.7 }}>Telecharger sur</small>
                  <div style={{ fontWeight: 'var(--font-weight-semibold)', lineHeight: 1.2 }}>App Store</div>
                </div>
              </button>
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center">
            <div
              className="position-relative"
              style={{
                width: '280px',
                height: '560px',
                borderRadius: '40px',
                border: '8px solid var(--color-dark)',
                backgroundColor: 'var(--color-gray-900)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-2xl)',
              }}
            >
              {/* Notch */}
              <div
                className="position-absolute"
                style={{
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '24px',
                  backgroundColor: 'var(--color-dark)',
                  borderRadius: '0 0 16px 16px',
                  zIndex: 2,
                }}
              />

              {/* Ecran */}
              <div
                className="w-100 h-100 d-flex flex-column align-items-center justify-content-center p-4"
                style={{
                  background: 'linear-gradient(180deg, var(--color-primary) 0%, var(--color-primary-hover) 100%)',
                }}
              >
                <i className="bi bi-activity mb-3" style={{ fontSize: '3rem', color: 'var(--color-white)' }} />
                <div style={{ color: 'var(--color-white)', fontWeight: 'var(--font-weight-bold)', fontSize: 'var(--font-size-xl)' }}>
                  SmartGym
                </div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--font-size-sm)' }}>
                  Votre coach personnel
                </div>

                <div className="w-100 mt-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="d-flex align-items-center gap-2 p-2 mb-2 rounded-3"
                      style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                    >
                      <div
                        className="rounded-circle"
                        style={{ width: '36px', height: '36px', backgroundColor: 'rgba(255,255,255,0.2)' }}
                      />
                      <div className="flex-grow-1">
                        <div className="rounded mb-1" style={{ height: '8px', width: '80%', backgroundColor: 'rgba(255,255,255,0.3)' }} />
                        <div className="rounded" style={{ height: '6px', width: '50%', backgroundColor: 'rgba(255,255,255,0.2)' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileAppSection;

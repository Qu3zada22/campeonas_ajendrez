const FLOATERS = ['♛', '♞', '♜', '♝', '♟', '♚']

function Hero({ total, firstYear, lastYearLabel }) {
  return (
    <header className="hero">
      <div className="hero-board-wrap" aria-hidden="true">
        <div className="hero-board" />
      </div>
      <div className="hero-floaters" aria-hidden="true">
        {FLOATERS.map((p, i) => (
          <span key={i} className={`floater floater-${i}`}>
            {p}
          </span>
        ))}
      </div>

      <div className="hero-content">
        <p className="hero-kicker">Ajedrez · {firstYear}–{lastYearLabel}</p>
        <h1 className="hero-title">Reinas del Tablero</h1>
        <p className="hero-subtitle">
          Una línea de tiempo de las {total} campeonas mundiales de ajedrez
          femenino: quiénes fueron, a quién vencieron y cómo jugaban.
        </p>
        <a className="hero-cta" href="#timeline">
          <span>Empezar la partida</span>
          <span className="hero-cta-arrow">↓</span>
        </a>
      </div>

      <div className="hero-scrim" aria-hidden="true" />
    </header>
  )
}

export default Hero

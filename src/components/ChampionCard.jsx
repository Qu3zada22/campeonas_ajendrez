import { useEffect, useRef, useState } from 'react'

function ChampionCard({ champion, index, side }) {
  const [open, setOpen] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    // Safety net: content must never stay invisible if IntersectionObserver
    // is unsupported, throttled, or otherwise fails to fire.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return undefined
    }

    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(node)

    const fallback = setTimeout(() => setInView(true), 2500)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return (
    <article
      ref={ref}
      className={`champion-row side-${side} ${inView ? 'is-visible' : ''}`}
      style={{ '--i': index }}
    >
      <div className="row-node">
        <span className="node-dot" title={champion.years}>
          {champion.piece}
        </span>
      </div>

      <div className="row-card-wrap">
        <div className="champion-card">
          <div className="card-photo">
            <img
              src={champion.image}
              alt={`Retrato de ${champion.name}`}
              loading="lazy"
              style={
                champion.imagePosition
                  ? { objectPosition: champion.imagePosition }
                  : undefined
              }
            />
            <span className="card-photo-frame" aria-hidden="true" />
          </div>

          <div className="card-body">
            <p className="card-years">{champion.years}</p>
            <h3 className="card-name">{champion.name}</h3>
            <p className="card-country">{champion.country}</p>

            <dl className="card-facts">
              <div>
                <dt>Rival por el título</dt>
                <dd>{champion.opponent}</dd>
              </div>
              <div>
                <dt>Reinado</dt>
                <dd>{champion.duration}</dd>
              </div>
            </dl>

            <button
              type="button"
              className="card-toggle"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? 'Cerrar la jugada ▲' : 'Ver la partida completa ▼'}
            </button>

            <div className={`card-expand ${open ? 'is-open' : ''}`}>
              <div className="card-expand-inner">
                <p className="card-detail">
                  <span className="card-detail-label">El match: </span>
                  {champion.matchDetail}
                </p>
                <p className="card-detail card-detail-fact">
                  <span className="card-detail-label">Cómo jugaba: </span>
                  {champion.funFact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ChampionCard

import { useState } from 'react'
import { sources } from '../data/champions'

const EXTRA_SOURCES = [
  'Wikipedia (biografías individuales de cada campeona)',
  'FIDE Chess Museum (museum.fide.com)',
]

function SourcesFooter() {
  const [open, setOpen] = useState(false)

  return (
    <footer className="sources">
      <button
        type="button"
        className="sources-toggle"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sources-toggle-kicker">Colofón</span>
        <span className="sources-toggle-title">
          ¿Por qué las listas no siempre coinciden?
        </span>
        <span className="sources-toggle-icon">{open ? '▲' : '▼'}</span>
      </button>

      <div className={`sources-expand ${open ? 'is-open' : ''}`}>
        <div className="sources-expand-inner">
          <div className="sources-note">
            <p className="sources-dropcap">
              No todas las federaciones ni todos los medios reconocen
              exactamente el mismo conteo de campeonas. Comparando la lista de{' '}
              <a
                href="https://www.chess.com/article/view/womens-world-chess-champions"
                target="_blank"
                rel="noreferrer"
              >
                Chess.com
              </a>{' '}
              con el PDF de la{' '}
              <a
                href="https://www.ajedrezaragon.org/uploads/33029a9e-a372-4801-926b-324a0b499a7c/Campeonas_del_mundo.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Federación Aragonesa de Ajedrez
              </a>
              , las 17 campeonas y su orden coinciden — pero aparecen
              pequeñas diferencias entre ambas.
            </p>

            <blockquote className="sources-pullquote">
              El PDF acorta un año el segundo reinado de Xie Jun (1999–2000
              en vez de 1999–2001) y agrupa a las primeras campeonas
              soviéticas como "URSS", mientras otras fuentes las describen
              por nacionalidad individual.
            </blockquote>

            <p>
              Ninguna fuente pone en duda el reinado inaugural de Vera
              Menchik, aunque su título se decidió por torneos y no por un
              match 1 contra 1 como los posteriores — una diferencia de
              formato que a veces alimenta el debate sobre qué cuenta como
              "campeonato mundial". El resultado más reciente —Ju Wenjun
              reteniendo su corona ante Tan Zhongyi en abril de 2025— está
              confirmado en la página oficial de la{' '}
              <a
                href="https://womenworldchampionship2025.fide.com/"
                target="_blank"
                rel="noreferrer"
              >
                FIDE
              </a>
              .
            </p>
          </div>

          <div className="sources-list">
            <h3>Fuentes consultadas</h3>
            <ol>
              {sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
              {EXTRA_SOURCES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <p className="sources-credit">
        Anggie Quezada - 23643 · Imágenes de Wikimedia Commons.
      </p>
    </footer>
  )
}

export default SourcesFooter

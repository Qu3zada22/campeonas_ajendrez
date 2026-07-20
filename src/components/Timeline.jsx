import ChampionCard from './ChampionCard'

function Timeline({ champions }) {
  return (
    <section id="timeline" className="timeline">
      <div className="timeline-intro">
        <h2>La línea de sucesión</h2>
        <p>
          Toca <strong>“Ver la partida completa”</strong> en cada tarjeta para
          conocer el match, la rival y el estilo de juego de cada campeona.
        </p>
      </div>

      <div className="timeline-track">
        <div className="timeline-spine" aria-hidden="true" />
        {champions.map((champion, i) => (
          <ChampionCard
            key={champion.id}
            champion={champion}
            index={i}
            side={i % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  )
}

export default Timeline

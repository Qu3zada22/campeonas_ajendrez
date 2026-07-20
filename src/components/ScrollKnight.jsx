import { useEffect, useState } from 'react'

function ScrollKnight() {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    let ticking = false

    function update() {
      const el = document.documentElement
      const scrollable = el.scrollHeight - el.clientHeight
      const pct = scrollable > 0 ? el.scrollTop / scrollable : 0
      setProgress(Math.min(1, Math.max(0, pct)))
      setScrolled(el.scrollTop > window.innerHeight * 0.4)
      setAtBottom(scrollable > 0 && el.scrollTop / scrollable > 0.98)
      ticking = false
    }

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  function goTo(position) {
    window.scrollTo({
      top:
        position === 'top'
          ? 0
          : document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }

  return (
    <div className="quick-nav">
      <button
        type="button"
        className={`quick-nav-btn ${scrolled ? 'is-active' : ''}`}
        onClick={() => goTo('top')}
        aria-label="Ir al inicio"
        title="Ir al inicio"
        disabled={!scrolled}
      >
        ♔<span className="quick-nav-arrow">▲</span>
      </button>

      <div
        className={`scroll-knight ${scrolled ? 'is-visible' : ''}`}
        style={{ '--progress': progress }}
        aria-hidden="true"
      >
        <div className="scroll-knight-track">
          <span className="scroll-knight-piece">♞</span>
        </div>
      </div>

      <button
        type="button"
        className={`quick-nav-btn ${atBottom ? '' : 'is-active'}`}
        onClick={() => goTo('bottom')}
        aria-label="Ir al final"
        title="Ir al final"
        disabled={atBottom}
      >
        ♚<span className="quick-nav-arrow">▼</span>
      </button>
    </div>
  )
}

export default ScrollKnight

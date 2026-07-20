import Hero from './components/Hero'
import Timeline from './components/Timeline'
import ScrollKnight from './components/ScrollKnight'
import SourcesFooter from './components/SourcesFooter'
import { champions } from './data/champions'
import './App.css'

function App() {
  return (
    <>
      <Hero total={champions.length} firstYear="1927" lastYearLabel="hoy" />
      <Timeline champions={champions} />
      <SourcesFooter />
      <ScrollKnight />
    </>
  )
}

export default App

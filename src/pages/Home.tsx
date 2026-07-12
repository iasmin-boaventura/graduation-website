import { Gallery } from '../components/gallery/Gallery'
import { Hero } from '../components/hero/Hero.tsx'
import { PartyInfo } from '../components/party/PartyInfo'
import { RSVP } from '../components/rsvp/RSVP'
import { TCC } from '../components/tcc/TCC'
import { Timeline } from '../components/timeline/Timeline'

function Home() {
  return (
    <>
      <Hero />
      <Timeline />
      <Gallery />
      <TCC />
      <PartyInfo />
      <RSVP />
    </>
  )
}

export default Home
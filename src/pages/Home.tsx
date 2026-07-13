import { Gallery } from "../components/gallery/Gallery";
import { Hero } from "../components/hero/Hero";
import { PartyInfo } from "../components/party/PartyInfo";
import { RSVP } from "../components/rsvp/RSVP";
import { TCC } from "../components/tcc/TCC";
import { Timeline } from "../components/timeline/Timeline";

function Home() {
  return (
    <>
      <Hero />
      <PartyInfo />
      <RSVP />
      <Timeline />
      <Gallery />
      <TCC />
    </>
  );
}

export default Home;
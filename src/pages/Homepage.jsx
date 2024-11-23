import CaseStudies from "../components/CaseStudies";
import Conclusion from "../components/ConclusionPage";
import Guides from "../components/Guides";
import Landingpage from "../components/LandingPage";
import Maps from "../components/Maps";
import NativePlants from "../components/NativePlants";
import Overview from "../components/Overview";
import Photos from "../components/Photos";
import Calculations from "../components/Calculations";

const Homepage = () => {
  return (
    <>
      <main className="min-h-screen">
        <section id="home">
          <Landingpage />
        </section>

        <section id="overview">
          <Overview />
        </section>

        <section id="guides">
          <Guides />
        </section>

        <section>
          <Calculations />
        </section>

        <section id="maps">
          <Maps />
        </section>

        <section id="plants">
          <NativePlants />
        </section>

        <section id="case">
          <CaseStudies />
        </section>

        <section id="photos">
          <Photos />
        </section>

        <section id="conclusion">
          <Conclusion />
        </section>
      </main>
    </>
  );
};

export default Homepage;

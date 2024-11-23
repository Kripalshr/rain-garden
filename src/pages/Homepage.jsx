import Guides from "../components/Guides";
import Landingpage from "../components/LandingPage";
import Maps from "../components/Maps";
import NativePlants from "../components/NativePlants";
import Overview from "../components/Overview";

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

        <section id="maps">
          <Maps />
        </section>

        <section id="guides">
          <Guides />
        </section>

        <section id="plants">
          <NativePlants />
        </section>

        <section
          id="stories"
          className="h-screen bg-yellow-100 flex items-center justify-center"
        >
          <h1 className="text-4xl">Stories</h1>
        </section>
      </main>
    </>
  );
};

export default Homepage;

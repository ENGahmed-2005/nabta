import Navbar from "../components/Navbar/Navbar.jsx";
import RailLabel from "../components/shared/RailLabel.jsx";
import CursorDot from "../components/shared/CursorDot.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Projects from "../components/Projects/Projects.jsx";
import Team from "../components/Team/Team.jsx";
import Services from "../components/Services/Services.jsx";
import About from "../components/About/About.jsx";
import Technologies from "../components/Technologies/Technologies.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Home() {
  return (
    <>
      <CursorDot />
      <RailLabel />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Team />
        <Services />
        <About />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

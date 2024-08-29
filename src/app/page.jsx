import Hero from "../components/Hero";
import About from "../components/About";
import CallToAction from "../components/CallToAction";
import LatestJobPost from "../components/Jobs";
import ScrollUp from "../components/Common/ScrollUp";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Team from "../components/Team";
import Admin from "../components/Admin";
import Services from "../components/Service";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <About />
      <Services />
      <CallToAction />
      <LatestJobPost />
      <Testimonials />
      <Faq />
      <Admin />
      <Team />
      <Contact />
    </>
  );
}

import Hero from "../components/Hero";
import About from "../components/About";
import CallToAction from "../components/CallToAction";
import LatestJobPost from "../components/Jobs";
import ScrollUp from "../components/Common/ScrollUp";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <About />
      <CallToAction />
      <LatestJobPost />
      <Testimonials />
      <Faq />
      <Team />
      <Contact />
    </>
  );
}

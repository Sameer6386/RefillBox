import About from "../../../components/About";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import Team from "../../../components/Team";

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us " />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;

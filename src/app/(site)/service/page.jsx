import Breadcrumb from "../../../components/Common/Breadcrumb";
import Services from "../../../components/Service";
import CallToAction from "../../../components/CallToAction";
import Footer from "../../../components/Footer";
const ServicePage = () => {
  return (
    <>
      <Breadcrumb pageName="Service Page" />
      <Services />
      <CallToAction />
      <Footer />
    </>
  );
};

export default ServicePage;

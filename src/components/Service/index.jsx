import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";

const serviceData = [
  {
    id: 1,
    title: "Job Search Assistance",
    description:
      "Our platform helps you find the best job opportunities tailored to your skills and preferences. We provide personalized job recommendations and advanced search tools to streamline your job hunt.",
    icon: "/images/logo/logo.jpg",
  },
  {
    id: 2,
    title: "Resume Optimization",
    description:
      "Get your resume noticed by top employers. Our resume optimization tools ensure that your application stands out and meets industry standards.",
    icon: "/images/logo/logo.jpg",
  },
  {
    id: 3,
    title: "Interview Coaching",
    description:
      "Prepare for interviews with confidence. Our expert coaches provide you with the tools and guidance you need to succeed in your job interviews.",
    icon: "/images/logo/logo.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-cover bg-center dark:bg-dark-2 md:py-[120px] bg-[url('/images/backgrounds/services-bg.jpg')]">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Our Services"
          title="How We Can Help You"
          paragraph="Explore the services we offer to help you land your dream job. Our tools and resources are designed to guide you through every step of the job search process."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap justify-center gap-8 lg:mt-20">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="max-w-sm p-6 bg-white rounded-lg shadow-lg dark:bg-dark-3 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="mb-4 w-16 h-16 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-4 text-center dark:text-white">
                {service.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <button className="block mx-auto mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

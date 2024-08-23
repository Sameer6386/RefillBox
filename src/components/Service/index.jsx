import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";

const serviceData = [
  {
    id: 1,
    title: "Job Search Assistance",
    description:
      "Our platform helps you find the best job opportunities tailored to your skills and preferences. We provide personalized job recommendations and advanced search tools to streamline your job hunt.",
    icon: "/images/services/job-search.png",
  },
  {
    id: 2,
    title: "Resume Optimization",
    description:
      "Get your resume noticed by top employers. Our resume optimization tools ensure that your application stands out and meets industry standards.",
    icon: "/images/services/resume-optimization.png",
  },
  {
    id: 3,
    title: "Interview Coaching",
    description:
      "Prepare for interviews with confidence. Our expert coaches provide you with the tools and guidance you need to succeed in your job interviews.",
    icon: "/images/services/interview-coaching.png",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Our Services"
          title="How We Can Help You"
          paragraph="Explore the services we offer to help you land your dream job. Our tools and resources are designed to guide you through every step of the job search process."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {serviceData.map((service) => (
            <SingleService key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

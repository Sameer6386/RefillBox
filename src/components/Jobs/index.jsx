import SectionTitle from "../Common/SectionTitle";
import LatestJobPost from "./SingleJob";

const jobPostData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechHire",
    location: "San Francisco, CA",
    description:
      "We are looking for a skilled frontend developer with experience in React and Tailwind CSS.",
    logo: "/images/companies/company-01.png",
    postedDate: "August 20, 2024",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Innovate Corp",
    location: "New York, NY",
    description:
      "Join our team as a backend developer. Experience with Node.js and MongoDB is required.",
    logo: "/images/companies/company-02.png",
    postedDate: "August 19, 2024",
  },
  {
    id: 3,
    title: "Product Manager",
    company: "SuccessPath",
    location: "Austin, TX",
    description:
      "We are hiring a product manager to lead our new product line. Prior experience in product management is a must.",
    logo: "/images/companies/company-03.png",
    postedDate: "August 18, 2024",
  },
];

const LatestJobPosts = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Latest Job Posts"
          title="Explore New Opportunities"
          paragraph="Discover the latest job openings tailored to your skills and experience. Stay ahead in your career with these opportunities."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {jobPostData.map((job) => (
            <LatestJobPost key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobPosts;

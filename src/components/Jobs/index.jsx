import SectionTitle from "../Common/SectionTitle";
import Image from "next/image"; // Import the Image component

const jobPostData = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechHire",
    location: "San Francisco, CA",
    description:
      "We are looking for a skilled frontend developer with experience in React and Tailwind CSS.",
    logo: "/images/job/uideck-white.svg",
    postedDate: "August 20, 2024",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Innovate Corp",
    location: "New York, NY",
    description:
      "Join our team as a backend developer. Experience with Node.js and MongoDB is required.",
    logo: "/images/job/graygrids-white.svg",
    postedDate: "August 19, 2024",
  },
  {
    id: 3,
    title: "Product Manager",
    company: "SuccessPath",
    location: "Austin, TX",
    description:
      "We are hiring a product manager to lead our new product line. Prior experience in product management is a must.",
    logo: "images/job/ayroui-white.svg",
    postedDate: "August 18, 2024",
  },
];

const LatestJobPosts = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-dark-2 md:py-[120px]">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Latest Job Posts"
          title="Explore New Opportunities"
          paragraph="Discover the latest job openings tailored to your skills and experience. Stay ahead in your career with these opportunities."
          width="640px"
          center
        />

        <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-20">
          {jobPostData.map((job) => (
            <div
              key={job.id}
              className="p-6 bg-white dark:bg-dark-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={48} // Specify width
                  height={48} // Specify height
                  className="mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold dark:text-white">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {job.company} - {job.location}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                {job.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Posted on {job.postedDate}
              </p>
              <button className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-200">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobPosts;

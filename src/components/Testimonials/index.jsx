import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData = [
  {
    id: 1,
    name: "Sabo Masties",
    designation: "Recruiter @ TechHire",
    content:
      "This platform has revolutionized the way we connect with top talent. The user experience is seamless and intuitive. It’s the perfect tool for any job seeker looking to stand out.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Margin Gesmu",
    designation: "Career Coach @ SuccessPath",
    content:
      "I’ve seen a significant increase in job opportunities for my clients since using this site. The interface is clean, and the resources are incredibly helpful for navigating the job market.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "William Smith",
    designation: "Hiring Manager @ Innovate Corp",
    content:
      "Our recruitment process has become much more efficient thanks to this platform. The features and tools provided are exactly what we need to find the best candidates quickly and effectively.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Users Say"
          paragraph="Hear from our users who have successfully navigated their job search using our platform. Their stories reflect the impact and effectiveness of our tools and resources."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import Image from "next/image";

const SingleService = ({ service }) => {
  const { title, description, icon } = service;

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]"
        data-wow-delay=".1s"
      >
        <div className="mb-[18px] flex items-center gap-[2px]">
          <Image src={icon} alt={title} width={50} height={50} />
        </div>

        <h3 className="mb-4 text-lg font-semibold text-dark dark:text-white">
          {title}
        </h3>

        <p className="text-base text-body-color dark:text-dark-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SingleService;

import Image from "next/image";

const jobIcon = (
  <svg width="18" height="18" viewBox="0 0 18 18" className="fill-current">
    <path d="M4 0h10a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V2a2 2 0 012-2zm8 2H6v2h6V2zm-7 5h8v1H5V7zm0 3h8v1H5v-1zm0 3h8v1H5v-1z" />
  </svg>
);

const LatestJobPost = ({ job = {} }) => {
  const {
    title = "No Title Available",
    company = "No Company Available",
    location = "No Location Available",
    logo = "/default-logo.png",
    description = "No description available.",
    postedDate = "Date not available",
  } = job;

  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
      <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            {jobIcon}
            <h3 className="ml-2 text-lg font-semibold text-gray-800 dark:text-white">
              {title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
          {company} - {location}
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>

        <div className="flex items-center gap-4">
          <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
            <Image src={logo} alt={company} width={50} height={50} />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Posted on: {postedDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestJobPost;

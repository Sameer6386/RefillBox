import Image from "next/image";

const SingleTeam = ({ team }) => {
  const { image, name, designation, facebookLink, twitterLink, instagramLink } =
    team;

  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
      <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
        <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
          <Image
            src={image}
            alt={name}
            className="w-full rounded-full"
            width={120}
            height={120}
          />
          <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-secondary opacity-0 transition-all group-hover:opacity-100"></span>
          <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
            <svg
              width="55"
              height="53"
              viewBox="0 0 55 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5118 3.1009C13.3681 3.1009 14.0622 2.40674 14.0622 1.55045C14.0622 0.69416 13.3681 0 12.5118 0C11.6555 0 10.9613 0.69416 10.9613 1.55045C10.9613 2.40674 11.6555 3.1009 12.5118 3.1009Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.5038 3.1009C23.3601 3.1009 24.0543 2.40674 24.0543 1.55045C24.0543 0.69416 23.3601 0 22.5038 0C21.6475 0 20.9534 0.69416 20.9534 1.55045C20.9534 2.40674 21.6475 3.1009 22.5038 3.1009Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.4958 3.1009C33.3521 3.1009 34.0463 2.40674 34.0463 1.55045C34.0463 0.69416 33.3521 0 32.4958 0C31.6395 0 30.9454 0.69416 30.9454 1.55045C30.9454 2.40674 31.6395 3.1009 32.4958 3.1009Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.4875 3.1009C43.3438 3.1009 44.038 2.40674 44.038 1.55045C44.038 0.69416 43.3438 0 42.4875 0C41.6312 0 40.9371 0.69416 40.9371 1.55045C40.9371 2.40674 41.6312 3.1009 42.4875 3.1009Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.4795 3.1009C53.3358 3.1009 54.03 2.40674 54.03 1.55045C54.03 0.69416 53.3358 0 52.4795 0C51.6233 0 50.9291 0.69416 50.9291 1.55045C50.9291 2.40674 51.6233 3.1009 52.4795 3.1009Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.52045 13.0804C3.37674 13.0804 4.0709 12.3862 4.0709 11.5299C4.0709 10.6737 3.37674 9.97949 2.52045 9.97949C1.66416 9.97949 0.970001 10.6737 0.970001 11.5299C0.970001 12.3862 1.66416 13.0804 2.52045 13.0804Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5118 13.0804C13.3681 13.0804 14.0622 12.3862 14.0622 11.5299C14.0622 10.6737 13.3681 9.97949 12.5118 9.97949C11.6555 9.97949 10.9613 10.6737 10.9613 11.5299C10.9613 12.3862 11.6555 13.0804 12.5118 13.0804Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.5038 13.0804C23.3601 13.0804 24.0543 12.3862 24.0543 11.5299C24.0543 10.6737 23.3601 9.97949 22.5038 9.97949C21.6475 9.97949 20.9534 10.6737 20.9534 11.5299C20.9534 12.3862 21.6475 13.0804 22.5038 13.0804Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.4958 13.0804C33.3521 13.0804 34.0463 12.3862 34.0463 11.5299C34.0463 10.6737 33.3521 9.97949 32.4958 9.97949C31.6395 9.97949 30.9454 10.6737 30.9454 11.5299C30.9454 12.3862 31.6395 13.0804 32.4958 13.0804Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.4875 13.0804C43.3438 13.0804 44.038 12.3862 44.038 11.5299C44.038 10.6737 43.3438 9.97949 42.4875 9.97949C41.6312 9.97949 40.9371 10.6737 40.9371 11.5299C40.9371 12.3862 41.6312 13.0804 42.4875 13.0804Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.4795 13.0804C53.3358 13.0804 54.03 12.3862 54.03 11.5299C54.03 10.6737 53.3358 9.97949 52.4795 9.97949C51.6233 9.97949 50.9291 10.6737 50.9291 11.5299C50.9291 12.3862 51.6233 13.0804 52.4795 13.0804Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.52045 23.0804C3.37674 23.0804 4.0709 22.3862 4.0709 21.5299C4.0709 20.6737 3.37674 19.9795 2.52045 19.9795C1.66416 19.9795 0.970001 20.6737 0.970001 21.5299C0.970001 22.3862 1.66416 23.0804 2.52045 23.0804Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5118 23.0804C13.3681 23.0804 14.0622 22.3862 14.0622 21.5299C14.0622 20.6737 13.3681 19.9795 12.5118 19.9795C11.6555 19.9795 10.9613 20.6737 10.9613 21.5299C10.9613 22.3862 11.6555 23.0804 12.5118 23.0804Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.5038 23.0804C23.3601 23.0804 24.0543 22.3862 24.0543 21.5299C24.0543 20.6737 23.3601 19.9795 22.5038 19.9795C21.6475 19.9795 20.9534 20.6737 20.9534 21.5299C20.9534 22.3862 21.6475 23.0804 22.5038 23.0804Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.4958 23.0804C33.3521 23.0804 34.0463 22.3862 34.0463 21.5299C34.0463 20.6737 33.3521 19.9795 32.4958 19.9795C31.6395 19.9795 30.9454 20.6737 30.9454 21.5299C30.9454 22.3862 31.6395 23.0804 32.4958 23.0804Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.4875 23.0804C43.3438 23.0804 44.038 22.3862 44.038 21.5299C44.038 20.6737 43.3438 19.9795 42.4875 19.9795C41.6312 19.9795 40.9371 20.6737 40.9371 21.5299C40.9371 22.3862 41.6312 23.0804 42.4875 23.0804Z"
                fill="#3758F9"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.4795 23.0804C53.3358 23.0804 54.03 22.3862 54.03 21.5299C54.03 20.6737 53.3358 19.9795 52.4795 19.9795C51.6233 19.9795 50.9291 20.6737 50.9291 21.5299C50.9291 22.3862 51.6233 23.0804 52.4795 23.0804Z"
                fill="#3758F9"
              />
              {/* Add the remaining SVG paths */}
            </svg>
          </span>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold dark:text-light">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {designation}
          </p>
        </div>
        <div className="mt-4 flex justify-center gap-4">
          {facebookLink && (
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Facebook ${name}`}
            >
              <i className="fab fa-facebook-f text-gray-600 dark:text-gray-300"></i>
            </a>
          )}
          {twitterLink && (
            <a
              href={twitterLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Twitter ${name}`}
            >
              <i className="fab fa-twitter text-gray-600 dark:text-gray-300"></i>
            </a>
          )}
          {instagramLink && (
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${name}`}
            >
              <i className="fab fa-instagram text-gray-600 dark:text-gray-300"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleTeam;

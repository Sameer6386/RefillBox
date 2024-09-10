import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap -mx-6 mb-12">
          <div className="w-full md:w-1/3 px-6 mb-8 md:mb-0">
            <div className="flex flex-col items-start">
              <Link href="/" className="flex items-center mb-6">
                <Image
                  src="/images/logo/logo.jpg"
                  alt="Company logo"
                  width={140}
                  height={30}
                  className="max-w-full"
                />
              </Link>
              <p className="text-base text-gray-400 mb-6">
                Empowering professionals and job seekers with opportunities to
                connect, grow, and succeed in their careers.
              </p>

              <div className="flex space-x-4">
                <Link
                  href="/#"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-gray-100"
                >
                  <FaFacebookF className="w-6 h-6" />
                </Link>
                <Link
                  href="/#"
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-gray-100"
                >
                  <FaTwitter className="w-6 h-6" />
                </Link>
                <Link
                  href="/#"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-gray-100"
                >
                  <FaInstagram className="w-6 h-6" />
                </Link>
                <Link
                  href="/#"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-gray-100"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-6 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold text-gray-100 mb-4">
              About Us
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-gray-100"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-gray-100"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-gray-100"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-gray-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 px-6 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold text-gray-100 mb-4">
              Features
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-gray-100"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-gray-100"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-gray-100"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-400 hover:text-gray-100"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-center md:text-left text-gray-400 text-sm">
              <p>
                &copy; {new Date().getFullYear()} Techizons . All rights
                reserved.
              </p>
            </div>
            <nav className="text-center md:text-right space-x-4">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-gray-100"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-gray-100"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

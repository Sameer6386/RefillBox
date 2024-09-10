"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiMoon } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import menuData from "./menuData";

const Header = () => {
  const { data: session } = useSession();
  const pathUrl = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-40 w-full ${
        sticky
          ? "shadow-md border-b border-gray-700 bg-gray-900"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Link href="/" aria-label="Home">
            <Image
              src={
                sticky
                  ? "/images/logo/logo-white.svg"
                  : "/images/logo/logo-white.svg"
              }
              alt="logo"
              width={140}
              height={30}
              className="dark:block"
            />
          </Link>
        </div>
        <button
          onClick={navbarToggleHandler}
          aria-label="Toggle Navigation"
          className="lg:hidden flex items-center p-2"
        >
          <span
            className={`block h-0.5 w-8 bg-gray-200 dark:bg-gray-400 transform transition-transform ${
              navbarOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-8 bg-gray-200 dark:bg-gray-400 transition-opacity ${
              navbarOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-8 bg-gray-200 dark:bg-gray-400 transform transition-transform ${
              navbarOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>

        <nav
          className={`absolute top-full right-0 mt-2 w-60 bg-gray-900 border border-gray-700 rounded-lg shadow-lg lg:relative lg:flex lg:w-auto lg:bg-gray-900 lg:border-none lg:shadow-none ${
            navbarOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 p-4 lg:p-0">
            {menuData.map((menuItem, index) =>
              menuItem.path ? (
                <li key={index} className="relative">
                  <Link
                    href={menuItem.path}
                    className={`block py-2 px-4 text-base ${
                      pathUrl === menuItem.path
                        ? "text-blue-400"
                        : "text-gray-200"
                    }`}
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ) : (
                <li key={index} className="relative">
                  <button
                    onClick={() => handleSubmenu(index)}
                    className="flex items-center py-2 px-4 text-base text-gray-200"
                  >
                    {menuItem.title}
                    <RiArrowDownSLine
                      className={`ml-2 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      } text-gray-200`}
                    />
                  </button>
                  <ul
                    className={`absolute left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    {menuItem?.submenu?.map((submenuItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={submenuItem.path}
                          className="block py-2 px-4 text-sm text-gray-200 hover:bg-gray-700"
                        >
                          {submenuItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <button aria-label="Toggle Theme" className="text-2xl text-gray-200">
            <FiMoon className="text-gray-200" />
          </button>
          {session ? (
            <button
              onClick={() => signOut()}
              aria-label="Sign Out"
              className="text-2xl text-gray-200"
            >
              <FaUser className="text-gray-200" />
            </button>
          ) : (
            <Link
              href="/signin"
              aria-label="Sign In"
              className="text-2xl text-gray-200"
            >
              <FaUser className="text-gray-200" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

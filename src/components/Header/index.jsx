"use client";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const Header = () => {
  const { data: session } = useSession();
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const { theme, setTheme } = useTheme();

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const handleSubmenu = (index) =>
    setOpenIndex(openIndex === index ? -1 : index);

  return (
    <header
      className={`fixed top-0 left-0 z-40 w-full ${
        sticky
          ? "shadow-nav border-b border-stroke bg-white/80 backdrop-blur-sm dark:border-dark-3/20 dark:bg-dark/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between">
          <div className="w-60">
            <Link href="/" className={`block ${sticky ? "py-2" : "py-5"}`}>
              <Image
                src={`/images/logo/logo${sticky ? "" : "-white"}.svg`}
                alt="logo"
                width={sticky ? 140 : 240}
                height={30}
                className="w-full dark:hidden"
              />
              <Image
                src={`/images/logo/logo-white.svg`}
                alt="logo"
                width={sticky ? 140 : 240}
                height={30}
                className="hidden w-full dark:block"
              />
            </Link>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <button
              onClick={navbarToggleHandler}
              aria-label="Mobile Menu"
              className="relative lg:hidden p-3 rounded-lg ring-primary focus:ring-2"
            >
              <span
                className={`block h-0.5 w-[30px] bg-current transition-transform duration-300 ${
                  navbarOpen ? "rotate-45 top-1.5" : "top-1"
                }`}
              />
              <span
                className={`block h-0.5 w-[30px] bg-current transition-opacity duration-300 ${
                  navbarOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-[30px] bg-current transition-transform duration-300 ${
                  navbarOpen ? "-rotate-45 bottom-1.5" : "-bottom-1"
                }`}
              />
            </button>
            <nav
              className={`absolute right-0 top-full z-30 w-full max-w-[250px] rounded border bg-white p-4 shadow-md transition-transform duration-300 dark:border-dark-3 dark:bg-dark-2 lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
                navbarOpen
                  ? "translate-y-0 opacity-100 visible"
                  : "translate-y-2 opacity-0 invisible"
              }`}
            >
              <ul className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-8 lg:gap-y-0 lg:ml-8 lg:items-center">
                {menuData.map((menuItem, index) =>
                  menuItem.path ? (
                    <li key={index} className="relative">
                      <Link
                        href={menuItem.path}
                        onClick={navbarToggleHandler}
                        className={`flex py-2 text-base font-medium ${
                          pathUrl === menuItem.path
                            ? "text-primary"
                            : "text-body-color hover:text-primary"
                        } lg:px-0 lg:py-6`}
                      >
                        {menuItem.title}
                      </Link>
                      {menuItem.submenu && (
                        <ul
                          className={`submenu absolute top-full left-0 z-10 mt-2 rounded-lg border bg-white p-4 shadow-md transition-opacity duration-300 dark:border-dark-3 dark:bg-dark-2 ${
                            openIndex === index
                              ? "opacity-100 visible"
                              : "opacity-0 invisible"
                          }`}
                        >
                          {menuItem.submenu.map((submenuItem, subIndex) => (
                            <li
                              key={subIndex}
                              className={`py-2 text-base ${
                                pathUrl === submenuItem.path
                                  ? "text-primary"
                                  : "text-dark group-hover:text-primary"
                              }`}
                            >
                              <Link
                                href={submenuItem.path}
                                onClick={navbarToggleHandler}
                                className="flex items-center"
                              >
                                {submenuItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : null
                )}
              </ul>
            </nav>
            <div className="flex items-center gap-3 lg:gap-6">
              {session ? (
                <button
                  onClick={() => signOut()}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2 text-base font-medium text-white hover:bg-opacity-90 dark:bg-primary-dark dark:hover:bg-opacity-80"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link href="/signin">
                    <button className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2 text-base font-medium text-white hover:bg-opacity-90 dark:bg-primary-dark dark:hover:bg-opacity-80">
                      Login
                    </button>
                  </Link>
                  <Link href="/signup">
                    <button className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2 text-base font-medium text-white hover:bg-opacity-90 dark:bg-primary-dark dark:hover:bg-opacity-80">
                      Register
                    </button>
                  </Link>
                </>
              )}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-8 w-8 rounded-full border border-stroke text-dark hover:text-primary dark:border-dark-3 dark:text-white dark:hover:text-primary lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  {theme === "dark" ? (
                    <path
                      d="M12 3V1C17.5 1 22.5 6 22.5 11.5H21C21 7.5 17 4 12 4V3Z"
                      fill="currentColor"
                    />
                  ) : (
                    <path
                      d="M12 1.5C8 1.5 4.5 4.5 4.5 8.5C4.5 12.5 8 15.5 12 15.5C16 15.5 19.5 12.5 19.5 8.5C19.5 4.5 16 1.5 12 1.5Z"
                      fill="currentColor"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

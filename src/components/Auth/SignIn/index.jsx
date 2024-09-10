"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignIn = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("componentsadminindex.jsx");
  };

  return (
    <section className="bg-[#F4F7FF] py-14 dark:bg-dark lg:py-[90px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="wow fadeInUp shadow-form relative mx-auto max-w-[525px] overflow-hidden rounded-xl bg-white px-8 py-14 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center">
                <h1 className="text-lg">Sign In</h1>
              </div>

              <div className="mb-[22px]">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-[22px]">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-9">
                <button
                  onClick={handleSignIn}
                  className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-primary/90"
                >
                  Sign In
                </button>
              </div>

              <p className="text-body-secondary text-base">
                Don't have an account?
                <a href="/signup" className="pl-2 text-primary hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SocialSignIn from "../SocialSignIn";
import Loader from "../../Common/Loader";

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      router.push("/admin");
      return;
    }

    setLoading(true);

    /*
    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data.entries());
    const finalData = { ...value };

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
          setLoading(false);
          return;
        }
        toast.success("Successfully signed in");
        setLoading(false);
        router.push("/dashboard");
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
    */

    // Simulate redirection for demonstration
    setLoading(false);
    router.push("/dashboard");
  };

  return (
    <section className="bg-gray-100 py-14 dark:bg-gray-900 lg:py-[90px]">
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="mb-10 text-center">
            <Link href="/" className="inline-block max-w-[160px]">
              <Image
                src="/images/logo/logo.svg"
                alt="logo"
                width={140}
                height={30}
                className="dark:hidden"
              />
              <Image
                src="/images/logo/logo-white.svg"
                alt="logo"
                width={140}
                height={30}
                className="hidden dark:block"
              />
            </Link>
          </div>

          <SocialSignIn />

          <div className="relative my-8 text-center">
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-full h-px bg-gray-300 dark:bg-gray-600"></span>
            </span>
            <span className="relative bg-white dark:bg-gray-800 px-3 text-base text-gray-500 dark:text-gray-300">
              OR
            </span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full py-3 px-5 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                Sign In {loading && <Loader />}
              </button>
            </div>
          </form>

          <Link
            href="/forgetpassword"
            className="block mb-4 text-center text-blue-500 hover:underline dark:text-blue-400"
          >
            Forgot Password?
          </Link>

          <p className="text-center text-gray-500 dark:text-gray-400 mb-4">
            By signing in you agree with our{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Privacy
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Policy
            </a>
          </p>

          <p className="text-center text-gray-500 dark:text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

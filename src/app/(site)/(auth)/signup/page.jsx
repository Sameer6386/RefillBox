import SignUp from "../../../../components/Auth/SignUp";
import Breadcrumb from "../../../../components/Common/Breadcrumb";
import Head from "next/head";

const SignupPage = () => {
  return (
    <>
      <Head>
        <title>
          Sign Up | Play SaaS Starter Kit and Boilerplate for Next.js
        </title>
      </Head>
      <Breadcrumb pageName="Sign Up Page" />
      <SignUp />
    </>
  );
};

export default SignupPage;

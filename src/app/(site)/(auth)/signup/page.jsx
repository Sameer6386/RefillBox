import SignUp from "../../../../components/Auth/SignUp";
import Breadcrumb from "../../../../components/Common/Breadcrumb";
import Head from "next/head";

const SignupPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <Breadcrumb pageName="Sign Up " />
      <SignUp />
    </>
  );
};

export default SignupPage;

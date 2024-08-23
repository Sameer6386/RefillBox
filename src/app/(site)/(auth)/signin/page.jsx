import Signin from "../../../../components/Auth/SignIn";
import Breadcrumb from "../../../../components/Common/Breadcrumb";
import Head from "next/head";

const SigninPage = () => {
  return (
    <>
      <Head>
        <title>Sign In </title>
      </Head>
      <Breadcrumb pageName="Sign In" />
      <Signin />
    </>
  );
};

export default SigninPage;

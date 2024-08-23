import React from "react";
import ForgotPassword from "../../../../components/Auth/ForgotPassword";
import Breadcrumb from "../../../../components/Common/Breadcrumb";
import Head from "next/head";

const ForgotPasswordPage = () => {
  return (
    <>
      <Head>
        <title>Forgot Password </title>
      </Head>
      <Breadcrumb pageName="Forget Password" />
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;

import React from "react";
import ResetPassword from "../../../../../components/Auth/ResetPassword";
import Breadcrumb from "../../../../../components/Common/Breadcrumb";
import Head from "next/head";

const ResetPasswordPage = ({ params }) => {
  return (
    <>
      <Head>
        <title>
          Reset Password | Play SaaS Starter Kit and Boilerplate for Next.js
        </title>
      </Head>
      <Breadcrumb pageName="Reset Password" />
      <ResetPassword token={params.token} />
    </>
  );
};

export default ResetPasswordPage;

import React, { useState } from "react";
import { Alert } from "react-bootstrap";

import { useSearchParams } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
const EmailVerify = () => {

const [response, setResponse] = useState({})

  const [searchParams] = useSearchParams();
  const verificationCode = searchParams.get("c");
  const email = searchParams.get("email");
  console.log(verificationCode, email);
  return (
    <AdminLayout>
      <div className="verify-page">
        {response.message ? (
                    <Alert variant="success">Your account is verified</Alert>

        )}
      </div>
    </AdminLayout>
  );
};

export default EmailVerify;

import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import CustomInput from "../../componenets/CustomInput";
import { postAdminUser } from "../../helpers/axiosHelper";
import AdminLayout from "../layout/AdminLayout";

const Registration = () => {
  const [form, setForm] = useState({});
  const [resp, setResp] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setErr("");
    // let str = "";
    if (name === "password") {
      value.length < 6 && setErr("Password must be 6 character long");

      !/[a-z]/.test(value) && setErr("At least one lower case required");
      !/[A-Z]/.test(value) && setErr("At least one upper case required");
      !/[0-9]/.test(value) && setErr("At least one number required");
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Password do not match");
    }
    setIsLoading(true);
    const result = await postAdminUser(form);
    setResp(result);
    setIsLoading();
    // console.log(result);
  };
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Arjun",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Shrestha",
      required: true,
    },

    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "04xxxxxxxx",
      required: true,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "address",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "arjun@gmail.com",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "xxxxxxxxx",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "ConfirmPassword",
      type: "password",
      placeholder: "xxxxxxxx",
      required: true,
    },
  ];
  return (
    <AdminLayout>
      <div className="reg-page">
        <Form
          onSubmit={handleOnSubmit}
          className="border mt-4 p-3 rounded shadow-lg pt-5"
        >
          <h3 className="mb-2">New Admin Registration</h3>
          <hr className="d-grid" />
          <div className="text-cener">
            {isloading && <Spinner animation="border " />}
          </div>
          {resp.message && (
            <Alert variant={resp.status === "success" ? "success" : "danger"}>
              {resp.message}
            </Alert>
          )}
          {inputs.map((item) => (
            <CustomInput key={item.name} {...item} onChange={handleOnChange} />
          ))}
          <Form.Text>
            Your password must have at least 6 including character, number and
            text
          </Form.Text>
          {err && <div className="text-danger mb-4">{err}</div>}
          <div className="d-grid">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default Registration;

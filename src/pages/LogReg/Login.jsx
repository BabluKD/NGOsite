import React from "react";
// import { Redirect } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import TextField from "@material-ui/core/TextField";

import "../styles/login.style.css";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    // .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    handleSubmit: async (values) => {
      //   alert(JSON.stringify(values, null, 2));
      values.navigation.navigate("/afterLogin");
    },
  });

  return (
    <div className="login-page ml-4 mr-4 my-4">
      <form onSubmit={formik.handleSubmit}> 
      {/* {formik.handleSubmit}> */}
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          variant="warning"
          type="submit"
          className="col-md-6 mx-auto mt-4"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;

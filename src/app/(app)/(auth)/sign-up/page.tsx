"use client";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/textinput";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import useFirebase from "../useFirebase";
import { Form, Formik } from "formik";
import Link from "next/link";

function Page() {
  const {
    loginWithEmailAndPassword,
    GoogleSignIn,
    registerWithEmailAndPassword,
  } = useFirebase();

  return (
    <div className="flex flex-col gap-5 w-full md:w-[40%]">
      <Formik
        cl
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        onSubmit={(values, { resetForm }) => {
          registerWithEmailAndPassword(values.email, values.password, values.username);
          resetForm();
        }}>
        {({ handleChange, values }) => (
          <Form className="w-full flex flex-col gap-5">
            {/* <TextInput label="Name" placeholder="Enter your name" name="name" /> */}

            <TextInput
              label="Username"
              value={values.username}
              onChange={handleChange}
              placeholder="Enter your username"
              name="username"
              required
            />
            <TextInput
              label="Email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter your email"
              name="email"
              required
            />

            <TextInput
              value={values.password}
              onChange={handleChange}
              label="Password"
              placeholder="Enter your password"
              name="password"
              type="password"
              required
            />
            <Button className="font-semibold">Register</Button>
          </Form>
        )}
      </Formik>
      <p className="w-full text-center">or</p>

      <div className="flex flex-col gap-4">
        <Button variant={"outline"} className="font-semibold">
          <FaGoogle className="mr-3" />
          Register with Google
        </Button>
        {/* <Button variant={"outline"} className="font-semibold">
          <FaFacebook className="mr-3" />
          Login with Button
        </Button> */}
        <div>
          <p className="text-slate-900">
            Already have an account?{" "}
            <Link className="text-primary" href={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;

"use client";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/textinput";
import useFirebase from "../useFirebase";
import { Formik, Form } from "formik";

function Page() {
  const { loginWithEmailAndPassword, GoogleSignIn } = useFirebase();
  return (
    <div className="flex flex-col gap-5 w-full md:w-[40%]">
      <Formik
        cl
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, {resetForm}) => {
          loginWithEmailAndPassword(values.email, values.password);
          resetForm();
        }}>
        {({ handleChange, values }) => (
          <Form className="w-full flex flex-col gap-5">
            <TextInput
              value={values.email}
              type="email"
              onChange={handleChange}
              label="Email"
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

            <Button type="submit" className="w-full">
              Login
            </Button>
          </Form>
        )}
      </Formik>

      <p className="w-full text-center">or</p>

      <div className="flex flex-col gap-4">
        <Button variant={"outline"} onClick={GoogleSignIn}>
          Login with Google
        </Button>
      </div>
    </div>
  );
}

export default Page;

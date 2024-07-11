import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/textinput";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Page() {
  return (
    <div className="flex flex-col gap-5 w-full md:w-[40%]">
      <TextInput label="Name" placeholder="Enter your name" name="name" />

      <TextInput label="Email" placeholder="Enter your email" name="email" />

      <Button className="font-semibold">Login</Button>

      <p className="w-full text-center">or</p>

      <div className="flex flex-col gap-4">
        <Button variant={"outline"} className="font-semibold">
          <FaGoogle className="mr-3"/>
          Login with Google
        </Button>
        <Button variant={"outline"} className="font-semibold">
          <FaFacebook className="mr-3" />
          Login with Button
        </Button>
      </div>
    </div>
  );
}

export default Page;

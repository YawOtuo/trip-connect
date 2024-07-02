import { Button } from "@/components/ui/button";
import TextInput from "@/components/ui/textinput";

function Page() {
  return (
    <div className="flex flex-col gap-5 w-full md:w-[40%]">
      <TextInput label="Name" placeholder="Enter your name" name="name" />

      <TextInput label="Email" placeholder="Enter your email" name="email" />

      <Button>Login</Button>

      <p className="w-full text-center">or</p>

      <div className="flex flex-col gap-4">
        <Button variant={"outline"}>Login with Google</Button>
        <Button variant={"outline"}>Login with Button</Button>
      </div>
    </div>
  );
}

export default Page;

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase";

function useFirebase() {
  const { toast } = useToast();
  const router = useRouter();

  const loginWithEmailAndPassword = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast({
          title: `Welcome`,
          description: `You have successfully logged in with ${email}`,
          variant: "success",
        });
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast({
          title: `Error ${errorCode}`,
          description: errorMessage,
          variant: "destructive",
        });
        console.log({ errorCode, errorMessage });
      });
  };

  const registerWithEmailAndPassword = (email: string, password: string) => {
    toast({
      title: `Loading`,
      description: `Getting you started ${email}`,
      variant: "success",
    });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast({
          title: `Welcome`,
          description: `You have successfully registered with ${email}`,
          variant: "success",
        });
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast({
          title: `Error ${errorCode}`,
          description: errorMessage,
          variant: "error",
        });
        console.log({ errorCode, errorMessage });
      });
  };

  function GoogleSignIn() {
    // Sign in with Google

    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({
      prompt: "select_account",
    });
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        toast({
          title: `Welcome ${user.displayName}`,
          description: `You have successfully logged in with Google`,
          variant: "success",
        });
        router.push("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        toast({
          title: `Error ${errorCode}`,
          description: errorMessage,
          variant: "destructive",
        });
      });
  }
  return {
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    GoogleSignIn,
  };
}

export default useFirebase;

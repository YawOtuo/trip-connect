// import {
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";
// import { useToast } from "@/components/ui/use-toast";
// import { auth } from "../../firebase";
// import { useRouter } from "next/navigation";

// function useFirebase() {
//   const { toast } = useToast();
//   const router = useRouter();

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       console.log(user);
//       toast({
//         title: `Welcome`,
//         description: `You have successfully registered with ${email}`,
//         variant: "success",
//       });
//       router.push("/");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       toast({
//         title: `Error ${errorCode}`,
//         description: errorMessage,
//         variant: "error",
//       });
//       console.log({ errorCode, errorMessage });
//     });
//   function GoogleSignIn() {
//     // Sign in with Google
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // The signed-in user info.
//         const user = result.user;
//         console.log(user);
//         toast({
//           title: `Welcome ${user.displayName}`,
//           description: `You have successfully logged in with Google`,
//           variant: "success",
//         });
//         router.push("/");
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         toast({
//           title: `Error ${errorCode}`,
//           description: errorMessage,
//           variant: "destructive",
//         });
//       });
//   }
//   return {};
// }

// export default useFirebase;

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { app } from "../../firebase";
import { useMutationGoogle } from "../../api/auth";

export const OAuth = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const { mutateAsync: mutateGoogle } = useMutationGoogle() || {};

  const handleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const googleResults = await signInWithPopup(auth, provider);

      // Mutation to save user data
      await mutateGoogle({
        name: googleResults.user.displayName!,
        email: googleResults.user.email!,
        googlePhotoUrl: googleResults.user.photoURL!,
      });

      // After successful mutation, navigate
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during Google OAuth:", error);
    }
  };

  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outline
      onClick={handleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  );
};

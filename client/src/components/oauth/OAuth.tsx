import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { app } from "../../firebase";

export const OAuth = () => {
  const auth = getAuth(app);

  const handleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const googleResults = await signInWithPopup(auth, provider);
      console.log(googleResults);
    } catch (error) {
      console.log(error);
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

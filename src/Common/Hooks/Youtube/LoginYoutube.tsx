import React, { useEffect } from "react";
import { useGoogleLogin } from "react-google-login";
import { environment } from "Environments/environment";
import { refreshYoutubeTokenSetup } from "Common/Utils/RefreshYoutube";
import { UseLocalStorage } from "Common/Hooks/LocalStorage/UseLocalStorage";
import { useHistory } from "react-router-dom";
const scope = "https://www.googleapis.com/auth/youtube";
const clientId = environment.youtubeClientId;
const LoginYoutube = () => {
  const [youtubeLocal, setYoutubeLocal] = UseLocalStorage("YoutubeLocal", {});
  const history = useHistory();
  const onSuccess = (res: any) => {
    // console.log("Login Success: currentUser:", res.profileObj);
    setYoutubeLocal(res);
    refreshYoutubeTokenSetup(res);
    history.push("/");
  };

  function onFailure(res: any) {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    scope,
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button>
  );
};

export default LoginYoutube;

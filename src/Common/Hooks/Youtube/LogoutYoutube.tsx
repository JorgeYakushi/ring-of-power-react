import { environment } from "Environments/environment";
import React from "react";
import { useGoogleLogout } from "react-google-login";
import { UseLocalStorage } from "Common/Hooks/LocalStorage/UseLocalStorage";
import { useHistory } from "react-router-dom";
const clientId = environment.youtubeClientId;
function LogoutYoutube() {
  const [youtubeLocal, setYoutubeLocal] = UseLocalStorage("YoutubeLocal", {});
  const history = useHistory();
  const onLogoutSuccess = (res?: any) => {
    localStorage.clear();
    history.push("/login");
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutYoutube;

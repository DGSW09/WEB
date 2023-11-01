import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import logo from "../../img/logo.png";
import "../../styles/SignUp.css";
import axios from "axios";
const SignUp = () => {
  const cliendId = "46330787138-22m388pdr4ssrehscaaksg1nbfr3qn03.apps.googleusercontent.com";
  const SERVERURL = "http://172.20.10.13:8080/auth/login/google";

  const onSuccess = async (response) => {
    console.log(response);

    try {
      await axios.post(
        SERVERURL,
        {
          idToken: `${response.credential}`,
        },
        {
          headers: null,
        },
      );

      console.log("Post Complete");
    } catch (error) {
      console.log("Post Failed", error);
    }
  };
  return (
    <div className="signUpWrapper">
      <img src={logo} alt="09's logo" className="logo" />
      <div className="GOOGLE">
        <GoogleOAuthProvider clientId={cliendId}>
          <GoogleLogin
            onSuccess={onSuccess}
            onError={() => {
              console.log("실패");
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default SignUp;

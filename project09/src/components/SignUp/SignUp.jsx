import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import logo from "../../img/logo.png";
import "../../styles/SignUp.css";
import client_id from "../GitHide/ClientID";
import { useNavigate } from "react-router";
// import SERVERURL from "../GitHide/ServerAdress";
// import server_url from "../GitHide/ServerAdress";
import axios from "axios";
const SignUp = () => {
  const SERVERURL = "https://port-0-gonggu-server-1drvf2llokz2ag4.sel5.cloudtype.app/auth/login/google";
  const navigate = useNavigate();
  const cliendId = client_id;

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
      navigate("/login");
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

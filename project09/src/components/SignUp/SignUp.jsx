import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import logo from "../../img/logo.png";
import "../../styles/SignUp.css";
import axios from "axios";
const SignUp = () => {
  return (
    <div className='signUpWrapper'>
      <img src={logo} alt="09's logo" className='logo' />
      <div>
        <GoogleOAuthProvider clientId='46330787138-22m388pdr4ssrehscaaksg1nbfr3qn03.apps.googleusercontent.com'>
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              axios
                .post("http://localhost:8080/auth/login/google", {
                  id_token: `${credentialResponse.credential}`,
                })
                .then(({ data }) => {
                  console.log(data);
                });
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default SignUp;

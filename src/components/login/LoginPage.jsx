import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";

function LoginButton(){
    const { loginWithRedirect } = useAuth0();

  return <button className="login" onClick={() => loginWithRedirect()}>Log In</button>;
};


function LoginPage(){
    return(
        <div className="main" style={{paddingTop:"100px"}}>
<LoginButton/>
        </div>
    )
}
export default LoginPage;
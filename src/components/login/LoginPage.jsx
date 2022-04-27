import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";
 // import mainLogo from'./logoWhite.png';
 
function LoginButton(){
    const { loginWithRedirect } = useAuth0();

  return <button className="login" onClick={() => loginWithRedirect()}>Log In</button>;
};


function LoginPage(){
    return(
        <div className="main" style={{paddingTop:"100px"}}
   


            // <img  src={mainLogo} style={nbStyle.logo} alt="fireSpot"/>

        >
<LoginButton/>

  
        </div>
    )
}
export default LoginPage;
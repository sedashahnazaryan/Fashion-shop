import Cards from "../card/Cards";
import "./home.css";
import Slides from "../slider/Slides";
 import { useAuth0 } from "@auth0/auth0-react";
import slidesData from "../../services/slideData";


const Home = () => {
    const {user, isAuthenticated} = useAuth0(); 
   let countPageProduct=4;
    
    return (
        
        <div className="home">
            <Slides slides={slidesData()} />
           <Cards pageDevider={countPageProduct}/>
        </div>
        
    );
}

export default Home;

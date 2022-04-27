import Cards from "../card/Cards";
import "./home.css";
import Slides from "../slider/Slides";
import { useAuth0 } from "@auth0/auth0-react";
import slidesData from "../../services/slideData";
import { useState } from "react";
import { Message } from "semantic-ui-react";

const Home = () => {
  const [responseInfo, setResponseInfo] = useState();
  function handleDismiss() {
    setResponseInfo("");
  }
  // const { user, isAuthenticated } = useAuth0();
  let countPageProduct = 4;

  return (
    <div className="home">
      {responseInfo && responseInfo.length > 0 ? (
        <Message success onDismiss={handleDismiss} content={responseInfo} />
      ) : (
        ""
      )}

      <Slides slides={slidesData()} />
      <Cards pageDevider={countPageProduct} setResponseInfo={setResponseInfo} />
    </div>
  );
};

export default Home;

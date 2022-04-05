import { useEffect, useState } from "react";
import { getData,getProducts } from "../../services/api";
import CardItem from "./CardItem";
import "./cards.css";

const Cards = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    // getData().then((param) => {
    //   setResult(param);
    // });
      getProducts().then((param) => {
       setResult(param);
     });
    
  }, []);

  return (
    <div className="ui stackable three column grid">
      {result.map((item) => {
        return (
          <CardItem
          item={item}
            key={item._id}
            description={item?.description.comment ||""}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default Cards;

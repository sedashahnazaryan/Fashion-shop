import { useEffect, useState } from "react";
import { getData,getProducts } from "../../services/api";
import CardItem from "./CardItem";
import "./cards.css";
import { Button, Pagination } from "semantic-ui-react";

const Cards = ({pageDevider}) => {
  const [result, setResult] = useState([]);
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  
  

  useEffect(() => {
    (async function createPageinashion() {
      let data = await getProducts();
      setResult(data);
    })();
  }, []);
  useEffect(() => {
    setProductsByPage(result.slice(start, start + pageDevider));
  }, [start, result]);

  function goToPage(e, data) {
    console.log(data.activePage);
    setStart(data.activePage);
  }
  
  console.log("result", result);
  return (
    <div className="ui stackable three column grid productItems">
        {result && result.length > 0 && result.map((item) => {
      //  {productsByPage &&
      //   productsByPage.length > 0 &&
      //   productsByPage.map((item) => { 
          return (
            <CardItem
              item={item}
              key={item.id}
              description={item?.description.comment || ""}
              image={item.img[0]}
              name={item.name}
              price={item.price}
            />
          );
        })}
      
      <div className="pagination-container">
     
        <Pagination
          defaultActivePage={1}
          secondary
          onPageChange={goToPage}
          totalPages={Math.ceil(result.length / pageDevider)}
        />
      
      </div>
    </div>
  );
};


export default Cards;

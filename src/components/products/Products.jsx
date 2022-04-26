import React from "react";
import Cards from "../card/Cards";
import { useState } from "react";
import { Message,Sticky } from "semantic-ui-react";
const Products = () => {
  const [responseInfo, setResponseInfo] = useState();
  function handleDismiss() {
    setResponseInfo("");
  }
  let countpageProduct = 4;
  return (
    <div className="home">
      {responseInfo && responseInfo.length > 0 ? (
        <Sticky>
          <Message success onDismiss={handleDismiss} content={responseInfo} />
        </Sticky>
      ) : (
        ""
      )}
      <Cards
        pageaDevider={countpageProduct}
        setResponseInfo={setResponseInfo}
      />
    </div>
  );
};

export default Products;

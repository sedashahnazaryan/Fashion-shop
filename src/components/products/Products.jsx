import React from "react";
import Cards from "../card/Cards";
import { useState } from "react";
import { Message,Sticky } from "semantic-ui-react";


function Products() {
  const[responseInfo,setResponseInfo]=useState()
  function handleDismiss() {
    setResponseInfo("");
  }
  let countPageProduct = 4;
  return (
    
    
      <div className="home">
      {responseInfo && responseInfo.length > 0 ? (
        <Sticky >
           <Message success onDismiss={handleDismiss} content={responseInfo} />
      </Sticky>
       
      ) : (
        ""
      )}
      <Cards pageDevider={countPageProduct}
       setResponseInfo={setResponseInfo}
      />
    </div>
    
  );
}

export default Products;
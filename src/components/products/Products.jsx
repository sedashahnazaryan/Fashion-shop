import React from 'react';
import Cards from '../card/Cards';

const Products = () => {
       let countpageProduct=4;
    return (
        <div className="main">
             <Cards pageaDevider={countpageProduct}/> 
        </div>
    );
}

export default Products;

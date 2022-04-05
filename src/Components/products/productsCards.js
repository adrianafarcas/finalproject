import React from "react";
import { ProductsContext } from "./productsContext";
import { Card } from "react-bootstrap";
import { products } from "./products";

const ProductsCards = () =>{
    return (
        <>
          <div>Cards</div>
          <ProductsContext.Consumer>
          {({ products }) => (
          <div className="prodcard   ">
            {products.map((product, key) => (
              <div >
                <Card style={{ width: "18rem", border: "0px" }}>
                  <Card.Body>
                    <Card.Img variant="top" src={product.photo} /> 
                    <Card.Title className="p-3">{product.name}</Card.Title>
                    <Card.Text className="p-1">{product.description}</Card.Text>
                    <Card.Text className="p-1">{product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        )}
          </ProductsContext.Consumer>
        </>

      
    )
};

export default ProductsCards;
import React, { useContext } from "react";
import { isInCart } from "../Helper/helper";
import { CartContext } from "../Context/cartContext";

const ItemCard = (props) => {
  const { img, title, price, id, desc } = props;
  const product = { img, title, price, id, desc };
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const itemInCart = isInCart(product, cartItems);
  return (
    <>
      <div className="col-md-3 col-sm-4 col-xs-6 single_portfolio_text">
        <img src={img} alt="" />
        <div className="portfolio_images_overlay text-center">
          <h6>{title}</h6>
          <p className="product_price">₹{price}</p>
          {!itemInCart && (
            <a
              href="#/"
              className="btn btn-primary"
              onClick={() => addProduct(product)}
            >
              Order
            </a>
          )}
          {itemInCart && (
            <a
              href="#/"
              className=" add-more"
              onClick={() => increase(product)}
            >
              Add More
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemCard;

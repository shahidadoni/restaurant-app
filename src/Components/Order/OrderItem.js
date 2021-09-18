import React from "react";
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "../icon";

const OrderItem = (props) => {
  const {
    title,
    img,
    price,
    quantity,
    id,
    desc,
    increase,
    decrease,
    removeProduct,
  } = props;
  const product = { title, img, price, quantity, id, desc };

  return (
    <>
      <tr key={id}>
        <td>
          <img src={img} style={{ height: "6rem" }} alt="" />
        </td>
        <td>{title}</td>
        <td>₹{price}</td>
        <td>Quantity: {quantity}</td>
        <td>
          <a
            href="#/"
            className="btn btn-primary"
            onClick={() => increase(product)}
          >
            <PlusCircleIcon width="20px" />
          </a>
          {quantity === 1 && (
            <a
              href="#/"
              className="btn btn-primary"
              onClick={() => removeProduct(product)}
            >
              <TrashIcon width="20px" />
            </a>
          )}
          {quantity > 1 && (
            <a
              href="#/"
              className="btn btn-primary"
              onClick={() => decrease(product)}
            >
              <MinusCircleIcon width="20px" />
            </a>
          )}
        </td>
      </tr>
    </>
  );
};

export default OrderItem;

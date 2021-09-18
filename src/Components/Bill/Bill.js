import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";
const Bill = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [checked, setChecked] = useState(true);

  useEffect(() => {}, [checked]);

  const pdf = () => {
    window.print();
    setTimeout(() => clearCart(), 1000);
  };
  let sum = 0;

  return (
    <>
      {cartItems.length === 0 ? (
        <>
          <div className="head_title text-center">
            <h3>You don't have any orders</h3>
            <Link to="/menu" className="btn btn-primary">
              Menu
            </Link>
          </div>
        </>
      ) : null}
      {cartItems.length === 0 ? null : (
        <>
          <div className="head_title text-center" id="tip">
            <input
              defaultChecked={!checked}
              type="checkbox"
              id="addTip"
              name="addTip"
              onChange={() => setChecked(!checked)}
            />
            <label htmlFor="addTip">
              <h3 style={{ fontSize: "1.5rem" }}>Like the Food? Add 10% tip</h3>
            </label>
          </div>
          <div
            className="container"
            style={{
              position: "relative",
              backgroundColor: "white",
              border: "solid 3px",
              boxShadow: "10px 10px 5px grey",
              marginTop: "100px",
              marginBottom: "50px",
            }}
          >
            <div className="head_title text-center bill-head">
              <h3>Food Restaurant</h3>
              <p>XYZ Building</p>
              <p>Near ABC Street</p>
              <p>L.L. Road, Mumbai 400000</p>
              <p>Ph: 11222333, 44555666</p>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Qty.</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => {
                  sum += item.price * item.quantity;
                  return (
                    <tr key={index}>
                      <td>{item.quantity}</td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity * item.price}</td>
                    </tr>
                  );
                })}
                <tr style={{ fontWeight: "800" }}>
                  <td colSpan="3" style={{ textAlign: "right" }}>
                    Total :
                  </td>

                  <td>{sum}</td>
                </tr>
                <tr
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  <td colSpan="3" style={{ textAlign: "right" }}>
                    SGST (9.00% on Total) :
                  </td>

                  <td>{(sum * 0.09).toFixed(2)}</td>
                </tr>
                <tr
                  style={{
                    fontSize: "0.8rem",
                  }}
                >
                  <td colSpan="3" style={{ textAlign: "right" }}>
                    CGST (9.00% on Total) :
                  </td>

                  <td>{(sum * 0.09).toFixed(2)}</td>
                </tr>
                {console.log(checked)}
                {!checked ? (
                  <tr
                    style={{
                      fontSize: "0.8rem",
                    }}
                  >
                    <td colSpan="3" style={{ textAlign: "right" }}>
                      Tip :
                    </td>

                    <td>{(sum * 0.1).toFixed(2)}</td>
                  </tr>
                ) : null}
                <tr>
                  <td
                    colSpan="3"
                    style={{ fontWeight: "800", textAlign: "right" }}
                  >
                    Total Amount (Including Tax) :
                  </td>

                  <td style={{ fontWeight: "800" }}>
                    {!checked
                      ? (sum + sum * 0.28).toFixed(2)
                      : (sum + sum * 0.18).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="head_title text-center">
              <p>GSTIN : 22AAAAA0000A1Z5</p>
              <h4>Thank You!!</h4>
            </div>
            <div
              style={{
                position: "absolute",
                right: "0",
                bottom: "10px",
              }}
            >
              <button
                id="printPageButton"
                className="btn btn-primary"
                style={{
                  backgroundColor: "brown",
                  borderColor: "brown",
                }}
                onClick={pdf}
              >
                Print/Pay
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Bill;

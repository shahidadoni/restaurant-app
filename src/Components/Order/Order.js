import React, { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import OrderItem from "./OrderItem";
import { Link } from "react-router-dom";

const Order = () => {
  const { cartItems, itemCount, increase, decrease, removeProduct, clearCart } =
    useContext(CartContext);
  const funcs = { increase, decrease, removeProduct };
  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="portfolio_content text-center  wow fadeIn"
              data-wow-duration="5s"
            >
              <div className="col-md-12">
                <div className="head_title text-center">
                  <h4>Your Orders</h4>
                  {cartItems.length === 0 ? (
                    <>
                      <h3>You don't have any orders</h3>
                      <Link to="/menu" className="btn btn-primary">
                        Menu
                      </Link>
                    </>
                  ) : null}
                </div>

                <div className="main_portfolio_content text-center">
                  {cartItems.length === 0 ? null : (
                    <section className="py-4 container">
                      <div className="row justify-content-center">
                        <div className="col-12">
                          <h5>
                            Cart:{cartItems.length} | Total Items : {itemCount}
                          </h5>
                          <table className="table table-light table-hover m-0">
                            <tbody>
                              {cartItems.map((item, index) => {
                                console.log(item);
                                return (
                                  <OrderItem
                                    {...item}
                                    key={item.id}
                                    {...funcs}
                                  />
                                );
                              })}
                              <tr>
                                <div
                                  style={{
                                    position: "absolute",
                                    right: "0px",
                                  }}
                                >
                                  <button
                                    className="btn btn-primary"
                                    style={{
                                      backgroundColor: "red",
                                      borderColor: "red",
                                    }}
                                    onClick={() => clearCart()}
                                  >
                                    <a href="#/" style={{ color: "white" }}>
                                      Clear Cart
                                    </a>
                                  </button>
                                  <button
                                    className="btn btn-primary"
                                    style={{
                                      backgroundColor: "brown",
                                      borderColor: "brown",
                                    }}
                                  >
                                    <a href="/meal" style={{ color: "white" }}>
                                      Place Order
                                    </a>
                                  </button>
                                </div>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;

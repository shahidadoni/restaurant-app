import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { CartContext } from "../Context/cartContext";

const Nav = ({ history }) => {
  const { itemCount } = useContext(CartContext);

  return (
    <>
      <header style={{ backgroundColor: "#1E2E3B" }}>
        <div className="main_menu_bg">
          <div className="container">
            <div className="row">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand our_logo" href="#/">
                      <img src="assets/images/logo.png" alt="" />
                    </a>
                  </div>

                  <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav navbar-right">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a
                          href="/order"
                          className="booking"
                          onClick={() => history.push("/order")}
                        >
                          Your Order {itemCount > 0 ? itemCount : null}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default withRouter(Nav);

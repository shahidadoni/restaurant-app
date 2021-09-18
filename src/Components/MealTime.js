import React from "react";
import { Link } from "react-router-dom";

const MealTime = () => {
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
              <div className="head_title text-center">
                <h4 style={{ fontSize: "3rem", marginBottom: "50px" }}>
                  Happy Meal Time
                </h4>
                <div>
                  <img
                    src="./images/happy.png"
                    style={{ height: "20rem" }}
                    alt=""
                  />
                </div>
                <h4
                  style={{
                    fontSize: "3rem",
                    marginTop: "50px",
                    marginBottom: "50px",
                  }}
                >
                  Your food is being served!!
                </h4>
                <div>
                  <Link to="/menu" className="btn btn-primary">
                    Order More
                  </Link>
                  <Link
                    to="/bill"
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "brown",
                      borderColor: "brown",
                      color: "white",
                    }}
                  >
                    Final Bill
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MealTime;

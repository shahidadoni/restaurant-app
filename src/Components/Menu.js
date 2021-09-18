import React, { useContext } from "react";
import ItemCard from "./ItemCard";
import { ProductsContext } from "../Context/productsContext";

const Menu = () => {
  const { products } = useContext(ProductsContext);
  return (
    <>
      <section id="portfolio" className="portfolio1">
        <div className="container">
          <div className="row">
            <div
              className="portfolio_content text-center  wow fadeIn"
              data-wow-duration="5s"
            >
              <div className="col-md-12">
                <div className="head_title text-center">
                  <h4>Delightful</h4>
                  <h3>Experience</h3>
                </div>

                <div className="main_portfolio_content">
                  {products.map((product, index) => {
                    return (
                      <ItemCard
                        {...product}
                        // img={item.img}
                        // title={item.title}
                        // price={item.price}
                        // item={item}
                        key={index}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

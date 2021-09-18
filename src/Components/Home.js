import React from "react";

const Home = () => {
  return (
    <>
      <section id="slider" className="slider">
        <div className="slider_overlay">
          <div className="container">
            <div className="row">
              <div className="main_slider text-center">
                <div className="col-md-12">
                  <div
                    className="main_slider_content wow zoomIn"
                    data-wow-duration="1s"
                  >
                    <h1>Foody Love</h1>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi.{" "}
                    </p>
                    <button className="btn-lg">
                      <a href="/menu" style={{ color: "white" }}>
                        Menu
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

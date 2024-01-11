import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export function Hero({ items }) {
  return (
    <div className="hero" id="Home">
      <div className="hero-row">
        <div className="hero-Content">
          <h1>
            Welcome to <span>Restaurantly</span>
          </h1>
          <h2>Delivering great food for more than 18 years!</h2>

          <div className="btns">
            <div className="homeItems">
              <Link
                to="#Menu"
                className="homeItem"
                style={{ textDecoration: "none" }}
              >
                <button className="hero-btn-menu ">Our Menu</button>
              </Link>
            </div>
            <div className="homeItems">
              <Link
                to="#Booking"
                className="homeItem"
                style={{ textDecoration: "none" }}
              >
                <button className="hero-btn-book">Book a Table</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="yt">
          <a
            href="https://www.youtube.com/watch?v=u6BOC7CDUTQ"
            className="glightbox play-btn"
          >
            YT
          </a>
        </div>
      </div>
    </div>
  );
}

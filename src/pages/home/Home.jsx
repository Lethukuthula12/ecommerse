import React from 'react';
import Card from "../../Components/Card/Card";
import Card2 from "../../Components/Card/Card2";
import data from "../../Data/data";
import Timer from "../../Components/Timer";
import {BiCommentDots} from "react-icons/bi";
import { FaTruck, FaCreditCard } from "react-icons/fa";



import "./home.styles.css";
import image from "../../utils/yello-girl.png";
import logo10 from "../../utils/logo10.png";
import logo2 from "../../utils/logo2.png";
import logo5 from "../../utils/logo5.png";
import logo4 from "../../utils/logo4.png";

import {Slideshow } from "../../Components/Slide";
import Testimonial from "../../Components/Testimorial";
import {ProductConsumer} from "../../context";
import Footer from '../../Components/Footer/Footer';

export const Home = () => {




 
  return (
    <div className="home">
      <div className="section1">
        <div className="container">
          <div className="ladding-page-row">
            <div className="ladding-page-row1">
              <h1>
                LOOK LIKE <br /> REAL <span>FASHIONISTAS</span>
              </h1>
              <p className="ladding-page-parag">
                Being created for Kids, the items from thse shops correspond to
                the highest quality standards and are marked with the pleasant
                to eyes look
              </p>
              <div className="btn-div-slide">
                <button className="btn btn-shop-now">SHOP NOW</button>
              </div>
            </div>
            <div className="ladding-page-row2">
              <img className="image" src={image} alt="toddler"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="div-logo">
          <div className="logo-row">
            <img className="pep" src={logo10} alt="Logo" />
            <img className="logo" src={logo2} alt="Logo" />
            <img className="lego" src={logo4} alt="Logo" />
            <img className="logo" src={logo5} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="slide-container">
        <div className="slide-page-row">
          <div className="slide-page-row2">
            <div className="">
              <Slideshow />
            </div>
          </div>
          <div className="slide-page-row1">
            <Timer />
            <h1>City Threads Girls Leggings</h1>
            <p className="slide-page-parag">
              Fashion comes back in a certain period of time Fashion seems to
              be, perhaps, one of the most changeable phenomenons of all times.
              It reflects ...
            </p>
            <div className="btn-div-slide">
              <button className="btn btn-add-cart"> ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section3" id="section3">
        <div className="div-separator">
          <h2>POPULAR PRODUCTS</h2>
          <hr
            style={{
              height: "2px",
              width: "6%",
              borderWidth: "0",
              color: "#000",
              backgroundColor: "#fdb827",
            }}
          />
        </div>
        <div className="card-container">
          <div className="cards">
            <ul>
              {data.products
                .slice(0, 3)
                .map(({ id, title, description, price, img }) => (
                  <li>
                    <Card
                      key={id}
                      title={title}
                      description={description}
                      price={price}
                      img={img}
                      btnName="ADD TO CART"
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="center-slide">
          <h1>SAVE UP TO</h1>

          <div className="promo">
            <img
              className="promo"
              src="https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="pic2"
            />
          </div>
        </div>
        <div className="center-text">
          <h1>100% ORGANIC COTTON</h1>
          <hr />{" "}
          <span>
            ORGANIC COTTON is grown using eco-friendly methods, not disturbing
            the natural biological processes. Choosing this product you help
            protect global water resources.
          </span>
          <div className="btn-div-slide">
            <button className="btn btn-add-cart">ADD TO CART</button>
          </div>
        </div>
        <div className="center-slide">
          <h1>50% OFF</h1>

          <div className="promo">
            <img
              className="promo"
              src="https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="pic2"
            />
          </div>
        </div>
      </div>
      <div id="section5">
        <div className="div-separator">
          <h2>BEST SELLERS</h2>
          <hr
            style={{
              height: "2px",
              width: "6%",
              borderWidth: "0",
              color: "#000",
              backgroundColor: "#fdb827",
            }}
          />
        </div>
        <div className="cards">
          <ul>
            {data.products
              .slice(3, 6)
              .map(({ id, title, description, price, img }) => (
                <li>
                  <Card2
                    key={id}
                    title={title}
                    description={description}
                    price={price}
                    img={img}
                    btnName="ADD TO CART"
                  />
                </li>
              ))}
          </ul>
        </div>
        <div className="second-line-card">
          <div className="cards">
            <ul>
              {data.products
                .slice(6, 10)
                .map(({ id, title, description, price, img }) => (
                  <li>
                    <Card2
                      key={id}
                      title={title}
                      description={description}
                      price={price}
                      img={img}
                      btnName="ADD TO CART"
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      {/*<div className="div-separator">
        <h2>WHAT PEOPLE ARE SAYING</h2>
        <hr
          style={{
            height: "2px",
            width: "6%",
            borderWidth: "0",
            color: "#000",
            backgroundColor: "#fdb827",
          }}
        />
      </div> */}
      <div className="dilivery">
        <div className="delivery-proc1">
          <div className="dev-icon">
            <FaTruck size={60} />
          </div>{" "}
          <p>100% FREE DELIVERY ALL ORDER OVER R350</p>
        </div>
        <div className="delivery-proc2">
          <FaCreditCard size={60} />
          <p>100% BACK TO MONEY ALL ORDERS</p>
        </div>
        <div className="delivery-proc3">
          <BiCommentDots size={60} />
          <p>SUPPORT CUSTOMER 24/7</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;

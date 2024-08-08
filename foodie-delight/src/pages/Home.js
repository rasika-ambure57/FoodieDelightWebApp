import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyle.css";
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/addRestaurant" className="button-link">
            <button>Add Restaurant</button>
          </Link>
          <Link to="/menu" className="button-link">
            <button>Add Menu Item</button>
          </Link>
          <Link to="/listRestaurants" className="button-link">
            <button>List of Restaurant</button>
          </Link>
          <Link to="/menu" className="button-link">
            <button>List of Menu</button>
          </Link>
        </div>
      </div>{" "}
    </Layout>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Plant Care Guide</h1>
      <p>
        At Plant Care Guide, we believe that nurturing greenery brings peace,
        improves health, and beautifies living spaces. Whether you're a seasoned
        gardener or a new plant parent, our goal is to help you keep your indoor
        plants healthy and thriving with simple, practical tips.
      </p>

      <img
        src="https://thcf.bing.com/th/id/OIP.FmwKwxv4gt1iGusbmWpnewHaFA?w=303&h=205&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
        alt="Indoor Plants"
        className="home-image"
      />

      <h2>Our Vision</h2>
      <p>
        To inspire a green lifestyle by empowering individuals with the knowledge to
        care for indoor plants. We envision a future where every home has thriving,
        healthy plants that contribute to a greener planet.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to educate, support, and connect plant lovers through accurate
        care guides, expert tips, and a passionate community. We aim to simplify plant
        care and make it accessible for everyone, from beginners to plant enthusiasts.
      </p>

      <Link to="/plants" className="styled-button">Explore Plants</Link>
    </div>
  );
};

export default Home;
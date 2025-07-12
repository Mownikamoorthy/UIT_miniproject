import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Plant Care Guide</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/tips">Tips</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;

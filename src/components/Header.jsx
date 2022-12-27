import { BrowserRouter as Router, Link } from "react-router-dom";
import "../index.css";

const Header = () => {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/welcome">Welcome</Link>
            <Link to="/about">About</Link>
            <Link to="/person">Person</Link>
          </ul>
        </nav>
      </Router>
    </>
  );
};
export default Header;

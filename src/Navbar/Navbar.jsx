// import './Navbar.css'
// const Navbar = () => {
//   return (
//     <div className='nav'>
//       <div className="nav-logo">Ev-olution</div>
//       <ul className="nav-menu">
//         <li>Home</li>
//         <li>Explore</li>
//         <li>About</li>
//         <li className='nav-contact'>Contact</li>
//       </ul>
      
//     </div>
//   )
// }

// export default Navbar


import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activePage, setActivePage] = useState("home");

  return (
    <div>
      {/* Navbar */}
      <div className="nav">
        <div className="nav-logo">Ev-olution</div>
        <ul className="nav-menu">
          <li onClick={() => setActivePage("home")}>Home</li>
          <li onClick={() => setActivePage("explore")}>Explore</li>
          <li onClick={() => setActivePage("about")}>About</li>
          <li className="nav-contact" onClick={() => setActivePage("contact")}>Contact</li>
        </ul>
      </div>

      {/* Content Section */}
      <div className="content">
        {activePage === "home" && <p>Welcome to the Home Page!</p>}
        {activePage === "explore" && <p>Explore our amazing features.</p>}
        {activePage === "about" && <p>About Us: We provide innovative solutions.</p>}
        {activePage === "contact" && (
          <div>
            <p>Email: support@ev-olution.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 EV Street, Green City</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { IoClose, IoMenu } from "react-icons/io5";
// import "./Navbar.css";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const closeMenuOnMobile = () => {
//     if (window.innerWidth <= 1150) {
//       setShowMenu(false);
//     }
//   };
//   return (
//     <header className="header">
//       <nav className="nav container">
//         {/* <NavLink to="/" className="nav__logo">
//           Navigation Bar
//         </NavLink> */}

//         <div
//           className={`nav__menu ${showMenu ? "show-menu" : ""}`}
//           id="nav-menu"
//         >
//           <ul className="nav__list">
//             <li className="nav__item">
//               <NavLink to="/about" className="nav__link" onClick={closeMenuOnMobile}>
//                 About
//               </NavLink>
//             </li>
//             <li className="nav__item">
//               <NavLink
//                 to="/news"
//                 className="nav__link"
//                 onClick={closeMenuOnMobile}
//               >
//                 Upcoming Events
//               </NavLink>
//             </li>
//             <li className="nav__item">
//               <NavLink
//                 to="/about-us"
//                 className="nav__link"
//                 onClick={closeMenuOnMobile}
//               >
//                 Past Events
//               </NavLink>
//             </li>
//             <li className="nav__item">
//               <NavLink
//                 to="/favorite"
//                 className="nav__link"
//                 onClick={closeMenuOnMobile}
//               >
//                 Teams
//               </NavLink>
//             </li>
//             <li className="nav__item">
//               <NavLink
//                 to="/location"
//                 className="nav__link"
//                 onClick={closeMenuOnMobile}
//               >
//                 Gallery
//               </NavLink>
//             </li>
            
//           </ul>
          
//           <div className="nav__close" id="nav-close" onClick={toggleMenu}>
//             <IoClose />
//           </div>
//         </div>

//         <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
//           <IoMenu />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
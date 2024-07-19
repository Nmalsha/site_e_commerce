import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Home from "./component/Home/Home.js";
import Product from "./component/Product/Products.js";
import Contact from "./component/Contact/Contact.js";
import ClientSpace from "./component/user/ClientSpace/ClientSpace.js";
import AdminSpace from "./component/admin/AdminSpace/AdminSpace.js";
import { UserProvider } from "./component/userContext/UserContext.js";
import ProductDetail from "./component/productDetails/ProductDetails.js";
import Profile from "./component/user/Profile/Profile.js";
import ProtectedRoute from "./protectedRouts/ProtectedRoutes.js";
import Commands from "./component/user/Commands/Commands.js";

function App() {
  return (
    <UserProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Product />}></Route>
            <Route path="/contact" element={<Contact />} />

            <Route
              path="/commandes"
              element={
                <ProtectedRoute>
                  <Commands />{" "}
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<ClientSpace />} />
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute roles={["ADMIN"]}>
                  <AdminSpace />
                </ProtectedRoute>
              }
            />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Router>
    </UserProvider>
  );
}

export default App;
// import "./App.css";
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./component/Home/Home";
// import Products from "./component/Product/Product.js";
// import Contact from "./component/Contact/Contact.js";
// import ClientSpace from "./component/User/ClientSpace/ClientSpace.js";
// import RegisterForm from "./component/User/RegisterForm/RegisterForm.js";
// import LoginForm from "./component/User/LoginForm/LoginForm.js";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState("");
//   const [user, setUser] = useState("");
//   const [isAdmin, setIsAdmin] = useState("");

//   useEffect(() => {
//     const userData = localStorage.getItem("userData");
//     if (userData) {
//       setIsAuthenticated(true);
//       const userObject = JSON.parse(userData);
//       if (userObject) {
//         setUser(userObject);
//       }
//     }

//     // Check if user is admin
//     // const loggedUserRoles = localStorage.getItem("roles");
//     // const rolesArray = loggedUserRoles ? loggedUserRoles.split(",") : [];
//     // setIsAdmin(rolesArray.includes("ROLE_ADMIN"));
//     // setUserName(localStorage.getItem("nickname") || "");
//   }, []);
//   console.log(user.prenom);
//   return (
//     <Router>
//       <div className="App">
//         <nav
//           className="navbar navbar-expand-lg navbar-light bg-dark"
//           style={{ height: "80px" }}
//         >
//           <div className="container">
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     to="/"
//                     style={{ color: "white", fontSize: "25px" }}
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     to="/products"
//                     style={{ color: "white", fontSize: "25px" }}
//                   >
//                     Produits
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     to="/contact"
//                     style={{ color: "white", fontSize: "25px" }}
//                   >
//                     Contact
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     to="/client-space/"
//                     style={{ color: "white", fontSize: "25px" }}
//                   >
//                     Espace Client
//                   </Link>
//                 </li>
//                 {/* <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     to="/register/"
//                     style={{ color: "white" }}
//                   >
//                     Register
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link"
//                     to="/login/"
//                     style={{ color: "white" }}
//                   >
//                     Login
//                   </Link>
//                 </li> */}
//               </ul>
//               {isAuthenticated && (
//                 <span style={{ color: "#460c91", fontSize: "25px" }}>
//                   {" "}
//                   Hello {user.prenom}
//                 </span>
//               )}
//             </div>
//           </div>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<ClientSpace />} />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/login" element={<LoginForm />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

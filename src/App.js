import React from "react";
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import WineryContainer from "./Components/winery/WineryContainer";
import RestaurantContainer from "./Components/restaurant/RestaurantContainer.js"
import AppContainer from "./Components/AppContainer";
import ProductsContainer from "./Components/products/ProductsContainer";
import ContactContainer from "./Components/contact/ContactContainer";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <h2 className="col-3" id="welcome">
          Weingut am Löwenkopf
        </h2>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="winery">Winery</Nav.Link>
          <Nav.Link href="restaurant">Restaurant</Nav.Link>
          <Nav.Link href="our-wines">Our Wines</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
        </Nav>
      </Navbar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContainer />} />
          <Route path="winery" element={<WineryContainer />} />
          <Route path="restaurant" element={<RestaurantContainer />} />
          <Route path="our-wines" element={<ProductsContainer />} />
          <Route path="contact" element={<ContactContainer />} />
        </Routes>
      </BrowserRouter>

      <footer>
        <div className="col-4">
          <h4>Contact</h4>
          <p>info@weingut-loewenkopf.com  <br></br> Phone: +49 6774 4059953 <br></br> Schulstrasse
              41 • 56349 Kaub am Mittelrhein • Germany</p>
        </div>
        <div className="col-4">
          <h4>Wine Shop</h4>
          <p>Shipping flat rate in Germany: 7 €  <br></br>Free shipping for orders over 120€ </p>
        </div>
        <div className="col-4">
          <h4>Restaurant</h4>
          <p>Thursday - Sunday  <br></br>4:00 p.m. - 10:00 p.m  </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

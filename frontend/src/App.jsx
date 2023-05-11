// import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import productScreen from "./screen/productScreen.jsx";
import "./bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/product/:id" component={productScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

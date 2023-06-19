// import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import productScreen from "./screen/ProductScreen.jsx";
import "./bootstrap.min.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";
import ConditionsOfUseScreen from "./screens/ConditionsOfUseScreen.jsx";
import CartScreen from "./screens/CartScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} exact />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/profile" component={ProfileScreen} />

          <Route
            path="/privacy-notice"
            component={ConditionsOfUseScreen}
            exact
          />
          <Route
            path="/conditions-of-use"
            component={ConditionsOfUseScreen}
            exact
          />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

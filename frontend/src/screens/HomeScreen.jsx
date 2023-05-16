// import React from "re5act";
import { Row, Col } from "react-bootstrap";
import products from "../sample-data/productsData";
import Product from "../components/Products.jsx";
const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

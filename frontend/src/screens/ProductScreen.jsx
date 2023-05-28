/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
  FormControl,
} from "react-bootstrap";
import products from "../sample-data/productsData";
import Rating from "../components/Rating";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
// import { Meta } from "react-helmet";

const ProductScreen = ({ history, match }) => {
  const [chosenQuantity, setChosenQuantity] = useState(1);

  const decrementQuantity = () => {
    if (chosenQuantity > 0) setChosenQuantity(chosenQuantity - 1);
  };

  const incrementQuantity = () => {
    setChosenQuantity(chosenQuantity + 1);
  };

  const addToCardHandler = () => {
    history.push(`/cart/${match.params.id}/?qty=${chosenQuantity}`);
  };

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        <i className="fas fa-arrow-left" />
        <strong> Go Back</strong>
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          <Col md={3}>
            <Image src={product.image} alt={product.name} fluid></Image>
          </Col>
          <Col md={5}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <strong style={{ fontWeight: "bold" }}>Price:</strong>
                <strong> ${product.price}</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong style={{ fontWeight: "bold" }}>Stock:</strong>
                <strong> {product.countInStock}</strong>
              </ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>
                    <span style={{ fontWeight: "bold" }}>Total Price:</span>
                  </Col>
                  <Col className="col-6">
                    ${(product.price * chosenQuantity).toFixed(2)}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col className="col-4">
                    <span style={{ fontWeight: "bold" }}>Quantity:</span>
                  </Col>
                  <Col>
                    <Row>
                      <Col className="col-3">
                        <Button
                          className="btn-sm"
                          variant="light"
                          onClick={decrementQuantity}
                          disabled={chosenQuantity <= 0}
                        >
                          <i className="fa-solid fa-minus fa-beat" />
                        </Button>
                      </Col>
                      <Col>
                        <FormControl
                          className="form-control-sm"
                          type="number"
                          value={chosenQuantity}
                          readOnly
                        />
                      </Col>
                      <Col className="col-2">
                        <Button
                          className="btn-sm"
                          variant="light"
                          onClick={incrementQuantity}
                          disabled={product.countInStock < chosenQuantity}
                        >
                          <i className="fa-solid fa-plus fa-beat" />
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>
                    <span style={{ fontWeight: "bold" }}>Status:</span>
                  </Col>
                  <Col>
                    {product.countInStock >= chosenQuantity
                      ? "Available"
                      : "Non-Available"}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={
                      product.countInStock < chosenQuantity ||
                      chosenQuantity === 0
                    }
                    onClick={addToCardHandler}
                  >
                    ADD TO CART
                  </Button>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;

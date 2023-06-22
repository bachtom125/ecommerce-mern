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
import products from "../sample-data/productsData.js";
import Message from "../components/Message.jsx";
import Rating from "../components/Rating.jsx";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions.jsx";
import Loader from "../components/Loader.jsx";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants.js";
// import { Meta } from "react-helmet";

const ProductScreen = ({ history, match }) => {
  const [chosenQuantity, setChosenQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const decrementQuantity = () => {
    if (chosenQuantity > 0) setChosenQuantity(chosenQuantity - 1);
  };

  const incrementQuantity = () => {
    setChosenQuantity(chosenQuantity + 1);
  };

  const addToCardHandler = () => {
    history.push(`/cart/${match.params.id}/?qty=${chosenQuantity}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    );
  };

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment("");
    }
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id));
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
  }, [dispatch, match, successProductReview]);

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
        <>
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
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                  {successProductReview && (
                    <Message variant="success">
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingProductReview && <Loader />}
                  {errorProductReview && (
                    <Message variant="danger">{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button
                        disabled={loadingProductReview}
                        type="submit"
                        variant="primary"
                      >
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to="/login">sign in</Link> to write a review{" "}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;

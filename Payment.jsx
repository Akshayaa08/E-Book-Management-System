import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Payment() {
  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment Successful!");
  };

  return (
    <Container className="mt-5 p-4 border rounded" style={{ maxWidth: "500px", backgroundColor: "#f8f9fa" }}>
      <h3>Payment Page</h3>
      <Form onSubmit={handlePayment}>
        <Form.Group controlId="formCardNumber" className="mb-3">
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="text" placeholder="Enter card number" required />
        </Form.Group>
        <Form.Group controlId="formExpiry" className="mb-3">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control type="text" placeholder="MM/YY" required />
        </Form.Group>
        <Form.Group controlId="formCvv" className="mb-3">
          <Form.Label>CVV</Form.Label>
          <Form.Control type="password" placeholder="CVV" required />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Pay Now
        </Button>
      </Form>
    </Container>
  );
}

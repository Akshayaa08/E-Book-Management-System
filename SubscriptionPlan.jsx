import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Form, Navbar, Nav } from "react-bootstrap";

export default function Subscription() {
  const navigate = useNavigate();
  const location = useLocation();
  const { book, returnTo } = location.state || {};

  const handlePayment = () => {
    alert("Payment Successful!");
    if (returnTo) {
      navigate(returnTo, { state: { book } });
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="px-3">
        <Navbar.Brand href="#" onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>Back</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/browse">Browse</Nav.Link>
            <Nav.Link href="/subscription">Subscription</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-4">
        <h2>Payment for Premium Access</h2>
        <p>Proceed to payment for: <strong>{book?.title || "Subscription Plan"}</strong></p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name on Card</Form.Label>
            <Form.Control type="text" placeholder="Enter name" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="text" placeholder="1234 5678 9012 3456" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control type="text" placeholder="MM/YY" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>CVV</Form.Label>
            <Form.Control type="password" placeholder="123" required />
          </Form.Group>

          <Button variant="success" onClick={handlePayment}>
            Pay Now
          </Button>
        </Form>
      </Container>

      <footer className="text-center py-3 mt-5" style={{ backgroundColor: "#f8f9fa" }}>
        <p>&copy; 2025 eBinder. All rights reserved.</p>
      </footer>
    </>
  );
}

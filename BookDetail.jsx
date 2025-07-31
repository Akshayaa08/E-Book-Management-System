import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Navbar, Nav, Form } from "react-bootstrap";
import axios from "axios";

export default function BookDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};
  const [rating, setRating] = useState(0);
  const [userRating, setUserRating] = useState(null);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await axios.get(`/api/books/ratings/${book.isbn}`);
        setRating(response.data.averageRating || 0);
      } catch (error) {
        console.error("Failed to fetch rating:", error);
      }
    };
    fetchRating();
  }, [book.isbn]);

  const handleAddToMyBooks = () => {
    const existingBooks = JSON.parse(localStorage.getItem("myBooks")) || [];
    if (!existingBooks.some((b) => b.isbn === book.isbn)) {
      const updatedBooks = [...existingBooks, book];
      localStorage.setItem("myBooks", JSON.stringify(updatedBooks));
      alert("Book added to My Books.");
    } else {
      alert("This book is already in My Books.");
    }
  };

  const handleRatingSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/books/rate", { isbn: book.isbn, rating: userRating });
      alert("Thank you for rating!");
      setRating((prev) => (prev + userRating) / 2); // Update UI optimistically
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  if (!book) {
    return <p>No book data available.</p>;
  }

  return (
    <>
      <Navbar bg="light" expand="lg" className="px-3">
        <Navbar.Brand onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>Back</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/browse">Browse</Nav.Link>
            <Nav.Link href="/subscription">Subscription</Nav.Link>
            <Nav.Link href="/my-books">My Books</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-4">
        <h2>{book.title}</h2>

        <Row className="mb-4 align-items-center">
          <Col md={6}>
            <Card>
              <Card.Img 
                variant="top" 
                src={book.image} 
                style={{ height: "400px", width: "100%", objectFit: "contain", borderRadius: "8px" }} 
              />
            </Card>
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Text><strong>ISBN:</strong> {book.isbn}</Card.Text>
              <Card.Text><strong>Abstract:</strong> {book.description}</Card.Text>
              <Card.Text><strong>Plan:</strong> {book.type === "Premium" ? "Premium (Subscription Required)" : "Basic (Free Access)"}</Card.Text>
              <Card.Text><strong>Rating:</strong> {rating.toFixed(1)} / 5</Card.Text>
              <Form onSubmit={handleRatingSubmit}>
                <Form.Select onChange={(e) => setUserRating(parseInt(e.target.value))} required>
                  <option value="">Rate this book</option>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>{num} Star{num > 1 ? "s" : ""}</option>
                  ))}
                </Form.Select>
                <Button variant="success" className="mt-2" type="submit">Submit Rating</Button>
              </Form>
              <Button variant="primary" className="mt-3" onClick={handleAddToMyBooks}>
                Add to My Books
              </Button>
            </Card.Body>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6}>
            <Card>
              <Card.Img 
                variant="top" 
                src={book.authorImage} 
                style={{ height: "400px", width: "100%", objectFit: "contain", borderRadius: "8px" }} 
              />
            </Card>
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{book.author}</Card.Title>
              <Card.Text>
                <strong>About the Author:</strong> This section contains a detailed history of the author's career and significant contributions to literature.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>

      <footer className="text-center py-3 mt-5" style={{ backgroundColor: "#f8f9fa" }}>
        <p>&copy; 2025 eBinder. All rights reserved.</p>
      </footer>
    </>
  );
}

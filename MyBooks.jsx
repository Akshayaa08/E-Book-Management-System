import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Navbar, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function MyBooks() {
  const [myBooks, setMyBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("myBooks")) || [];
    setMyBooks(storedBooks);
  }, []);

  const handleViewBook = (book) => {
    navigate(`/book/${book.isbn}`, { state: { book } });
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="px-3">
        <Navbar.Brand onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>Back</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/browse">Browse</Nav.Link>
            <Nav.Link href="/my-books">My Books</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-4">
        <h2>My Books</h2>
        {myBooks.length === 0 ? (
          <p>No books added yet.</p>
        ) : (
          <Row>
            {myBooks.map((book) => (
              <Col md={4} key={book.isbn} className="mb-4">
                <Card>
                  <Card.Img 
                    variant="top" 
                    src={book.image} 
                    style={{ height: "250px", objectFit: "contain" }} 
                  />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.description}</Card.Text>
                    <Button variant="primary" onClick={() => handleViewBook(book)}>View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      <footer className="text-center py-3 mt-5" style={{ backgroundColor: "#f8f9fa" }}>
        <p>&copy; 2025 eBinder. All rights reserved.</p>
      </footer>
    </>
  );
}

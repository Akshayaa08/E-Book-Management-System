import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Row, Col, Navbar, Nav } from "react-bootstrap";

const books = [
  { title: "Science Wonders", subject: "Science", author: "Author A", isbn: "123456", type: "Free", image: "/images/book1.jpg", authorImage: "/images/author1.jpg", description: "An exploration of scientific marvels." },
  { title: "History Unveiled", subject: "History", author: "Author B", isbn: "234567", type: "Premium", image: "/images/book2.jpg", authorImage: "/images/author2.jpg", description: "Discover ancient civilizations." },
  { title: "Fantasy Realm", subject: "Fantasy", author: "Author C", isbn: "345678", type: "Free", image: "/images/book3.jpg", authorImage: "/images/author3.jpg", description: "Dive into a world of magic and adventure." },
  { title: "Artistic Minds", subject: "Art", author: "Author D", isbn: "456789", type: "Premium", image: "/images/book4.jpg", authorImage: "/images/author4.jpg", description: "Explore the works of great artists." },
  { title: "Mystery Tales", subject: "Mystery", author: "Author E", isbn: "567890", type: "Free", image: "/images/book5.jpg", authorImage: "/images/author5.jpg", description: "Solve thrilling mystery stories." },
  { title: "Biographies of Legends", subject: "Biography", author: "Author F", isbn: "678901", type: "Premium", image: "/images/book6.jpg", authorImage: "/images/author6.jpg", description: "Read about legendary personalities." },
  { title: "Advanced Science", subject: "Science", author: "Author G", isbn: "789012", type: "Free", image: "/images/book7.jpg", authorImage: "/images/author7.jpg", description: "Dive deeper into scientific theories." },
  { title: "Modern Art", subject: "Art", author: "Author H", isbn: "890123", type: "Premium", image: "/images/book8.jpg", authorImage: "/images/author8.jpg", description: "Understand contemporary art movements." },
  { title: "World History", subject: "History", author: "Author I", isbn: "901234", type: "Free", image: "/images/book9.jpg", authorImage: "/images/author9.jpg", description: "Trace the history of civilizations." },
  { title: "Fantasy Epics", subject: "Fantasy", author: "Author J", isbn: "012345", type: "Premium", image: "/images/book10.jpg", authorImage: "/images/author10.jpg", description: "Epic tales of heroes and monsters." },
  { title: "Mystery Chronicles", subject: "Mystery", author: "Author K", isbn: "123457", type: "Free", image: "/images/book11.jpg", authorImage: "/images/author11.jpg", description: "Engage with gripping mysteries." },
  { title: "Life Stories", subject: "Biography", author: "Author L", isbn: "234568", type: "Premium", image: "/images/book12.jpg", authorImage: "/images/author12.jpg", description: "Inspirational stories from real lives." }
];

export default function BookBrowsing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("title");
  const navigate = useNavigate();

  const handleBookClick = (book) => {
    navigate(`/book/${book.isbn}`, { state: { book } });
  };

  const filteredBooks = books.filter((book) => {
    if (searchType === "title") {
      return book.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === "author") {
      return book.author.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchType === "isbn") {
      return book.isbn.includes(searchTerm);
    }
    return true;
  });

  return (
    <div className="container mt-4">
      <Navbar bg="light" expand="lg" className="px-3">
        <Navbar.Brand onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>Back</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/subscription">Subscription</Nav.Link>
            <Nav.Link href="/my-books">My Books</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <h2>Browse Books</h2>

      <Form className="d-flex mb-3">
        <Form.Select
          className="me-2"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="isbn">ISBN</option>
        </Form.Select>

        <Form.Control
          type="text"
          placeholder={`Search by ${searchType}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      <Row className="g-0">
        {filteredBooks.map((book, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card onClick={() => handleBookClick(book)} style={{ cursor: "pointer", height: "500px" }}>
              <Card.Img 
                variant="top" 
                src={book.image} 
                style={{ height: "200px", width: "100%", objectFit: "contain", borderRadius: "8px" }} 
              />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{book.subject}</Card.Subtitle>
                <Card.Text><strong>Author:</strong> {book.author}</Card.Text>
                <Card.Text><strong>ISBN:</strong> {book.isbn}</Card.Text>
                <Card.Text>{book.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
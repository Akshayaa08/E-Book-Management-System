import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Form, FormControl, Dropdown, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SubscriptionPlan from './SubscriptionPlan';
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [showSubscription, setShowSubscription] = useState(false);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [bookIndex, setBookIndex] = useState(0);
  const [authorIndex, setAuthorIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();

  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const trendingBooks = [
    { title: "A thrilling adventure.", image: "/images/book1.jpg", description: "" },
    { title: "A deep dive into science.", image: "/images/book2.jpg", description: "" },
    { title: "An epic fantasy journey.", image: "/images/book3.jpg", description: "" },
    { title: "Unraveling mysteries.", image: "/images/book4.jpg", description: "" },
    { title: "Learning from history.", image: "/images/book5.jpg", description: "" },
    { title: "Exploring modern art.", image: "/images/book6.jpg", description: "" }
  ];

  const authorsInfo = [
    { name: "Patricia Highsmith", image: "/images/author1.jpg", fact: "Best known for their thrilling novels." },
    { name: "Hilary Mantel", image: "/images/author2.jpg", fact: "Expert in historical narratives." },
    { name: "George R. R. Martin", image: "/images/author3.jpg", fact: "Renowned for fantasy sagas." },
    { name: "Carl Sagan", image: "/images/author4.jpg", fact: "Famous for scientific insights." },
    { name: "Agatha Christie", image: "/images/author5.jpg", fact: "Known for mysterious tales." },
    { name: "Toni Morrison", image: "/images/author6.jpg", fact: "An icon in modern literature." }
  ];

  const handlePremiumClick = () => navigate("/subscription", { state: { returnTo: "/" } });
  const handleLogout = () => {
    localStorage.clear(); // Clear session storage
    navigate("/d"); // Redirect to login page
  };
  const nextBooks = () => setBookIndex((prevIndex) => (prevIndex + 3) % trendingBooks.length);
  const prevBooks = () => setBookIndex((prevIndex) => (prevIndex - 3 + trendingBooks.length) % trendingBooks.length);
  const nextAuthors = () => setAuthorIndex((prevIndex) => (prevIndex + 3) % authorsInfo.length);
  const prevAuthors = () => setAuthorIndex((prevIndex) => (prevIndex - 3 + authorsInfo.length) % authorsInfo.length);
  const navigateToBrowse = () => navigate("/browse");
  const navigateToMyBooks = () => navigate("/my-books");

  return (
    <>
      <Navbar bg="light" expand="lg" className="px-3">
        <Navbar.Brand href="#">eBinder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={navigateToMyBooks}>My Books</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Browse
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={navigateToBrowse}>Subjects</Dropdown.Item>
                <Dropdown.Item onClick={navigateToBrowse}>Trending</Dropdown.Item>
                <Dropdown.Item onClick={navigateToBrowse}>Library Explorer</Dropdown.Item>
                <Dropdown.Item onClick={navigateToBrowse}>Featured</Dropdown.Item>
                <Dropdown.Item onClick={navigateToBrowse}>Advanced Search</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" style={{ backgroundColor: "#f8f9fa" }} />
          </Form>
          <Nav>
            <Nav.Link style={{ cursor: "pointer" }} onClick={() => setShowPlanModal(true)}>Subscribe</Nav.Link>
            <Nav.Link style={{ cursor: "pointer", color: "gray" }} onClick={handleLogout}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-4">
        <div className="mb-4" style={{ height: "300px", overflow: "hidden", transition: "opacity 2s ease-in-out" }}>
          <img src={images[imageIndex]} alt="Slide" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>

        <h2>Trending Books</h2>
        <div className="d-flex justify-content-between align-items-center w-100">
          <Button variant="light" onClick={prevBooks}><ChevronLeft /></Button>
          {trendingBooks.slice(bookIndex, bookIndex + 3).map((book) => (
            <div key={book.title} className="p-2 border rounded" style={{ width: "30%" }}>
              <img src={book.image} alt={book.title} style={{ width: "100%", height: "300px", objectFit: "contain" }} />
              <h5>{book.title}</h5>
              <p>{book.description}</p>
            </div>
          ))}
          <Button variant="light" onClick={nextBooks}><ChevronRight /></Button>
        </div>

        <h2 className="mt-4">Author Facts</h2>
        <div className="d-flex justify-content-between align-items-center w-100">
          <Button variant="light" onClick={prevAuthors}><ChevronLeft /></Button>
          {authorsInfo.slice(authorIndex, authorIndex + 3).map((author) => (
            <div key={author.name} className="p-2 border rounded" style={{ width: "30%" }}>
              <img src={author.image} alt={author.name} style={{ width: "100%", height: "250px", objectFit: "cover" }} />
              <h5>{author.name}</h5>
              <p>{author.fact}</p>
            </div>
          ))}
          <Button variant="light" onClick={nextAuthors}><ChevronRight /></Button>
        </div>
      </Container>

      <footer className="text-center py-3 mt-5" style={{ backgroundColor: "#f8f9fa" }}>
        <p>&copy; 2025 eBinder. All rights reserved.</p>
      </footer>

      <Modal show={showPlanModal} onHide={() => setShowPlanModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Select Subscription Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="outline-primary" className="me-2" onClick={() => setShowPlanModal(false)}>Basic Plan (Free)</Button>
          <Button variant="primary" onClick={handlePremiumClick}>Premium Plan (Go to Payment)</Button>
        </Modal.Body>
      </Modal>

      {showSubscription && <SubscriptionPlan />}
    </>
  );
}

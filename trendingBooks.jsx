import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const TrendingBooks = ({ books }) => {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">Trending Books</h2>
      <Row>
        {books.map((book, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.coverImage} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  by {book.author}
                </Card.Subtitle>
                <Card.Text>{book.description}</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrendingBooks;

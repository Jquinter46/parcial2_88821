import React from 'react';
import { Container, Card, Button, Carousel } from 'react-bootstrap';

export const Inicio: React.FC = () => {
  return (
    <>
      
      <Container className="p-4 bg-light text-center">
        <h1> Bienvenido a Star Concerts</h1>
        <p>Los mejores conciertos a tu alcance</p>
      </Container>

      
      <Container className="mt-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/concierto.jpg" alt="Concierto" />
          <Card.Body>
            <Card.Title>Concierto de Jazz</Card.Title>
            <Card.Text>
              Disfruta del mejor jazz en vivo. No te lo pierdas.
            </Card.Text>
            <Button variant="primary">Comprar Boletos</Button>
          </Card.Body>
        </Card>
      </Container>

      
      <Container className="mt-5">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/concierto1.jpg"
              alt="Concierto 1"
            />
            
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};



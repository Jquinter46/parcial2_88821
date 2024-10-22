import React from 'react';
import { Container, Card, Button, Carousel } from 'react-bootstrap';

export const Inicio: React.FC = () => {
  return (
    <>
      {/* Sección de bienvenida */}
      <Container className="p-4 bg-light text-center">
        <h1>Bienvenido a Star Concerts</h1>
        <p>Los mejores conciertos a tu alcance</p>
      </Container>

      {/* Tarjeta de ejemplo */}
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

      {/* Carrusel sencillo */}
      <Container className="mt-5">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/concierto1.jpg"
              alt="Concierto 1"
            />
            <Carousel.Caption>
              <h3>Concierto de Rock</h3>
              <p>¡No te pierdas este evento en vivo!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/concierto2.jpg"
              alt="Concierto 2"
            />
            <Carousel.Caption>
              <h3>Concierto de Pop</h3>
              <p>Una noche llena de éxitos musicales.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};



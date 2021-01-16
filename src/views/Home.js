import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import data from '../data';

class Home extends Component {
  render() {
    return (
      <main>
        <Container>
          <Jumbotron fluid={false}>
            <h1>Codando caminhos</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, suscipit aspernatur perspiciatis soluta illum at dolores alias dolore quaerat. Nemo error, est sit temporibus unde vel aliquid itaque? Cupiditate illum culpa deleniti impedit. Facilis, officiis eligendi? Pariatur eius deserunt ratione minus eligendi quia commodi dolore numquam reprehenderit, modi soluta nesciunt dolor porro aliquam provident laudantium, voluptatibus, magnam beatae molestias quis?
            </p>
          </Jumbotron>
          <CardDeck>
            {data.map((card, index) => (
              <Card style={{ width: '18rem' }} key={index}>
                <Card.Img variant="top" src="https://picsum.photos/200" />
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between' }}>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>
                    {card.body.split(' ').slice(0, 20).join(' ') + '...'}
                  </Card.Text>
                  <Button variant="primary">Saiba mais</Button>
                </Card.Body>
              </Card>
            ))}
          </CardDeck>
        </Container>
      </main>
    );
  }
}

export default Home;

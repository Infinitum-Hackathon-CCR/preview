import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Card from '../components/Card.js';
import CardDeck from '../components/CardDeck.js';
import Container from '../components/Container.js';
import Section from '../components/Section.js';

import './App.css';

import data from '../data';

function App() {
  return (
    <>
      <Header />
      <Navbar items={data.map(item => item.title)}/>
      <Container>
        <main>
          {data.map(item => <Section title={item.title} body={item.body} />)}
          <CardDeck>
            <Card title="Título" thumbnail="https://picsum.photos/200" body="Conteúdo do body" />
            <Card title="Título" thumbnail="https://picsum.photos/200" body="Conteúdo do body" />
            <Card title="Título" thumbnail="https://picsum.photos/200" body="Conteúdo do body" />
          </CardDeck>
        </main>
      </Container>
      <Footer />
    </>
  )
}

export default App;

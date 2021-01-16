import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Card from '../components/Card.js';
import CardDeck from '../components/CardDeck.js';
import Container from '../components/Container.js';

import './App.css';

import data from '../data';

function App() {
  return (
    <>
      <Header />
      <Navbar items={data.map(item => item.title)}/>
      <Container>
        <main>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ducimus consequuntur aliquid explicabo quisquam expedita cum ad asperiores architecto laborum provident alias repudiandae culpa? Quasi aliquid explicabo voluptatem ab fugiat nihil sed consequatur, ratione dolorum odit tempore soluta corrupti corporis rerum? Natus culpa quisquam rerum repudiandae sit, voluptatum maiores! Voluptatem consequatur accusamus voluptatibus inventore obcaecati similique dolor, repellendus sed quas aut quos ab repudiandae praesentium exercitationem reprehenderit ad a totam. Temporibus quasi sequi reprehenderit, totam sunt accusantium aliquid vero dolore, eligendi molestias, officia debitis quas necessitatibus eaque illo laudantium et iste provident id. Error corrupti doloremque quia officia ea consectetur asperiores dolore harum neque, iure perspiciatis laboriosam facilis vitae architecto! Eaque odit fugiat temporibus harum ducimus reiciendis exercitationem sit dignissimos rerum quasi alias doloremque sunt sequi beatae, debitis impedit quod. Est debitis id voluptatibus optio perferendis libero molestias distinctio, quas, quos mollitia, nobis iusto iure sapiente delectus numquam odio officia obcaecati odit adipisci. Voluptatum unde mollitia voluptas iusto qui commodi fugit quae. Iure explicabo architecto libero vero soluta accusamus deserunt repudiandae quisquam itaque ut? Harum non fugit doloribus temporibus, placeat atque, et aut quia dolorem alias at repudiandae laborum autem maxime eligendi asperiores quam voluptatem! Quam iste animi fuga accusantium.</p>
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

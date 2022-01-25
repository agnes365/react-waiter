import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home'
import TableEdit from './components/pages/TableEdit/TableEdit'
import NotFound from './components/pages/NotFound/NotFound'
import { Container } from 'react-bootstrap';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';

function App() {
  return (
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:tableId" element={<TableEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
  );
}

export default App;
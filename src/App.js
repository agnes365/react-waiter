import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home'
import TableEdit from './components/pages/TableEdit/TableEdit'
import NotFound from './components/pages/NotFound/NotFound'
import { Container, Spinner } from 'react-bootstrap';
import Footer from './components/views/Footer/Footer';
import Header from './components/views/Header/Header';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTables } from "./redux/tablesRedux";

function App() {

  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  useEffect(() => dispatch(fetchTables(() => setLoader(false))), [dispatch]);

  return (
    loader ?
      <Container className="d-flex justify-content-center">
        <Spinner animation="border" />
      </Container>
      :
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
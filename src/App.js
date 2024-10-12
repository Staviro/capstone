//Import
import './assets/styles/app.css';
//Components
import Footer from './components/shared/footer/Footer';
import Nav from './components/shared/nav/Nav';
import Main from './components/shared/main/Main';
import Header from './components/shared/header/Header';
import HomePage from './components/pages/HomePage';
import BookingPage from './components/pages/BookingPage';

//Modules
import { Routes, Route } from 'react-router-dom';
import ConfirmedBooking from './components/pages/ConfirmedBooking';

function App() {
  return (
    <>
      <Header style="nav">
        <Nav></Nav>
      </Header>
      <Main>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/booking' element={<BookingPage/>}></Route>
          <Route path='/confirmedbooking' element={<ConfirmedBooking></ConfirmedBooking>}></Route>
        </Routes>
      </Main>
      <Footer>
      </Footer>
    </>
  );
}

export default App;

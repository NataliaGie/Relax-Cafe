import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/NavBar/NavBar';
import GlobalStyle from './globalStyle';
import MainPage from './pages/MainPage';
import Footer from './components/Footer/Footer';
import ScrollToTop from './ScrollToTop';
import Spinner from './ui/Spinner';
import NotFound from './pages/NotFoundPage';

const MenuPage = React.lazy(() => import('./pages/MenuPage/MenuPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage/ContactPage'));


function App() {
  return (
    <Router>
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <MainPage />
        </Route>
        <Route path="/menu">
          <Navbar 
            dark
            sticky />
          <MenuPage />
        </Route>
        <Route path="/contact">
          <Navbar 
            dark
            sticky />
          <ContactPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </Suspense>
      <Footer />
    </>
    </Router>
  );
}

export default App;

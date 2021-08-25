import React, { Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/NavBar/NavBar';
import GlobalStyle from './globalStyle';
import MainPage from './components/HomePage';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import Spinner from './components/Spinner';
import NotFound from './components/NotFoundPage';

const MenuPage = React.lazy(() => import('./components/MenuPage/MenuPage'));
const ContactPage = React.lazy(() => import('./components/ContactPage/ContactPage'));


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

import React from 'react';
import {connect} from 'react-redux';
import {Link,Route} from 'react-router-dom';
import MoviesPage from './components/page/MoviesPage';
import AddMoviesPage from './components/page/AddMoviePage';
import UpdateMoviesPage from './components/page/UpdateMoviePage';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Header
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <HeaderNav/>
     <div className="App">
       <Link to='movies'>Movies</Link>
       <Route exact path='/movies' component={MoviesPage}></Route>
       <Route exact path='/movies/add' component={AddMoviesPage}></Route>
       <Route exact path='/movies/update/:id' component={UpdateMoviesPage}></Route>
       <Route exact path='/' >
       <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Semantic UI React Fixed Template</Header>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>
            A text container is used for the main container, which is useful for single column layouts.
          </p>

        </Container>
      </Route>
     </div>

    
    <Footer/>
    
  </div>
)

function App() {
  return (
    <FixedMenuLayout/>
    
  );
}

export default connect()(App);

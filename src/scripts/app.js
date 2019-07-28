import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './containers/main'
import Navigation from "./containers/navigation";
import {Footer} from "./containers/footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <nav>
            <Navigation/>
          </nav>
        </header>
        <main>
          <Main/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </BrowserRouter>

    );
  }
}

export default App;
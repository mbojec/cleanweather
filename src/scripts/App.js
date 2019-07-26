import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/Main'
import Navigation from "./components/navigation";

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
      </BrowserRouter>

    );
  }
}

export default App;
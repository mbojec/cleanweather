import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Footer, Main, Navigation} from "./containers";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <header className={"app-header"}>
            <Navigation/>
          </header>
          <main className={"app-main"}>
            <Main/>
          </main>
          <footer className={'app-footer'}>
            <Footer/>
          </footer>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
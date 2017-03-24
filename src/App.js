import React, { Component } from 'react';
import Header from './components/Header';
import EditInvoice from './components/EditInvoice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="ph5">
          <EditInvoice />
        </div>
      </div>
    );
  }
}

export default App;

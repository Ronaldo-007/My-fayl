import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import  Header from '../Header/Header';
import Section from '../Section/Section';
import Contact from '../Contact/Contact';
import Clients from '../Clients/Clients';






class App extends React.Component {
  render() {
    return <div className="App">
      <Navbar />   {/* <Header></Header> - bu usulda ham ishlayveradi */}
      <Header />
      <Section />
      <Contact />
      <Clients />
    </div>
  }
}

export default App;
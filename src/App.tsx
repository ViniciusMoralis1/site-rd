import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesHandler from "./Routes/RoutesHandler";
import Header from './components/header/Header'
function App() {
  return (
    <div>
      <Router>
        <Header />
        <RoutesHandler />
      </Router>

    </div>
  );
}

export default App;
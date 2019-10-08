import React from 'react';
import './App.css';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Contact name="Dylan Belouis" 
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyS5sXsW7Dv3CaDqEmINCzCb3GZztBIDAGexFXFSp6NxKBdAYY" 
      />
      <Contact name="Gérard Lotus" 
      avatar="https://randomuser.me/api/portraits/men/96.jpg" 
      online />
     <Contact name="Sabrine Fale" 
      avatar="https://randomuser.me/api/portraits/women/30.jpg" 
      />
    </div>
  );
}

export default App;

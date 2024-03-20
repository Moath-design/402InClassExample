import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Items from './components/Items';
import ItemPage from './components/ItemPage';
import ItemAdmin from './components/ItemAdmin';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/items' element={<Items/>}/>
        <Route path='/admin' element={<ItemAdmin/>}/>
        <Route path='/items/:id' element={<ItemPage/>}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;

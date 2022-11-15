import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import SiteHeader from './components/partials/SiteHeader';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Animals from './components/animals/Animals';
import AnimalDetails from './components/animal/AnimalDetails'
import AnimalCard from './components/animal-card/AnimalCard';
import EditAnimalDetails from './components/animal/EditAnimalDetails'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <SiteHeader />

      <Routes>
        <Route path="/" element={<Animals />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/animals/:animalId" element={<AnimalDetails />} />
        <Route path="/animals/:animalId/edit" element={<EditAnimalDetails />} />
      </Routes>
    </div>
  );
}

export default App;

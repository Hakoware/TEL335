import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import Test from "./components/test";
import Sentadilla from "./components/sentadilla"

function App() {
  return (

    <Router>      
      <Navbar />

      <br/>
      <Routes>
        <Route path="/ExercisesList" exact element={<ExercisesList />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/test" element={<Test />} />
        <Route path="/Sentadilla" element={<Sentadilla />} />
      </Routes>
    </Router>

  );
}

export default App;

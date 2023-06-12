import React from 'react';
import { useEffect, useState } from "react";
import Axios from "axios";

function ExercisesList() {
    const [listOfExercise, setListOfExercise] = useState([]);

    useEffect(()=> {
      Axios.get("http://localhost:3001/exercise").then((response)=>{setListOfExercise(response.data)})
    }, [] );
  
    return (
        <div className="App">
            <div className="taskDisplay"> 
            <h3>Ejercicios</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th className="table-header">Usuario</th>
                    <th className="table-header">Ejercicio</th>
                    <th className="table-header">Cantidad de repeticiones</th>
                    <th className="table-header">Fecha</th>
                    <th className="table-header">Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfExercise.map((user) => (
                    <tr key={user.id}>
                        <td>{user.user}</td>
                        <td>{user.type}</td>
                        <td>{user.total}</td>
                        <td>{user.date}</td>
                        <td>{user.description}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
}
export default ExercisesList;

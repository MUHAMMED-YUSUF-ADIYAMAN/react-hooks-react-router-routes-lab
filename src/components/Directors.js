import React from "react";
import { directors } from "../data";

function Directors() {
  return <div><h1>Directors Page</h1>
  {directors.map((director)=>(
    <div key={director.name+2}>
      <h2>Name: {director.name}</h2>
      <p>Movies:</p>
      <ul>
      {director.movies.map((e)=>
      <li key={director.name+e+2}>{e}</li>)}
      </ul>

    </div>
  ))}
  </div>;
}

export default Directors;

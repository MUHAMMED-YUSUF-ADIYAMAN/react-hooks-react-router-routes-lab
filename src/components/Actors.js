import React from "react";
import { actors } from "../data";

function Actors() {
  return <div><h1>Actors Page</h1>
  {actors.map((actor)=>(
    <div key={actor.name+3}>
      <h2>Name: {actor.name}</h2>
      Movies:
      <ul>
      {actor.movies.map((e)=>
      <li key={e+actor.name+3}>{e}</li>)}
      </ul>

    </div>
  ))}
  </div>;;
}

export default Actors;

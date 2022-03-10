import React from "react";
import { movies } from "../data";

function Movies() {
  return <div><h1>Movies Page</h1>
  {movies.map((movie)=>(
    <div key={movie.title+1}>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time} </p>
      Genres:
      <ul>
      {movie.genres.map((e)=>
      <li key={e+movie.title+1}>{e}</li>)}
      </ul>

    </div>
  ))}
  </div>;
}

export default Movies;

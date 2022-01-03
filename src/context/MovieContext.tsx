import React, { createContext, ReactNode, useState } from 'react';
import { v4 } from 'uuid';
interface movieContextDefaultProps {
  children: ReactNode;
}

interface Movie {
  id: string;
  name: string;
}

interface MovieContextDefault {
  movies: Movie[];
  addMovie: (name: string) => void;
  deleteMovie: (id: string) => void;
}
const movieContextDefaultData = {
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
};
export const MovieContext = createContext<MovieContextDefault>(movieContextDefaultData);

const MovieContextProvider = ({ children }: movieContextDefaultProps) => {
  const [movies, setMovies] = useState<Movie[]>(movieContextDefaultData.movies);
  const addMovie = (name: string) => {
    const id = v4();
    setMovies((movies) => [...movies, { id, name }]);
  };
  const deleteMovie = (id: string) => {
    const newMovies = movies.filter((el) => el.id !== id);
    setMovies(newMovies);
  };
  const movieContextDynamic = { movies, addMovie, deleteMovie };
  return <MovieContext.Provider value={movieContextDynamic}>{children}</MovieContext.Provider>;
};
export default MovieContextProvider;

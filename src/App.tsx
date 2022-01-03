import React from 'react';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import MovieContextProvider from './context/MovieContext';
import ProgressContextProvider from './context/ProgressContext';
import ThemeContextProvider from './context/ThemeContext';
import ToggleThemeBtn from './context/ToggleThemeBtn';
import './styles/App.css';
export function App() {
  return (
    <div>
      <ThemeContextProvider>
        <MovieContextProvider>
          <ProgressContextProvider>
            <Navbar />
            <Movies/>
            <ToggleThemeBtn />
          </ProgressContextProvider>
        </MovieContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

import { Box, Button, Chip, PropTypes, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { MovieContext } from '../context/MovieContext';
import { ThemeContext } from '../context/ThemeContext';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInput: {
      marginRight: '5px',
    },
    movieChip: {
      fontSize: '2rem',
      padding: '30px 10px',
      margin: '5px',
    },
  }),
);

const Movies = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState<string>('');
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);
  const { theme } = useContext(ThemeContext);
  const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>;
  const onMovieInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMovie(e.target.value);
  };
  const handleAddMovie = () => {
    if (movie) {
      addMovie(movie);
      setMovie('');
      return;
    }
    alert('Nhập tên');
    return;
  };
  return (
    <>
      <Box display={'flex'} justifyContent={'center'} my={5}>
        <TextField
          label='Your favorite movie'
          variant='outlined'
          className={classes.movieInput}
          value={movie}
          onChange={onMovieInputChange}
        />
        <Button variant='contained' color={chipTheme} onClick={() => handleAddMovie()}>
          Add
        </Button>
      </Box>
      <Box display={'flex'} justifyContent={'center'} flexWrap='wrap' mx={5}>
        {movies.map((el) => {
          return (
            <Chip
              onDelete={() => deleteMovie(el.id)}
              key={el.id}
              label={el.name}
              clickable
              color={chipTheme}
              className={classes.movieChip}
            />
          );
        })}
      </Box>
    </>
  );
};

export default Movies;

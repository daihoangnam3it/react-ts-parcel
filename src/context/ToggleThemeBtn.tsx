import { Fab } from '@material-ui/core';
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    floatBtn: {
      position: 'fixed',
      right: '3rem',
      bottom: '3rem',
    },
  }),
);
const ToggleThemeBtn = () => {
  const classes = useStyles();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Fab
      color={'secondary'}
      variant='extended'
      className={classes.floatBtn}
      onClick={() => toggleTheme(theme === 'primary' ? 'secondary' : 'primary')}
    >
      Toggle Theme
    </Fab>
  );
};

export default ToggleThemeBtn;

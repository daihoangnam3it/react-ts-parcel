import { AppBar, Box, Button, Chip, FormControl, MenuItem, Select, Toolbar, Typography } from '@material-ui/core';
import React, { useState, ChangeEvent, useEffect, useContext } from 'react';
import WelcomeMessage from './WelcomeMessage';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { ProgressContext } from '../context/ProgressContext';
import { ThemeContext } from '../context/ThemeContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: 'white',
      borderBottom: '1px solid white',
    },
  }),
);
const Navbar = () => {
  const classes = useStyles();
  const { lastTime, status } = useContext(ProgressContext);
  const { theme } = useContext(ThemeContext);
  const [position, setPosition] = useState<string>('Full-Stack dev');
  const [time, setTime] = useState<Date>(new Date(Date.now()));
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const onPositionChange = (
    e: ChangeEvent<{
      value: unknown;
    }>,
  ): void => {
    setPosition(e.target.value as string);
  };
  return (
    <AppBar position='static' color={theme}>
      <Toolbar>
        <Box display='flex' justifyContent='space-between' alignItems='center' width={1} py={2}>
          <Typography variant='h6'>My Movies</Typography>
          <Box>
            <WelcomeMessage position={position} country='Vietnam' />
            <Chip label={`Last time working this project: ${lastTime} - Status: ${status}`} />
            <Box mt={1} textAlign='center'>
              <FormControl>
                <Select value={position} onChange={onPositionChange} className={classes.positionSelect}>
                  <MenuItem value='Full-Stack dev'>Full-Stack dev</MenuItem>
                  <MenuItem value='Back-end Dev'>Back-end Dev</MenuItem>
                  <MenuItem value='Front-end dev'>Front-end dev</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign='center'>
            <Box my={1} textAlign='center'>
              <Typography variant='h6'>{time.toUTCString()}</Typography>
            </Box>
            <Button variant='contained'>Login</Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

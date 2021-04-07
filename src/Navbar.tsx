import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from '@reach/router';
import { Grid } from '@material-ui/core';
import Profile from './Profile';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginRight: '1rem',
    },
  })
);

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container={true}>
          <Grid item={true}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid
            item={true}
            style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
          >
            <Typography variant="h6" className={classes.title}>
              <Link to="/">Organisations</Link>
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <Link to="/page-two">Countries</Link>
            </Typography>
          </Grid>
          <Grid item={true}>
            <Profile />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

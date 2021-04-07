import React from 'react';
import {
  IconButton,
  makeStyles,
  Popover,
  Typography,
  CardContent,
  Avatar,
  CardActions,
} from '@material-ui/core';
import {
  PersonOutline as UserIcon,
  Person as PersonIcon,
} from '@material-ui/icons';

import { useHistory } from 'react-router-dom';
import { useLoggedInUser } from './useLoggedInUser';

import { Button } from '@tibolacan/mui-overrides.ui.button';

const avatarBg = '#0E80A7';
const useStyles = makeStyles((theme) => {
  return {
    popover: {
      width: '300px',
    },
    avatarLarge: {
      margin: '0 auto',
      width: '80px',
      height: '80px',
      fontSize: '18px',
      color: theme.palette.getContrastText(avatarBg),
      backgroundColor: avatarBg,
    },
    avatarLargeIcon: {
      fontSize: '28px',
    },
    cardFooter: {
      background: '#f5f5f5',
      boxShadow: 'inset 0px 1px 1px #bababa',
      justifyContent: 'center',
    },
  };
});

function Profile() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const userInfo = useLoggedInUser();

  return (
    <>
      <IconButton
        aria-describedby={id}
        id="btn-popover-user"
        color="inherit"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        <UserIcon color="secondary" />
      </IconButton>
      <Popover
        id="profile-popover"
        classes={{ paper: classes.popover }}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <CardContent>
          <Avatar
            className={classes.avatarLarge}
            src={(userInfo || {}).picture}
          >
            {!(userInfo || {}).picture && (
              <PersonIcon className={classes.avatarLargeIcon} />
            )}
          </Avatar>
        </CardContent>

        <CardContent>
          {((userInfo || {}).givenName || (userInfo || {}).surName) && (
            <Typography
              variant="h2"
              align="center"
              style={{ fontSize: '1.5rem' }}
            >
              {(userInfo || {}).givenName} {(userInfo || {}).surName}
            </Typography>
          )}
          <Typography variant="body2" align="center" color="textSecondary">
            {(userInfo || {}).orgName}
          </Typography>
        </CardContent>

        <CardActions className={classes.cardFooter}>
          <Button
            color="secondary"
            id="btn-logout"
            variant="outlined"
            onClick={() => history.push('/logout')}
          >
            Sign Out
          </Button>
        </CardActions>
      </Popover>
    </>
  );
}

export default Profile;

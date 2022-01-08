import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import Paper from '@material-ui/core/Paper';
import useStyles from './UserMenu.styles';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../store';
import ButtonTooltip from '../ButtonTooltip';
import MenuLink from '../MenuLink';
import { AuthServiceBase } from '../../services/AuthService.base';
import { userActions } from '../../store/user/slice';

const UserMenu = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const classes = useStyles();
  const { user } = useSelector((state) => state.user);

  if (user == null) return null;

  return (
    <>
      <Paper>
        <Grid container className={classes.box}>
          <Grid container item spacing={1} className={classes.title}>
            <Grid item>
              <Avatar />
            </Grid>
            <div className={classes.nicknameBlock}>
              <Grid item>
                <Typography>{user.nickname}</Typography>
              </Grid>
              <Grid item className={classes.logout}>
                <Typography
                  onClick={() => {
                    AuthServiceBase.logout().then(() => {
                      dispatch(userActions.removeUser());
                    });
                  }}
                  variant="body2"
                >
                  Logout
                </Typography>
              </Grid>
            </div>
          </Grid>
          <Grid container direction="column">
            <MenuLink to="/myposts" pathname={location.pathname}>
              <ListItemButton className={classes.button}>
                <ListItemText primaryTypographyProps={{ variant: 'h6' }}>
                  My posts
                </ListItemText>
              </ListItemButton>
            </MenuLink>
            <ListItem disabled button className={classes.button}>
              <ListItemText primaryTypographyProps={{ variant: 'h6' }}>
                Search
              </ListItemText>
            </ListItem>
            <ListItem disabled button className={classes.button}>
              <ListItemText primaryTypographyProps={{ variant: 'h6' }}>
                Comments
              </ListItemText>
            </ListItem>
            <ListItem disabled button className={classes.button}>
              <ListItemText primaryTypographyProps={{ variant: 'h6' }}>
                Favorites
              </ListItemText>
            </ListItem>
          </Grid>
        </Grid>
      </Paper>
      <ButtonTooltip
        title={
          !user?.isActivated ? 'Activate your account to create a post' : ''
        }
      >
        <Button
          fullWidth
          color="primary"
          variant="contained"
          disabled={!user?.isActivated}
          component={Link}
          to="/newpost"
        >
          Create new post
        </Button>
      </ButtonTooltip>
    </>
  );
};

export default UserMenu;

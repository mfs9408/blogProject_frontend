import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { useLocation, useNavigate } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import useStyles from './UserMenu.styles';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../store';
import MenuLink from '../MenuLink';
import { AuthServiceBase } from '../../services/AuthService.base';
import { userActions } from '../../store/user/slice';

const UserMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
                  onClick={async () => {
                    await AuthServiceBase.logout()
                      .then(() => {
                        dispatch(userActions.removeUser());
                      })
                      .finally(() => navigate('/'));
                  }}
                  variant="body2"
                >
                  Выйти
                </Typography>
              </Grid>
            </div>
          </Grid>
          <Grid container direction="column">
            <MenuLink to="/myposts" pathname={location.pathname}>
              <ListItem button className={classes.button}>
                <ListItemText primaryTypographyProps={{ variant: 'h6' }}>
                  My posts
                </ListItemText>
              </ListItem>
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
      <MenuLink to="/newpost" pathname={location.pathname}>
        <Button fullWidth color="secondary" variant="contained">
          Create new post
        </Button>
      </MenuLink>
    </>
  );
};

export default UserMenu;

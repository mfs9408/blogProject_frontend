import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { useLocation } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './UserMenu.styles';
import { useSelector } from '../../store';
import MenuLink from '../MenuLink';
import Button from '@material-ui/core/Button';
import {Paper} from "@material-ui/core";

const UserMenu = () => {
  const location = useLocation();

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
            <Grid item>
              <Typography>{user.nickname}</Typography>
            </Grid>
          </Grid>
          <Grid container direction="column">
            <MenuLink to="/api/myposts" pathname={location.pathname}>
              <ListItem button className={classes.button}>
                <ListItemText primaryTypographyProps={{ variant: 'h6' }}>
                  My posts
                </ListItemText>
              </ListItem>
            </MenuLink>
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
      <MenuLink to="/api/newpost" pathname={location.pathname}>
        <Button fullWidth color="secondary" variant="contained">
          Create new post
        </Button>
      </MenuLink>
    </>
  );
};

export default UserMenu;

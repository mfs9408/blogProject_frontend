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

const UserMenu = () => {
  const location = useLocation();

  const classes = useStyles();
  const { user } = useSelector((state) => state.user);

  if (user == null) return null;

  return (
    <Grid container className={classes.root}>
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
        <ListItem button className={classes.button}>
          <ListItemText primaryTypographyProps={{ variant: 'h6' }}>
            Comments
          </ListItemText>
        </ListItem>
        <ListItem button className={classes.button}>
          <ListItemText primaryTypographyProps={{ variant: 'h6' }}>
            Favorites
          </ListItemText>
        </ListItem>
      </Grid>
    </Grid>
  );
};

export default UserMenu;

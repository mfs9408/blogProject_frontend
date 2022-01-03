import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './AuthorizationComponent.styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { RegistrationInterface } from '../../types';
import { AuthServiceBase } from '../../services/AuthService.base';
import { userActions } from '../../store/user/slice';
import { Paper } from '@material-ui/core';

const AuthorizationComponent = ({
  setIsRegistration,
  isRegistration,
}: RegistrationInterface) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    AuthServiceBase.login(email, password)
      .then((response) => dispatch(userActions.getUser(response)))
      .catch((e) => console.log(e.response));
  };

  return (
    <form onSubmit={onSubmit}>
      <Paper>
        <Grid
          container
          item
          justifyContent="center"
          spacing={1}
          className={classes.root}
        >
          <Typography
            variant="h6"
            color="secondary"
            className={classes.typography}
          >
            Authorization
          </Typography>
          <Grid item xs={10}>
            <TextField
              name="email"
              variant="outlined"
              placeholder="Email"
              color="secondary"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              name="password"
              variant="outlined"
              placeholder="Password"
              color="secondary"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={10}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Send
            </Button>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              color="secondary"
              className={classes.clickedTypography}
              onClick={() => setIsRegistration(!isRegistration)}
            >
              Registration
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default AuthorizationComponent;

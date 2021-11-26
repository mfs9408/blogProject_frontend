import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import isEqual from 'lodash.isequal';
import { AuthServiceBase } from '../../services/AuthService.base';
import useStyles from './Registration.styles';

const Registration = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, nickname, password, confirmedPassword } = event.target;

    if (!isEqual(password.value, confirmedPassword.value)) {
      return console.log('wrong');
    }
    try {
      await AuthServiceBase.registration(
        email.value,
        nickname.value,
        password.value
      );
      navigate('/api/successfullyregistered');
    } catch (e: any) {
      console.log(e.response.data.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Grid
        container
        item
        xs={11}
        md={3}
        justifyContent="center"
        spacing={1}
        className={classes.root}
      >
        <Grid item>
          <Typography variant="h5">Registration</Typography>
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="email"
            variant="outlined"
            placeholder="Email"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="nickname"
            variant="outlined"
            placeholder="Nickname"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="password"
            variant="outlined"
            placeholder="Password"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="confirmedPassword"
            variant="outlined"
            placeholder="Repeat password"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={10}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Registration;

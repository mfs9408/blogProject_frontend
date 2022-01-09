import React from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { AuthServiceBase } from '../../services/AuthService.base';
import { userActions } from '../../store/user';
import { useInput, validateHelper } from './validations';
import { RegistrationInterface } from '../../types';
import useStyles from './AuthorizationComponent.styles';
import { useIsAlertSnackBarOpen } from '../../utils/hooks/useIsAlertSnackBarOpen';
import AlertSnackBar from '../AlertSnackbar';

const AuthorizationComponent = ({
  setIsRegistration,
  isRegistration,
}: RegistrationInterface) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [, setIsAlertSnackBarOpen] = useIsAlertSnackBarOpen();

  const email = useInput('', {
    isEmpty: true,
    isEmail: true,
    minLength: 3,
  });
  const password = useInput('', { isEmpty: true, minLength: 5 });

  const onSubmit = async () => {
    await AuthServiceBase.login(email.value, password.value)
      .then((response) => dispatch(userActions.getUser(response)))
      .catch(() => setIsAlertSnackBarOpen(true));
  };

  return (
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
            value={email.value}
            onChange={(event) => email.onChange(event)}
            onBlur={email.onBlur}
            placeholder="Email"
            variant="outlined"
            color="secondary"
            fullWidth
            required
          />
          {email.isDirty && email.isEmpty && validateHelper('emptyEmail')}
          {email.isDirty &&
            email.isEmailCorrect &&
            validateHelper('incorrectEmail')}
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="password"
            value={password.value}
            onChange={(event) => password.onChange(event)}
            onBlur={password.onBlur}
            placeholder="Password"
            variant="outlined"
            color="secondary"
            fullWidth
            required
          />
          {password.isDirty &&
            password.isEmpty &&
            validateHelper('emptyPassword')}
        </Grid>
        <Grid item xs={10}>
          <Button
            onClick={onSubmit}
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
      <AlertSnackBar message="Invalid authorization data" severity="error" />
    </Paper>
  );
};

export default AuthorizationComponent;

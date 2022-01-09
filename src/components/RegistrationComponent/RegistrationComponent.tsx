import React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import { AuthServiceBase } from '../../services/AuthService.base';
import useStyles from './RegistrationComponent.styles';
import { RegistrationInterface } from '../../types';
import {
  useInput,
  validateHelper,
} from '../AuthorizationComponent/validations';
import { useIsAlertSnackBarOpen } from '../../utils/hooks/useIsAlertSnackBarOpen';
import AlertSnackBar from '../AlertSnackbar';

const RegistrationComponent = ({
  isRegistration,
  setIsRegistration,
}: RegistrationInterface) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [, setIsAlertSnackBarOpen] = useIsAlertSnackBarOpen();

  const email = useInput('', {
    isEmpty: true,
    isEmail: true,
    minLength: 3,
  });
  const nickname = useInput('', { isEmpty: true, minLength: 3 });
  const password = useInput('', {
    isEmpty: true,
    minLength: 5,
  });
  const confirmedPassword = useInput('', {
    isEmpty: true,
    minLength: 5,
    equalPassword: password.value,
  });

  const onSubmit = async () => {
    await AuthServiceBase.registration(
      email.value,
      nickname.value,
      password.value
    )
      .then(() => navigate('/successfullyregistered'))
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
        <Grid item>
          <Typography variant="h6" className={classes.typography}>
            Registration
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="email"
            value={email.value}
            onChange={(event) => email.onChange(event)}
            onBlur={email.onBlur}
            variant="outlined"
            placeholder="Email"
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
            name="nickname"
            value={nickname.value}
            onChange={(event) => nickname.onChange(event)}
            onBlur={nickname.onBlur}
            variant="outlined"
            placeholder="Nickname"
            color="secondary"
            fullWidth
            required
          />
          {nickname.isDirty && nickname.isEmpty && validateHelper('emptyEmail')}
          {nickname.isDirty &&
            nickname.isMinLength &&
            validateHelper('minLength', 3)}
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="password"
            value={password.value}
            onChange={(event) => password.onChange(event)}
            onBlur={password.onBlur}
            variant="outlined"
            placeholder="Password"
            color="secondary"
            fullWidth
            required
          />
          {password.isDirty &&
            password.isEmpty &&
            validateHelper('emptyPassword')}
          {password.isDirty &&
            password.isMinLength &&
            validateHelper('minLength', 5)}
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="confirmedPassword"
            value={confirmedPassword.value}
            onChange={(event) => confirmedPassword.onChange(event)}
            onBlur={confirmedPassword.onBlur}
            variant="outlined"
            placeholder="Repeat password"
            color="secondary"
            fullWidth
            required
          />
          {confirmedPassword.isDirty &&
            confirmedPassword.isEmpty &&
            validateHelper('emptyPassword')}
          {confirmedPassword.isDirty &&
            confirmedPassword.isPasswordConfirmed &&
            validateHelper('equalPassword')}
        </Grid>
        <Grid item xs={10}>
          <Button
            onClick={onSubmit}
            disabled={
              !email.isDataValid ||
              !nickname.isDataValid ||
              !password.isDataValid ||
              !confirmedPassword.isDataValid
            }
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
            Authorization
          </Typography>
        </Grid>
      </Grid>
      <AlertSnackBar message="This user is already exist" severity="error" />
    </Paper>
  );
};

export default RegistrationComponent;

import React, { SyntheticEvent } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@mui/material';
import { useIsAlertSnackBarOpen } from '../../utils/hooks/useIsAlertSnackBarOpen';

interface SnackBarInterface {
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error';
}

const AlertSnackBar = ({ message, severity }: SnackBarInterface) => {
  const [isAlertSnackBarOpen, setIsAlertSnackBarOpen] =
    useIsAlertSnackBarOpen();

  const handleClose = (event: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsAlertSnackBarOpen(false);
  };

  return (
    <Snackbar
      open={isAlertSnackBarOpen}
      autoHideDuration={2500}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackBar;

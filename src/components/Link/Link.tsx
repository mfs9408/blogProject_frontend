import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './Link.styles';

interface LinkProps {
  to: string;
  label: string;
}

const Link = ({ label, to }: LinkProps) => {
  const classes = useStyles();

  return (
    <MuiLink component={RouterLink} to={to} className={classes.root}>
      {label}
    </MuiLink>
  );
};

export default Link;

import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  label: string;
  color?: any;
}

const Link = ({ label, to, color }: LinkProps) => {
  return (
    <MuiLink component={RouterLink} to={to} color={color}>
      {label}
    </MuiLink>
  );
};

export default Link;

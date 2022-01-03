import React, { PropsWithChildren } from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import isEqual from 'lodash.isequal';
import useStyles from './MenuLink.styles';

interface LinkProps {
  to: string;
  pathname: string;
}

const MenuLink = ({
  children,
  to,
  pathname,
}: LinkProps & PropsWithChildren<{}>) => {
  const classes = useStyles(isEqual(to, pathname))();

  return (
    <MuiLink
      component={RouterLink}
      to={to}
      color="secondary"
      underline="none"
      className={classes.root}
    >
      {children}
    </MuiLink>
  );
};

export default MenuLink;

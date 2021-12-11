import React, { PropsWithChildren } from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import isEqual from 'lodash.isequal';
import useStyles from './AppBarLink.styles';

interface LinkProps {
  to: string;
  pathname: string;
}

interface OtherProps {}

const AppBarLink = ({
  children,
  to,
  pathname,
}: LinkProps & PropsWithChildren<OtherProps>) => {
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

export default AppBarLink;

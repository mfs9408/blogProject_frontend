import React, { PropsWithChildren } from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './PostLink.styles';

type PostLinkProps = PropsWithChildren<{
  id: string;
  pointerEvent?: 'auto' | 'none' | undefined;
}>;

const PostLink = ({ children, id, pointerEvent }: PostLinkProps) => {
  const classes = useStyles(pointerEvent)();

  return (
    <MuiLink
      className={classes.root}
      underline="none"
      component={RouterLink}
      to={`/${id}`}
    >
      {children}
    </MuiLink>
  );
};

export default PostLink;

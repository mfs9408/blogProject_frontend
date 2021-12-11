import React, { PropsWithChildren } from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './PostLink.styles';

type TemplateProps = PropsWithChildren<{
  to: string;
  pointerEvent?: 'auto' | 'none' | undefined
}>;

const PostLink = ({ children, to, pointerEvent }: TemplateProps) => {
  const classes = useStyles(pointerEvent)();

  return (
    <MuiLink
      className={classes.root}
      underline="none"
      component={RouterLink}
      to={`post/${to}`}
    >
      {children}
    </MuiLink>
  );
};

export default PostLink;

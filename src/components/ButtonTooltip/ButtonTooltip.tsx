import React, { PropsWithChildren } from 'react';
import Tooltip from '@mui/material/Tooltip';
import useStyles from './ButtonTooltip.styles';

const ButtonTooltip = ({
  children,
  title,
}: PropsWithChildren<{ title: string }>) => {
  const classes = useStyles();
  return (
    <Tooltip title={title} arrow>
      <div className={classes.root}>{children}</div>
    </Tooltip>
  );
};

export default ButtonTooltip;

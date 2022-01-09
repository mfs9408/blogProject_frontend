import React, { PropsWithChildren } from 'react';
import Tooltip from '@mui/material/Tooltip';

const ButtonTooltip = ({
  children,
  title,
}: PropsWithChildren<{ title: string }>) => (
  <Tooltip title={title} arrow>
    <span>{children}</span>
  </Tooltip>
);

export default ButtonTooltip;

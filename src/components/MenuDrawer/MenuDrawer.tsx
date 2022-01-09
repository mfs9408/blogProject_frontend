import React, { PropsWithChildren, useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useIsSideBarOpen } from '../../utils/hooks/useIsSideBarOpen';
import useStyles from './MenuDrawer.style';

type DrawerProps = PropsWithChildren<{}> & {
  isSm: boolean;
};

const MenuDrawer = ({ children, isSm }: DrawerProps) => {
  const classes = useStyles();
  const [isSideBarOpen, setIsSideBarOpen] = useIsSideBarOpen();

  const toggleOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  useEffect(() => {
    setIsSideBarOpen(false);
  }, [isSm, setIsSideBarOpen]);

  return (
    <Drawer
      anchor="right"
      variant={isSm ? 'temporary' : 'permanent'}
      open={isSideBarOpen}
      onClose={toggleOpen}
      classes={{
        paper: classes.drawer,
      }}
    >
      {children}
    </Drawer>
  );
};

export default MenuDrawer;

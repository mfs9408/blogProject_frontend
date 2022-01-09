import React, { PropsWithChildren, useEffect } from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { useIsSideBarOpen } from '../../utils/hooks/useIsSideBarOpen';

type DrawerProps = PropsWithChildren<{}> & {
  isSm?: boolean;
};

const MenuDrawer = ({ children }: DrawerProps) => {
  const [isSideBarOpen, setIsSideBarOpen] = useIsSideBarOpen();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  useEffect(() => {
    setIsSideBarOpen(false);
  }, [isSm]);

  return (
    <Drawer
      anchor="right"
      variant={isSm ? 'temporary' : 'permanent'}
      open={isSideBarOpen}
      onClose={toggleOpen}
    >

      {children}
    </Drawer>
  );
};

export default MenuDrawer;

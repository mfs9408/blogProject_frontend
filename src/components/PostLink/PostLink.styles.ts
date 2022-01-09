import { createStyles, makeStyles } from '@material-ui/core';

export default (pointerEvent: 'auto' | 'none' | undefined) =>
  makeStyles(() =>
    createStyles({
      root: {
        color: '#000',
        pointerEvents: pointerEvent ? pointerEvent : 'none',
      },
    })
  );

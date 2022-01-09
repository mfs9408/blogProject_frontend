import React, { Dispatch, SetStateAction } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { showPageNumber, numberToArrayConverter } from './helper';
import useStyles from './PageNumber.styles';

interface PageNumberInterface {
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  pagesQuantity: number;
}

const PageNumber = ({
  setCurrentPage,
  currentPage,
  pagesQuantity,
}: PageNumberInterface) => {
  const classes = useStyles();

  const onPageClick = (page: number | string) => {
    if (typeof page === 'number') {
      return setCurrentPage(page);
    }
  };

  return (
    <Grid container justifyContent="center" spacing={1}>
      {showPageNumber(numberToArrayConverter(pagesQuantity), currentPage).map(
        (page, key) => (
          <Grid
            key={key}
            onClick={() => onPageClick(page)}
            item
            className={classes.root}
          >
            <Typography
              variant="h6"
              color={currentPage === page ? 'secondary' : 'textSecondary'}
            >
              {page}
            </Typography>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default PageNumber;

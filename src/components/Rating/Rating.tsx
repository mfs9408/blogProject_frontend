import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import useStyles from './Rating.styles';
import theme from '../../theme';
import { useSelector } from '../../store';
import { PostService } from '../../services/PostService';
// import { raiseRating, decreaseRating } from './helpers';

interface RatingProperty {
  rating: number;
  postId: string;
  usersScore: number | undefined;
}

const Rating = ({ rating, postId, usersScore }: RatingProperty) => {
  const [rate, setRate] = useState<number>(rating);
  let [score, setScore] = useState<number>(usersScore ? usersScore : 0);

  const classes = useStyles(score)();
  const { user } = useSelector((state) => state.user);

  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const SIZE = isSm ? 'h6' : 'h4';
  const TEXT_SIZE = isSm ? 'medium' : 'large';

  const changeScore = () => {
    return PostService.fetchRating(user?.id, postId, score).then(({ data }) => {
      setRate(data.payload.rating);
    });
  };

  const raiseRating = () => {
    if (!user?.id) {
      return null;
    }
    if (score === -1) {
      setScore((score += 1));
      return changeScore();
    }

    if (score === 1) {
      setScore(0);
      return changeScore();
    }

    setScore((score += 1));
    return changeScore();
  };

  const decreaseRating = () => {
    if (!user?.id) {
      return null;
    }

    if (score === -1) {
      setScore(0);
      return changeScore();
    }

    setScore((score -= 1));
    return changeScore();
  };

  return (
    <Grid
      container
      direction={isSm ? 'row' : 'column'}
      justifyContent="flex-start"
      alignItems="center"
    >
      <ArrowUpwardIcon
        fontSize={TEXT_SIZE}
        className={classes.up}
        onClick={raiseRating}
      />
      <Typography className={classes.typography} variant={SIZE}>
        {rate}
      </Typography>
      <ArrowDownwardIcon
        fontSize={TEXT_SIZE}
        className={classes.down}
        onClick={decreaseRating}
      />
    </Grid>
  );
};

export default Rating;

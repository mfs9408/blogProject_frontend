import React from 'react';
import useStyles from './ImageContent.styles';

type ImageProperty = {
  value: string;
  user: string;
};

const ImageContent = ({ value, user }: ImageProperty) => {
  const classes = useStyles();

  return (
    <>
      <img
        src={`${process.env.REACT_APP_PIC_PATH}/users/${user}/${value}`}
        className={classes.root}
        alt="value"
      />
    </>
  );
};

export default ImageContent;

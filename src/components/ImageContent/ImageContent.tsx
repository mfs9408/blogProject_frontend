import React from 'react';
import useStyles from './ImageContent.styles';

type ImageProperty = {
  value: string;
  postId: string | undefined;
};

const ImageContent = ({ value, postId }: ImageProperty) => {
  const classes = useStyles();

  return (
    <>
      <img
        src={`${process.env.REACT_APP_PIC_PATH}/postPictures/${postId}/${value}`}
        className={classes.root}
        alt="value"
      />
    </>
  );
};

export default ImageContent;

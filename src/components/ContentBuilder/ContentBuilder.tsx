import React from 'react';
import { getContentValue } from './getContentValue';
import { ContentInterface } from '../../types';
import useStyles from './ContentBuilder.styles';

interface Content {
  content: ContentInterface;
  user: string;
}

const ContentBuilder = ({ user, content }: Content) => {
  const printContent = getContentValue(content, user);
  const classes = useStyles();

  return <div className={classes.root}>{printContent}</div>;
};

export default ContentBuilder;

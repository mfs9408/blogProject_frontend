import React from 'react';
import { getContentValue } from './getContentValue';
import { ContentInterface } from '../../types';

interface Content {
  content: ContentInterface;
  user: string;
  postId: string;
}

const ContentBuilder = ({ content, postId }: Content) => {
  const printContent = getContentValue(content, postId);

  return <div>{printContent}</div>;
};

export default ContentBuilder;

import React from 'react';
import { getContentValue } from './getContentValue';
import { ContentInterface } from '../../types';

interface Content {
  content: ContentInterface;
  user: string;
}

const ContentBuilder = ({ user, content }: Content) => {
  const printContent = getContentValue(content, user);

  return <div>{printContent}</div>;
};

export default ContentBuilder;

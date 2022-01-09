import React from 'react';
import { PostType } from '../../types';
import { getEditFields } from './getEditFields';

const FieldsCreator = (data: PostType) => {
  const printFields = getEditFields(data);
  return <>{printFields}</>;
};

export default FieldsCreator;

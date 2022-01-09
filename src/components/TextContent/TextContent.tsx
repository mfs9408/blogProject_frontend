import React from 'react';
import Typography from '@material-ui/core/Typography';

type TextProperty = {
  value: string;
};

const TextContent = ({ value }: TextProperty) => {
  return <Typography variant="body2">{value}</Typography>;
};

export default TextContent;

import TextContent from '../TextContent';
import { ContentInterface } from '../../types';
import ImageContent from '../ImageContent';

export const getContentValue = (
  { type, value }: Exclude<ContentInterface, '_id'>,
  user: string
) => {
  switch (type) {
    case 'string':
      return <TextContent value={value} />;
    case 'img':
      return <ImageContent value={value} user={user} />;
    default:
      throw new Error(`Не удалось определить тип свойства. Прилетело: ${type}`);
  }
};

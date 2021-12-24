import { PostType } from '../../types';
import StringField from '../StringField';

export const getEditFields = ({ id, type, value }: PostType) => {
  switch (type) {
    case 'string':
      return <StringField id={id} value={value} />;
    default:
      throw new Error(`Не удалось определить тип свойства. Прилетело: ${type}`);
  }
};

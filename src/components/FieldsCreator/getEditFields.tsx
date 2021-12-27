import { PostType } from '../../types';
import StringField from '../StringField';
import ImgField from '../ImgField';

export const getEditFields = ({ id, type, value }: PostType) => {
  switch (type) {
    case 'string':
      return <StringField id={id} value={value} />;
    case 'img':
      return <ImgField id={id} />;
    default:
      throw new Error(`Не удалось определить тип свойства. Прилетело: ${type}`);
  }
};

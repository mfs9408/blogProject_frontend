import { isValid, format } from 'date-fns';

export const DATE_FORMAT = 'MM.dd.yyyy';
export const DATE_TIME_FORMAT = 'MM.dd.yyyy HH:mm';

const parseAndFormatDate = (date: string) => {
  const dateObj = new Date(date);

  if (!isValid(dateObj)) return null;

  return format(dateObj, DATE_FORMAT);
};

export default parseAndFormatDate;

import dayjs from 'dayjs';

export const dateWithFormat = (dateString, format) => {
  return dayjs(dateString).format(format);
};

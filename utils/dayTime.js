import dayjs from 'dayjs';

export const dateWithFormat = (dateString, format) =>
  dayjs(dateString).format(format);

export const dateWith = dateString => dayjs(dateString);

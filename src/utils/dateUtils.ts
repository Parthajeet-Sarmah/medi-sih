import { format, parseISO } from 'date-fns';

export const formatDate = (date: string) => {
  return format(parseISO(date), 'MMM dd, yyyy');
};

export const formatTime = (time: string) => {
  return format(parseISO(`2000-01-01T${time}`), 'hh:mm a');
};

export const formatDateTime = (dateTime: string) => {
  return format(parseISO(dateTime), 'MMM dd, yyyy hh:mm a');
};
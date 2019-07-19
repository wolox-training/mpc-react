import { shape, string, number } from 'prop-types';

export const bookSelectedPropType = shape({
  name: string,
  summary: string,
  quantity: number
});

export const booksPropTypes = shape({
  id: number,
  name: string,
  author: string,
  year: number,
  image: string,
  summary: string
});

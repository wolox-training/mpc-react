export const required = value => (value ? undefined : 'Required field');

export const email = value =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

export const minLength = value =>
  value && value.length < 8 ? 'Field must have a minimum of 8 characters' : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

export const minLength = value => (value && value.length < 8 ? 'Field must have a minimum of 8 characters' : undefined);

// const validate = values => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Email inválido';
//   }
//   if (!values.password) {
//     errors.password = 'Required';
//   } else if (values.password.length < 8) {
//     errors.password = 'Password tiene que tener mínimo 8 caracteres';
//   }
//   return errors;
// };

// export default validate;

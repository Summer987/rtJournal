import * as yup from 'yup'

export const LoginFormSchema = yup.object({
  email: yup.string().email('Введен не email').required('Почта обязательна'),
  password: yup.string().min(6, 'Длина пароля больше 6 символов').required('Пароль обязателен'),
}).required();

export const RegisterFormSchema = yup
  .object()
  .shape({
    fullName: yup.string().required('Имя и фамилия обязательны'),
  })
  .concat(LoginFormSchema);

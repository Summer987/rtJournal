import React, {useState} from "react";
import Alert from '@material-ui/lab/Alert'
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {LoginFormSchema} from "../../../utils/yupSchemas";
import {Button, TextField} from "@material-ui/core";
import {FormField} from "../../FormField";
import {UserApi} from "../../../utils/api";
import {setCookie} from "nookies";
import {CreateUserDto, LoginDto} from "../../../utils/api/types";
import {useAppDispatch} from "../../../redux/hooks";
import {setUserData} from "../../../redux/slices/user";


interface loginFormProps {
  onOpenRegister: () => void
}

export const Login: React.FC<loginFormProps> = ({onOpenRegister}) => {
  const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState('')

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  })


  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await UserApi.login(dto)
      setCookie(null,'authToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      setErrorMessage('')
      dispatch(setUserData(data))
    } catch(err) {
      console.warn('Ошибка при авторизации', err)
      if (err.response) {
        setErrorMessage(err.response.data.message)
      }
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name='email' label='Почта' />
          <FormField name='password' label='Пароль' />
          {errorMessage && <Alert className='mb-20' severity='error'>{errorMessage}
          </Alert>}
          <div className='d-flex align-center justify-between'>
            <Button disabled={!form.formState.isValid || form.formState.isSubmitting} color='primary' type='submit' variant='contained'>Войти</Button>
            <Button color='primary' variant='text' onClick={onOpenRegister}>Регистрация</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
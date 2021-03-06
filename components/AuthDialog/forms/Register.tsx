import React, {useState} from "react";
import {setCookie} from "nookies";
import {Button} from "@material-ui/core";
import {FormField} from "../../FormField";
import {useForm,FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {RegisterFormSchema} from "../../../utils/yupSchemas";
import {CreateUserDto} from "../../../utils/api/types";
import Alert from "@material-ui/lab/Alert";
import {setUserData} from "../../../redux/slices/user";
import {useAppDispatch} from "../../../redux/hooks";
import {Api} from "../../../utils/api";

interface registerFormProps {
  onOpenRegister: () => void
  onOpenLogin: () => void
}

export const Register: React.FC<registerFormProps> = ({onOpenRegister,onOpenLogin}) => {
  const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState('')

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  })

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await Api().user.register(dto)
      setCookie(null,'authToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      dispatch(setUserData(data))
    } catch(err) {
      console.warn('Ошибка при регистрации', err)
      if (err.response) {
        setErrorMessage(err.response.data.message)
      }
    }
  }

  return (
    <div>
      <FormProvider {...form}>
          <FormField name='fullName' label='Имя и фамилия' />
          <FormField name='email' label='Почта' />
          <FormField name='password' label='Пароль' />
          {errorMessage &&
            <Alert className='mb-20' severity='error'>
              {errorMessage}
            </Alert>
          }
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='d-flex align-center justify-between'>
              <Button disabled={!form.formState.isValid || form.formState.isSubmitting} color='primary' type='submit' variant='contained' onClick={onOpenRegister}>Регистрация</Button>
              <Button color='primary' variant='text' onClick={onOpenLogin}>Войти</Button>
            </div>
          </form>
      </FormProvider>
    </div>
  )
}
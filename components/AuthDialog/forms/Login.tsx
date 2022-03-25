import React from "react";
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {LoginFormSchema} from "../../../utils/yupSchemas";
import {Button, TextField} from "@material-ui/core";
import {FormField} from "../../FormField";


interface loginFormProps {
  onOpenRegister: () => void
}

export const Login: React.FC<loginFormProps> = ({onOpenRegister}) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  })


  // console.log(form.formState.errors)
  const onSubmit = data => console.log(data);

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name='email' label='Почта' />
          <FormField name='password' label='Пароль' />
          <div className='d-flex align-center justify-between'>
            <Button disabled={!form.formState.isValid} color='primary' type='submit' variant='contained'>Войти</Button>
            <Button color='primary' variant='text' onClick={onOpenRegister}>Регистрация</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
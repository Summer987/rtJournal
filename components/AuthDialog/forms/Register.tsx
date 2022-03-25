import React from "react";
import {Button, TextField} from "@material-ui/core";
import {FormField} from "../../FormField";
import {useForm,FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {RegisterFormSchema} from "../../../utils/yupSchemas";

interface registerFormProps {
  onOpenRegister: () => void
  onOpenLogin: () => void
}

export const Register: React.FC<registerFormProps> = ({onOpenRegister,onOpenLogin}) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  })

  return (
    <div>
      <FormProvider {...form}>
        <form>
          <FormField name='fullName' label='Имя и фамилия' />
          <FormField name='email' label='Почта' />
          <FormField name='password' label='Пароль' />
          <div className='d-flex align-center justify-between'>
            <Button disabled={!form.formState.isValid} color='primary' type='submit' variant='contained' onClick={onOpenRegister}>Регистрация</Button>
            <Button color='primary' variant='text' onClick={onOpenLogin}>Войти</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
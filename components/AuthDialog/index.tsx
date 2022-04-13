import {Button, Dialog, DialogContent, TextField, Typography} from "@material-ui/core";
import React, {useState} from "react";

import styles from './AuthDialog.module.scss'
import BackIcon from '@material-ui/icons/ArrowBackOutlined';
import {Main} from "./forms/Main";
import {Register} from "./forms/Register";
import {Login} from "./forms/Login";


interface AuthDialogProps {
  onClose: () => void
  visible: boolean
}

export const AuthDialog: React.FC<AuthDialogProps> = ({onClose, visible}) => {
  const [formType, setFormType] = useState<'main' | 'login' | 'register'>('main')

  return (
    <Dialog
      open={visible}
      onClose={onClose}
      maxWidth='sm'
      fullWidth
    >
      <DialogContent className={styles.content}>
        <Typography className={styles.title}>
          {formType === 'main' ? 'Вход в TJ' :
            (
              <p className={styles.backTitle} onClick={() => setFormType('main')}>
                <BackIcon />К авторизации
              </p>
            )
          }
        </Typography>
        {formType === 'main' && (<Main onOpenLogin={() => setFormType('login')}/>)}
        {formType === 'login' && (<Login onOpenRegister={() => setFormType('register')} />)}
        {formType === 'register' && (<Register onOpenRegister={() => setFormType('register')} onOpenLogin={() => setFormType('login')}/>)}

      </DialogContent>
    </Dialog>
  )
}
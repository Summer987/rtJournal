import React from "react"

import {Button, Input} from "@material-ui/core"

import styles from './WriteForm.module.scss'
import dynamic from "next/dynamic";

interface WriteFormProps {
  title?: string
}

const Editor = dynamic(() => import('../Editor').then(m => m.Editor), {ssr: false})

export const WriteForm: React.FC<WriteFormProps> = ({ title}) => {

  return (
    <div>
      <Input classes={{root: styles.titleField }} placeholder='Заголовок' defaultValue={title} />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button style={{height: 42, marginTop: '20px'}} variant='contained' color='primary'>
        Опубликовать
      </Button>
    </div>
  )
}

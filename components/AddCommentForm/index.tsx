import React, {useState} from "react";
import {Button, Input} from '@material-ui/core'

import styles from './AddCommentForm.module.scss'
import {Api} from "../../utils/api";
import {useAppSelector} from "../../redux/hooks";
import {selectUserData} from "../../redux/slices/user";
import {TComment} from "../../utils/api/types";

interface AddCommentFormProps {
  postId: number
  onSuccessAdd: (obj: TComment) => void
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({postId,onSuccessAdd}) => {
  const [clicked, setClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState('')

  const onAddComment = async () => {
    try {
      setIsLoading(true)
      const comment = await Api().comment.create({
        postId,
        text
      })

      onSuccessAdd(comment)
      setClicked(false)
      setText('')

    } catch(err) {
      console.warn('Add comment',err)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className={styles.addCommentBlock}>
      <Input disabled={isLoading} onChange={e => setText(e.target.value)} value={text} onFocus={() => setClicked(true)} minRows={clicked ? 5 : 1} classes={{ root: styles.fieldRoot }} placeholder='Написать комментарий...' fullWidth multiline />
      {clicked && (
        <Button disabled={isLoading} onClick={onAddComment} className={styles.addButton} variant='contained' color='primary'>
        Опубликовать
        </Button>
      )}
    </div>
  )
}
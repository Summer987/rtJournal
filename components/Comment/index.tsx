import React from 'react';
import {Typography, IconButton, MenuItem, Menu, Avatar} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';
import {ResponseUser, TComment} from "../../utils/api/types";
import {Api} from "../../utils/api";

interface CommentProps {
  id: number
  user: ResponseUser,
  text: string
  createdAt: string
  currentUserId: number
  onRemoveComment: (id: number) => void
}

export const Comment: React.FC<CommentProps> = ({onRemoveComment,id,currentUserId,user, text, createdAt}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickRemove = async () => {
    if (window.confirm('Удалить комментарий?')){
      try {
        await Api().comment.remove(id)
        onRemoveComment(id)
      } catch(err) {
        console.warn('Error remove comment, err', err)
        alert('Не удвлось удалить комментарий')
      } finally {
        handleClose()
      }
    }
  }

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <Avatar>{user?.fullName[0] || ''}</Avatar>
        <b>{user.fullName}</b>
        <span>{createdAt}</span>
      </div>
      <Typography className={styles.text}>{text}</Typography>
      {user?.id === currentUserId &&
        <>
          <span className={styles.replyBtn}>Ответить</span>
          <IconButton onClick={handleClick}>
            <MoreIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            elevation={2}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={handleClickRemove}>Удалить</MenuItem>
            <MenuItem onClick={handleClose}>Редактировать</MenuItem>
          </Menu>
        </>
      }
    </div>
  );
};

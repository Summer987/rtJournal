import React from 'react';
import {Typography, IconButton, MenuItem, Menu} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';

interface CommentProps {
  user: {
    fullName: string
  },
  text: string
}

export const Comment: React.FC<CommentProps> = ({user, text}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img
          src="https://leonardo.osnova.io/2810b9bb-071f-8a49-2290-2f92ca6797cd/-/scale_crop/108x108/-/format/webp/"
          alt="Avatar"
        />
        <b>Master Quotry</b>
      </div>
      <Typography className={styles.text}>Просто комментарий, который типо большой и очень много чего написано вообще але</Typography>
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
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};

import React from "react";
import {Button, Paper, Typography} from "@material-ui/core";

import styles from './FullPost.module.scss'
import {PostActions} from "../PostActions";
import MessageIcon from '@material-ui/icons/MessageOutlined';
import UserAddIcon from '@material-ui/icons/PersonAddOutlined';
import {OutputData} from "@editorjs/editorjs";

interface FullPostProps {
  title: string
  blocks: OutputData['blocks']
}

export const FullPost: React.FC<FullPostProps> = ({title, blocks}) => {

  return (
    <Paper elevation={0} className={styles.paper}>
      <div className='container'>
        <Typography variant='h4' className={styles.title}>
          {title}
        </Typography>
        <div className={styles.text}>
          {
            blocks.map(obj =>
              <Typography
                key={obj.id}
                dangerouslySetInnerHTML={{ __html: obj.data.text}}
              />)
          }
        </div>
        <div style={{width: 250}}>
          <PostActions />
        </div>
        <div className='d-flex justify-between align-center mt-30 mb-30'>
          <div className={styles.userInfo}>
            <img
              src="https://leonardo.osnova.io/2810b9bb-071f-8a49-2290-2f92ca6797cd/-/scale_crop/108x108/-/format/webp/"
              alt="Avatar"
            />
            <b>Donnie Darko</b>
            <span>+1685</span>
          </div>
          <div>
            <Button variant='contained' className='mr-15'>
              <MessageIcon />
            </Button>
            <Button variant='contained'>
              <UserAddIcon/>
              <b className='ml-10'>Подписаться</b>
            </Button>
          </div>
        </div>
      </div>
    </Paper>
  )
}
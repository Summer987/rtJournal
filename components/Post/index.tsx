import {IconButton, Paper, Typography} from "@material-ui/core";
import Image from "next/image";

import styles from './Post.module.scss';

import {
  ModeCommentOutlined as CommentsIcon,
  Cached as RefreshIcon,
  BookmarkBorderOutlined as FavoriteIcon,
  ShareOutlined as ShareIcon
} from '@material-ui/icons'

export const Post = () => {
  return (
    <Paper elevation={0} className='p-20' classes={{ root: styles.paper}}>
      <Typography variant='h5' className={styles.title}>
        Британские инженеры представили робота с «жестами и мимикой человека» — это восхитило и напугало людей в сети
      </Typography>
      <Typography className='mt-10 mb-15'>
        «Самый передовой человекоподобный робот» Ameca пытается нравиться людям, но некоторых пугает естественность его движений.
      </Typography>
      <Image
        src='https://leonardo.osnova.io/37d5dbb9-2d72-505d-b1f5-d753d6bc54bf/-/preview/1300/-/format/webp/'
        height={400}
        width={600}
      />
      <ul className={styles.actions}>
        <li>
          <IconButton>
            <CommentsIcon />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </li>
      </ul>
    </Paper> 
  )
}
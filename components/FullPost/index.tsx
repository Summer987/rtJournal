import React from "react";
import {Button, Paper, Typography} from "@material-ui/core";

import styles from './FullPost.module.scss'
import {PostActions} from "../PostActions";
import MessageIcon from '@material-ui/icons/MessageOutlined';
import UserAddIcon from '@material-ui/icons/PersonAddOutlined';

export const FullPost: React.FC = () => {

  return (
    <Paper elevation={0} className={styles.paper}>
      <div className='container'>
        <Typography variant='h4' className={styles.title}>
          Журналистка «Фонтанки» нашла в Петербурге фабрику комментариев о событиях на Украине и устроилась туда «спамером»
        </Typography>
        <div>
          <Typography>
            Петербургское издание «Фонтанка» провело расследование: корреспондентка сходила на собеседование по объявлению из телеграм-канала «Кибер фронт Z» и сутки проработала на «фабрике» по написанию комментариев о событиях на Украине.
          </Typography>
          <Typography>
            В телеграм-канале с вакансией указывалось, что команда намерена «дать отпор в информационном поле пропагандистам киевской хунты, финансируемой западным миром». Журналистка успешно прошла собеседование на позицию «спамера» с «чёрной» зарплатой 45 тысяч рублей в месяц и графиком 2/2.
          </Typography>
          <Typography>
            Смена состоит из 100 человек, а сотрудники разделены по направлениям: каждое ответственно за определённую соцсеть — от ютуба и тиктока до телеграма. При найме корреспондентке сказали, что спамеры не работают во «ВКонтакте», поскольку там «информация более-менее нейтральная». В день нужно публиковать 200 комментариев. С личного аккаунта их писать не требуется, поскольку сотрудникам раздают фейковые профили.
          </Typography>
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
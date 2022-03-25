import React, {useState} from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import styles from './SideComments.module.scss';
import data from "../../data";
import {CommentItem} from "./CommentItem";
import clsx from "clsx";


export const SideComments = () => {
  const [visible, setVisible] = useState(true)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && data.comments.new.map((obj) => (
        <CommentItem key={obj.id}{...obj} />
      ))}
    </div>
  );
};

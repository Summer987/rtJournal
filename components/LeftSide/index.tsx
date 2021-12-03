import React from "react";

import styles from './LeftSide.module.scss'
import {Button} from "@material-ui/core";
import {
  WhatshotOutlined as FireIcon,
  MessageOutlined as MessageIcon,
  TrendingUpOutlined as TradingIcon,
  FormatListBulletedOutlined as ListIcon,
} from "@material-ui/icons";

export const LeftSide: React.FC = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <FireIcon />
            Лента
          </Button>
        </li>
        <li>
          <Button>
            <MessageIcon />
            Сообщения
          </Button>
        </li>
        <li>
          <Button>
            <TradingIcon />
            Рейтинг rTG
          </Button>
        </li>
        <li>
          <Button>
            <ListIcon />
            Подписки
          </Button>
        </li>
      </ul>
    </div>
  )
}
import React, {CSSProperties} from "react";
import {IconButton} from "@material-ui/core";
import {
  BookmarkBorderOutlined as FavoriteIcon,
  Cached as RefreshIcon,
  ModeCommentOutlined as CommentsIcon, ShareOutlined as ShareIcon
} from "@material-ui/icons";

const styles: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  top: '5px',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  marginLeft: '-14px',
}

export const PostActions: React.FC = () => {

  return (
    <ul style={styles}>
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
  )
}
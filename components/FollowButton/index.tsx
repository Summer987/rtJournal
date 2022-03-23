import React, {useState} from 'react'

import {Button} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import CheckIcon from '@material-ui/icons/CheckOutlined';

import styles from './FollowButton.module.scss'

export const FollowButton: React.FC = () => {
  const [followed, setFollowed] = useState(false)

  return (
    <>
      <Button onClick={() => setFollowed(!followed)} variant='contained' style={{ minWidth: 30, width: 50}}>
        {followed ? <CheckIcon  style={{ color: '#2ea83a'}}/> : <AddIcon/>}
      </Button>
    </>
  )
}
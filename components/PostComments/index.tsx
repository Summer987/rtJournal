import React, {useEffect, useState} from "react";
import {Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../Comment";
import {AddCommentForm} from "../AddCommentForm";
import {Api} from "../../utils/api";
import {TComment} from "../../utils/api/types";
import {useAppSelector} from "../../redux/hooks";
import {selectUserData} from "../../redux/slices/user";
import {useComments} from "../../hooks/useComments";

interface PostCommentsProps {
  postId: number
}

export const PostComments: React.FC<PostCommentsProps> = ({postId}) => {
  const userData = useAppSelector(selectUserData)
  const [activeTab, setActiveTab] = useState(0)
  const {comments, setComments} = useComments(postId)

  const onAddComment = (obj: TComment) => {
    setComments(prev => [...prev, obj])
  }

  const onRemoveComment = (id: number) => {
    setComments(prev => prev.filter(obj => obj.id !== id))
  }

  return (
    <Paper elevation={0} className='mt-30 p-30'>
      <div className='container'>
        <Typography variant='h6'>42 комментария</Typography>
        <Tabs onChange={(_, newValue) => setActiveTab(newValue)} value={activeTab} className='mt-20' indicatorColor='primary' textColor='primary'>
          <Tab label='Популярные'/>
          <Tab label='По порядку'/>
        </Tabs>
        <Divider className='mb-20'/>

        {userData && <AddCommentForm onSuccessAdd={onAddComment} postId={postId}/>}

        {comments.map(obj =>
          <Comment text={obj.text}
                   createdAt={obj.createdAt}
                   user={obj.user}
                   key={obj.id}
                   id={obj.id}
                   currentUserId={userData?.id}
                   onRemoveComment={onRemoveComment}
          />
        )}
      </div>
    </Paper>
  )
}
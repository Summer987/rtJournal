import React, {useState} from "react";
import {Divider, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {Comment} from "../Comment";
import {AddCommentForm} from "../AddCommentForm";
import data from '../../data'

export const PostComments: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  const comments = data.comments[activeTab ? 'popular' : 'new']

  return (
    <Paper elevation={0} className='mt-30 p-30'>
      <div className='container'>
        <Typography variant='h6'>42 комментария</Typography>
        <Tabs onChange={(_, newValue) => setActiveTab(newValue)} value={activeTab} className='mt-20' indicatorColor='primary' textColor='primary'>
          <Tab label='Популярные'/>
          <Tab label='По порядку'/>
        </Tabs>
        <Divider className='mb-20'/>

        <AddCommentForm />

        {comments.map(obj =>
          <Comment text={obj.text} createdAt={obj.createdAt} user={obj.user} key={obj.id}/>
        )}
      </div>
    </Paper>
  )
}
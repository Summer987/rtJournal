import React from 'react'

import {TComment} from "../utils/api/types";
import {useEffect, useState} from "react";
import {Api} from "../utils/api";

type UseCommentsProps = {
  setComments: React.Dispatch<React.SetStateAction<TComment[]>>
  comments: TComment[]
}

export const useComments = (postId?: number): UseCommentsProps => {
  const [comments, setComments] = useState<TComment[]>([])

  useEffect(() => {
    (async () => {
      try {
        const arr = await Api().comment.getAll(postId)
        setComments(arr)
      } catch(err) {
        console.warn('Fetch comment', err)
      }
    })()
  }, [])

  return {comments, setComments}
}
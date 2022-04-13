import {OutputData} from "@editorjs/editorjs";

export type LoginDto = {
  email: string
  password: string
}

export type CreateUserDto = {
  fullName: string
} & LoginDto

export type ResponseUser = {
  createdAt: string,
  email: string,
  fullName: string,
  id: number,
  commentsCount?: number,
  token: string,
  updateAt: string
}

export type TPost = {
  id: number
  body: OutputData['blocks'],
  description: string,
  user: ResponseUser,
  createdAt: string,
  tags: null | string,
  title: string,
  updatedAt: string,
  views: number
}

export type TComment = {
  id: number
  post: TPost
  text: string
  user: ResponseUser,
  createdAt: string,
  updatedAt: string,
}
import {AxiosInstance} from 'axios'
import {OutputData} from "@editorjs/editorjs";
import {TPost} from "./types";

type CreatePostDto = {
  title: string
  body: OutputData['blocks']
}

type SearchPostDto = {
  title?: string
  body?: string
  views?: 'DESC' | 'ASC'
  tag?: string
  limit?: number
  take?: number
}


export const PostApi = (instance: AxiosInstance) => ({
  async getAll() {
    const {data} = await instance.get<TPost[]>('/posts')
    return data
  },
  async search(dto: SearchPostDto) {
    const {data} = await instance.get<{items: TPost[], total: number}>('/posts/search', {params: dto})
    return data
  },
  async getOnePost(id: number) {
    const {data} = await instance.get<TPost>(`/posts/${id}`)
    return data
  },
  async create(dto: CreatePostDto) {
    const {data} = await instance.post<CreatePostDto, {data: TPost}>('/posts', dto)
    return data
  },
  async update(id:number, dto: CreatePostDto) {
    const {data} = await instance.patch<CreatePostDto, {data: TPost}>(`/posts/${id}`, dto)
    return data
  },
})
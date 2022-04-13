import {AxiosInstance} from "axios";
import {TComment, TPost} from "./types";

type CreateCommentDto = {
  postId: number
  text: string
}

export const CommentApi = (instance: AxiosInstance) => ({
  async getAll(postId: number) {
    const {data} = await instance.get<TComment[]>('/comments', { params: {postId} })
    return data
  },
  async create(dto: CreateCommentDto) {
    const {data} = await instance.post<CreateCommentDto, {data: TComment}>('/comments', dto)
    return data
  },
  async remove(removeId: number) {
    return instance.delete('/comments/'+removeId)
  },

})
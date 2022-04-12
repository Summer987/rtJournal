import {MainLayout} from "../../layouts/MainLayout";
import {FullPost} from "../../components/FullPost";
import {PostComments} from "../../components/PostComments";
import {GetServerSideProps, NextPage} from "next";
import {Api} from "../../utils/api";
import {TPost} from "../../utils/api/types";

interface FullPostPageProps {
  post: TPost
}

const FullPostPage: NextPage<FullPostPageProps> = ({post}) => {

  return (
    <MainLayout className='mb-50' contentFullWidth>
      <FullPost title={post.title} blocks={post.body}/>
      <PostComments />
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const id = ctx.params.id
    const post = await Api(ctx).post.getOnePost(+id)

    return {
      props: {
        post
      }
    }
  } catch(err) {
    console.warn('Full post page',err)
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
}

export default FullPostPage
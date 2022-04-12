import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import {Api} from "../utils/api";
import {NextPage} from "next";
import {TPost} from "../utils/api/types";

interface HomeProps {
  posts: TPost[]
}

const Home: NextPage<HomeProps> = ({posts}) => {

  return (
    <MainLayout>
      {posts.map((obj) =>
        <Post
          key={obj.id}
          id={obj.id}
          description={obj.description}
          title={obj.title}
        />
      )}
    </MainLayout>
  );
}

export const getServerSideProps = async () => {
  try {
    const posts = await Api().post.getAll()

    return {
      props: {
        posts
      }
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      posts: null
    }
  }
}

export default Home
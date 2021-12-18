import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import HomeComp from "../components/home/HomeComp";
import BlogPost from "../components/blogpost/BlogPost";
import ghostapi from "../connectGhost";
// import { useAuth } from "../contexts/AuthContext";

type Post = {
  title: string;
  slug: string;
  published_at: string;
};

async function getPosts() {}

export const getStaticProps = async ({ params }) => {
  const posts = await ghostapi.posts
    .browse({
      limit: "all",
      fields: ["title", "slug", "custom_excerpt", "published_at"],
    })
    .catch((err) => {
      console.error(err);
    });
  // console.log(posts.map((post) => post.title));
  // console.log("intial", posts);

  // const posts = {};

  return {
    props: { posts },
  };
};

const Home: React.FC<{ posts: Post }> = (props) => {
  return (
    <div className={styles.container}>
      <HomeComp allPosts={props.posts} />
      {/* <BlogPost /> */}
    </div>
  );
};

export default Home;

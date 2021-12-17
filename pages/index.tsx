import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import GhostContentAPI from "@tryghost/content-api";
import HomeComp from "../components/home/HomeComp";
import BlogPost from "../components/blogpost/BlogPost";

const { BLOG_URL, CONTENT_API_KEY } = process.env;

const api = new GhostContentAPI({
  url: BLOG_URL,
  key: CONTENT_API_KEY,
  version: "v3",
});

type Post = {
  title: string;
  slug: string;
  published_at: string;
};

async function getPosts() {}

export const getStaticProps = async ({ params }) => {
  const posts = await api.posts
    .browse({
      limit: "all",
      fields: ["title", "slug", "custom_excerpt", "published_at"],
    })
    .catch((err) => {
      console.error(err);
    });
  // console.log(posts.map((post) => post.title));
  console.log("intial", posts);

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

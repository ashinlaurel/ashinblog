import HomeComp from "../components/home/HomeComp";
import BlogPost from "../components/blogpost/BlogPost";
import ghostapi from "../connectGhost";

import BlogList from "../components/bloglist/BlogList";
import BlogList2 from "../components/bloglist/BlogList2";
// import { useAuth } from "../contexts/AuthContext";

type Post = {
  title: string;
  slug: string;
  published_at: string;
  feature_image: string;
  reading_time: string;
};

async function getPosts() {}

export const getStaticProps = async ({ params }) => {
  const posts = await ghostapi.posts
    .browse({
      limit: "all",
      fields: [
        "title",
        "slug",
        "custom_excerpt",
        "published_at",
        "feature_image",
        "reading_time",
      ],
    })
    .catch((err) => {
      console.error(err);
    });
  // console.log(posts.map((post) => post.title));
  // console.log("intial", posts);

  // const posts = {};

  return {
    props: { posts },
    revalidate: 60,
  };
};

function Blog(props) {
  // console.log("props", props);
  return (
    <div className="container mx-6">
      {/* <BlogList allPosts={props.posts} />; */}
      <BlogList2 allPosts={props.posts} />;
    </div>
  );
}

export default Blog;

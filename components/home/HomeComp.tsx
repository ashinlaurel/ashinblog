import BlogPost from "../blogpost/BlogPost";
import RightBar from "../RightBar";
import Hero from "./Hero";
import PostsList from "./PostsList";

const HomeComp = ({ allPosts }) => {
  // console.log("These", props);
  return (
    <div>
      <Hero />
      <div className="container mx-auto max-w-5xl ">
        <PostsList allPosts={allPosts} />
      </div>

      {/* <BlogPost /> */}
    </div>
  );
};

export default HomeComp;

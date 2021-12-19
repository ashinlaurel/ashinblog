import BlogPost from "../blogpost/BlogPost";
import RightBar from "../RightBar";
import FeaturedPosts from "./FeaturedPosts";
import Hero from "./Hero";
// import PostsList from "./FeaturedPosts";

const HomeComp = ({ allPosts }) => {
  // console.log("These", props);
  return (
    <div>
      <Hero />
      <div className="container mx-auto max-w-5xl ">
        <FeaturedPosts allPosts={allPosts} />
      </div>

      {/* <BlogPost /> */}
    </div>
  );
};

export default HomeComp;

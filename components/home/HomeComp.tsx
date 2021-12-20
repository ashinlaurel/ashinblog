import BlogList2 from "../bloglist/BlogList2";
import BlogPost from "../blogpost/BlogPost";
import RightBar from "../RightBar";
import FeaturedPosts from "./FeaturedPosts";
import Hero from "./Hero";
// import PostsList from "./FeaturedPosts";

const HomeComp = ({ allPosts }) => {
  // console.log("These", props);
  return (
    <div className="container mx-auto max-w-8xl">
      <Hero />
      <div className=" ">
        <FeaturedPosts allPosts={allPosts} />
      </div>

      {/* <BlogPost /> */}
    </div>
  );
};

export default HomeComp;

import BlogPost from "../blogpost/BlogPost";
import RightBar from "../RightBar";
import PostsList from "./PostsList";

const HomeComp = ({ allPosts }) => {
  // console.log("These", props);
  return (
    <div>
      <PostsList allPosts={allPosts} />
      {/* <BlogPost /> */}
    </div>
  );
};

export default HomeComp;

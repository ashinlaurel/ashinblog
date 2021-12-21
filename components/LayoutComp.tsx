import BlogPost from "./blogpost/BlogPost";
import NavBar from "./NavBar";
// import PostsList from "./home/FeaturedPosts";
import RightBar from "./RightBar";
import TopBar from "./TopBar";

const LayoutComp = ({ children }) => {
  return (
    <div className=" dark:bg-gray-900 bg-gray-100  ">
      {/* <TopBar /> */}
      <NavBar />
      <div className=" mt-10 container mx-auto  ">
        <div className=" flex justify-between ">
          <RightBar />
          {children}
          {/* <PostsList /> */}
          {/* rightbar */}
        </div>
      </div>
    </div>
  );
};

export default LayoutComp;

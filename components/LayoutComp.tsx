import BlogPost from "./blogpost/BlogPost";
import PostsList from "./home/PostsList";
import RightBar from "./RightBar";
import TopBar from "./TopBar";

const LayoutComp = ({ children }) => {
  return (
    <div>
      <TopBar />
      <div className=" mt-12 overflow-x-hidden dark:bg-gray-900 bg-gray-100">
        <div className="px-6 py-8">
          <div className="container flex justify-between mx-auto">
            {children}
            {/* <PostsList /> */}
            {/* rightbar */}
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutComp;
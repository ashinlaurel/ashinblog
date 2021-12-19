import Link from "next/link";

const PostCard = (props) => {
  let { thepost } = props;
  return (
    <div className="mt-6 ">
      <div className="w-full px-5 md:px-10 py-6 mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <span className="font-light text-gray-600 dark:text-white">
            mar 4, 2019
          </span>

          <a className="px-2 py-1 font-bold text-gray-100  bg-gray-600 rounded hover:bg-gray-500">
            Design
          </a>
        </div>
        <div className="mt-2">
          <Link href="/viewpost/[slug]" as={`/viewpost/${thepost.slug}`}>
            <a
              href="#"
              className="text-2xl font-bold text-gray-700 dark:text-white hover:underline"
            >
              {thepost.title}
            </a>
          </Link>
          <p className="mt-2 text-gray-600 dark:text-white">
            {thepost.custom_excerpt}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Read more
          </a>
          {/* <div>
            <a href="#" className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
                alt="avatar"
                className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              />
              <h1 className="font-bold text-gray-700 hover:underline">
                Jane Doe
              </h1>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const PostsList = ({ allPosts }) => {
  // console.log("there there", allPosts);
  return (
    <div className=" mt-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Posts</h1>
        <div>
          <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>Latest</option>
            <option>Last Week</option>
          </select>
        </div>
      </div>

      {allPosts.map((post) => {
        return <PostCard key={post.uuid} thepost={post} />;
      })}

      <div className="mt-8">
        <div className="flex">
          <a
            href="#"
            className="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md cursor-not-allowed"
          >
            previous
          </a>
          <a
            href="#"
            className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
          >
            1
          </a>
          <a
            href="#"
            className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
          >
            2
          </a>
          <a
            href="#"
            className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
          >
            3
          </a>
          <a
            href="#"
            className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostsList;

import Link from "next/link";

const PostCard = (props) => {
  let { thepost } = props;
  return (
    <div className="mt-6">
      <div className="w-full px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <span className="font-light text-gray-600">mar 4, 2019</span>

          <a className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">
            Design
          </a>
        </div>
        <div className="mt-2">
          <Link href="/viewpost/[slug]" as={`/viewpost/${thepost.slug}`}>
            <a
              href="#"
              className="text-2xl font-bold text-gray-700 hover:underline"
            >
              {thepost.title}
            </a>
          </Link>
          <p className="mt-2 text-gray-600">{thepost.custom_excerpt}</p>
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
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
        <div>
          <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>Latest</option>
            <option>Last Week</option>
          </select>
        </div>
      </div>

      {allPosts.map((post) => {
        return <PostCard thepost={post} />;
      })}

      {/* <div className="mt-6">
        <div className="w-full px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <span className="font-light text-gray-600">Feb 14, 2019</span>
            <a
              href="#"
              className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
            >
              PHP
            </a>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-2xl font-bold text-gray-700 hover:underline"
            >
              PHP: Array to Map
            </a>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto
              eos enim reprehenderit nisi, accusamus delectus nihil quis facere
              in modi ratione libero!
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
            <div>
              <a href="#" className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80"
                  alt="avatar"
                  className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                />
                <h1 className="font-bold text-gray-700 hover:underline">
                  Lisa Way
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <span className="font-light text-gray-600">Dec 23, 2018</span>
            <a
              href="#"
              className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
            >
              Django
            </a>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-2xl font-bold text-gray-700 hover:underline"
            >
              Django Dashboard - Learn by Coding
            </a>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto
              eos enim reprehenderit nisi, accusamus delectus nihil quis facere
              in modi ratione libero!
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
            <div>
              <a href="#" className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80"
                  alt="avatar"
                  className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                />
                <h1 className="font-bold text-gray-700 hover:underline">
                  Steve Matt
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <span className="font-light text-gray-600">Mar 10, 2018</span>
            <a
              href="#"
              className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
            >
              Testing
            </a>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-2xl font-bold text-gray-700 hover:underline"
            >
              TDD Frist
            </a>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto
              eos enim reprehenderit nisi, accusamus delectus nihil quis facere
              in modi ratione libero!
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
            <div>
              <a href="#" className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                  alt="avatar"
                  className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                />
                <h1 className="font-bold text-gray-700 hover:underline">
                  Khatab Wedaa
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div> */}
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
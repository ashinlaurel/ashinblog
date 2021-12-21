import { Pencil } from "akar-icons";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ thepost }) => {
  return (
    <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer my-4 ">
      <Link href="/viewpost/[slug]" as={`/viewpost/${thepost.slug}`}>
        <a href="#" className="w-full block h-full">
          <img
            alt="blog photo"
            src={thepost.feature_image}
            className="max-h-40 w-full object-cover"
          />
          <div className="bg-white dark:bg-gray-900 w-full p-4">
            <p className="text-indigo-500 text-md font-medium">Development</p>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {thepost.title}
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
              {thepost.custom_excerpt}
            </p>
            <div className="flex items-center mt-4">
              <a href="#" className="block relative">
                {/* <img
                  alt="profil"
                  src="/images/person/6.jpg"
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                /> */}
                <div className="dark:hidden">
                  <Pencil color="black" />
                </div>
                <div className="hidden dark:block">
                  <Pencil color="white" />
                </div>
              </a>
              <div className="flex flex-col justify-between ml-4 text-sm">
                <p className="text-gray-800 dark:text-white">Ashin Laurel</p>
                <p className="text-gray-400 dark:text-gray-300">
                  {moment(thepost.published_at).format("Do MMM YY")} -{" "}
                  {thepost.reading_time} min read
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

const BlogList2 = ({ allPosts }) => {
  // console.log("there there", allPosts)
  return (
    <div className="w-full bg-white dark:bg-gray-800 p-12 mt-8 rounded-lg shadow-sm">
      <div className="header flex flex-col md:flex-row  items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Latest articles
          </p>
          <p className="text-2xl font-light text-gray-400">
            All articles made with love! 💙
          </p>
        </div>
        <div className="text-end">
          <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <div className=" relative ">
              <input
                type="text"
                id='"form-subscribe-Search'
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white dark:bg-gray-900 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Enter a title"
              />
            </div>
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-stretch justify-between">
        {allPosts.map((post) => {
          return <PostCard key={post.uuid} thepost={post} />;
        })}
      </div>
    </div>
  );
};

export default BlogList2;

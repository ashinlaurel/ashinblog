import { Pencil } from "akar-icons";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ thepost }) => {
  return (
    <div className=" bg-white dark:bg-gray-900 overflow-hidden shadow-lg rounded-lg my-4 w-full xl:w-80 mx-2 cursor-pointer ">
      <Link href="/viewpost/[slug]" as={`/viewpost/${thepost.slug}`}>
        <a href="#" className="w-full block h-full">
          <img
            alt="blog photo"
            src={thepost.feature_image}
            className="max-h-40 w-full object-cover"
          />
          <div className=" w-full p-4">
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
              <div className="flex flex-col justify-between ml-4 text-sm  ">
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

const FeaturedPosts = ({ allPosts }) => {
  // console.log("there there", allPosts)
  return (
    <div className="w-full bg-white dark:bg-gray-800 px-2 py-4 xl:p-8 mt-8  rounded-lg shadow-sm">
      <div className="header flex items-end justify-between mb-4 xl:mb-6 px-4 xl:px-0">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
            Featured Articles
          </p>
          <p className="text-2xl font-light text-gray-400">Give these a try!</p>
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

export default FeaturedPosts;

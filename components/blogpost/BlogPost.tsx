import Link from "next/link";

const BlogPost = (props) => {
  let thepost = { title: "Loading", created_at: "...." };
  if (props.thepost) {
    thepost = props.thepost;
  }
  // console.log(thepost);

  return (
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
      <div
        className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
        style={{ fontFamily: "Georgia,serif" }}
      >
        {/* Title */}
        <div className="font-sans">
          <p className="text-base md:text-sm text-green-500 font-bold">
            &lt;{" "}
            <Link href="/#" as={"/#"}>
              <a className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">
                BACK TO BLOG
              </a>
            </Link>
          </p>
          <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
            {thepost.title}
          </h1>
          <p className="text-sm md:text-base font-normal text-gray-600">
            Published {thepost.created_at}
          </p>
        </div>
        {/*Post Content*/}
        <div dangerouslySetInnerHTML={{ __html: thepost.html }}></div>
      </div>
      {/*/Next & Prev Links*/}
    </div>
  );
};

export default BlogPost;

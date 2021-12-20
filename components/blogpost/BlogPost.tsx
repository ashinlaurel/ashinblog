import Link from "next/link";
import moment from "moment";
import { useState } from "react";

const BlogPost = (props) => {
  let thepost: any = { title: "Loading", created_at: "...." };
  if (props.thepost) {
    thepost = props.thepost;
  }

  const [enableLoadComments, setEnableLoadComments] = useState<boolean>(true);

  function loadComments() {
    setEnableLoadComments(false);
    (window as any).disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = thepost.slug;
    };

    const script = document.createElement("script");
    script.src = "https://ashinchats.disqus.com/embed.js";
    script.setAttribute("data-timestamp", Date.now().toString());

    document.body.appendChild(script);
  }

  // console.log(thepost);

  return (
    <div className="container w-full  mx-auto">
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 dark:text-gray-100 leading-normal">
        {/* Title */}
        <div className="font-sans">
          <p className="text-base md:text-sm text-green-500 font-bold pt-9">
            &lt;{" "}
            <Link href="/#" as={"/#"}>
              <a className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">
                BACK TO BLOG
              </a>
            </Link>
          </p>

          {/* Top Head */}
          <div
            className="container mx-auto max-w-5xl flex flex-col  
          "
          >
            <h1 className="font-bold font-sans break-normal text-gray-900 dark:text-gray-100 pt-6 pb-2 text-4xl md:text-5xl">
              {thepost.title}
            </h1>
            <p className="max-w-4xl pt-2 pb-4 text-lg font-normal text-gray-600 dark:text-gray-100">
              {thepost.custom_excerpt}
            </p>
            <hr className="" />
            <div className="pt-2">
              <p className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-100">
                Published on {moment(thepost.created_at).format("Do MMM YY")}
              </p>
              <p className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-100">
                {thepost.reading_time} MIN READ
              </p>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="max-w-4xl container mx-auto mt-7">
          <img src={thepost.feature_image}></img>
        </div>

        {/*Post Content*/}

        <article className=" prose dark:prose-invert md:prose-xl max-w-none prose-ghost  sm:prose-ghost-lg dark:prose-ghost-dark ">
          <div
            className="max-w-3xl container mx-auto"
            dangerouslySetInnerHTML={{ __html: thepost.html }}
          ></div>
        </article>
      </div>

      {/* {enableLoadComments && <p onClick={loadComments}>Load Comments</p>} */}

      {/* <div id="disqus_thread"></div> */}
      {/*/Next & Prev Links*/}
    </div>
  );
};

export default BlogPost;

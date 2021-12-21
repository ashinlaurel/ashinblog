import {
  ArrowRight,
  Briefcase,
  Money,
  Pencil,
  Person,
  Plant,
  ReactFill,
} from "akar-icons";
import Link from "next/link";
import { useState } from "react";

const RightBar = () => {
  const [toHide, setToHide] = useState(false);

  return (
    <div
      className={`hidden w-3/12 mt-8 transition-all ${
        toHide == true ? "hidden" : "lg:block"
      }`}
    >
      <div className="px-8">
        <div className="flex items-center justify-center">
          <div
            onClick={() => {
              setToHide(true);
            }}
          >
            {" "}
            {/* Hide */}
          </div>
        </div>

        <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-md">
          <ul className="-mx-4">
            <li className="flex items-center">
              {/* <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
                className="object-cover w-10 h-10 mx-4 rounded-full"
              /> */}
              <ReactFill strokeWidth={1} size={28} className="mx-4" />
              <p>
                <Link href="/">
                  <a className="mx-1 font-bold text-gray-700 dark:text-white hover:underline">
                    Home
                  </a>
                </Link>
              </p>
            </li>
            <li className="flex items-center mt-6">
              <Briefcase strokeWidth={1} size={28} className="mx-4" />
              <p>
                <Link href="/blog" as={`/blog`}>
                  <a className="mx-1 font-bold text-gray-700 dark:text-white hover:underline">
                    Blog
                  </a>
                </Link>
              </p>
            </li>

            <li className="flex items-center mt-6">
              <Person strokeWidth={1} size={28} className="mx-4" />
              <p>
                <a
                  href="#"
                  className="mx-1 font-bold text-gray-700 dark:text-white hover:underline"
                >
                  About Me
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-8 my-4">
        <div className="flex items-center justify-between">
          <h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-white -mx-2">
            Topics
          </h1>
          <div
            onClick={() => {
              setToHide(true);
            }}
          >
            {" "}
            {/* Hide */}
          </div>
        </div>

        <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-md">
          <ul className="-mx-4">
            <li className="flex items-center">
              {/* <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
                className="object-cover w-10 h-10 mx-4 rounded-full"
              /> */}
              <ReactFill strokeWidth={1} size={28} className="mx-4" />
              <p>
                <a
                  href="#"
                  className="mx-1 font-bold text-gray-700 dark:text-white hover:underline"
                >
                  Development
                </a>
                <span className="text-sm font-light text-gray-700 dark:text-white">
                  -23 Posts
                </span>
              </p>
            </li>
            <li className="flex items-center mt-6">
              <Briefcase strokeWidth={1} size={28} className="mx-4" />
              <p>
                <a
                  href="#"
                  className="mx-1 font-bold text-gray-700 dark:text-white hover:underline"
                >
                  My Projects
                </a>
                <span className="text-sm font-light dark:text-white text-gray-700">
                  -245 Posts
                </span>
              </p>
            </li>
            <li className="flex items-center mt-6">
              <Money strokeWidth={1} size={28} className="mx-4" />
              <p>
                <a
                  href="#"
                  className="mx-1 dark:text-white font-bold text-gray-700 hover:underline"
                >
                  Economics
                </a>
                <span className="text-sm dark:text-white font-light text-gray-700">
                  -52 Posts
                </span>
              </p>
            </li>
            <li className="flex items-center mt-6">
              <Plant strokeWidth={1} size={28} className="mx-4" />
              <p>
                <a
                  href="#"
                  className="mx-1 font-bold dark:text-white text-gray-700 hover:underline"
                >
                  Life
                </a>
                <span className="text-sm dark:text-white font-light text-gray-700">
                  -73 Posts
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="px-8 mt-10">
        <h1 className="mb-4 text-xl font-bold text-gray-700">Categories</h1>
        <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
          <ul>
            <li>
              <a
                href="#"
                className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
              >
                - AWS
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
              >
                - Laravel
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
              >
                - Vue
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
              >
                - Design
              </a>
            </li>
            <li className="flex items-center mt-2">
              <a
                href="#"
                className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
              >
                - Django
              </a>
            </li>
            <li className="flex items-center mt-2">
              <a
                href="#"
                className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
              >
                - PHP
              </a>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="px-8 mt-10  ">
        <h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">
          Recent Post
        </h1>
        <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
          {/* <div className="flex items-center justify-center">
            <a
              href="#"
              className="px-2 py-1 text-sm text-green-100 dark:text-white bg-gray-600 rounded hover:bg-gray-500"
            >
              Laravel
            </a>
          </div> */}
          <div className="">
            <a
              href="#"
              className="text-lg font-medium text-gray-700 dark:text-white hover:underline"
            >
              Build Your New Idea with Laravel Freamwork.
            </a>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center ">
              {/* <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
                className="object-cover w-8 h-8 rounded-full"
              /> */}
              <Pencil color="black" strokeWidth={2} size={24} />
              <a
                href="#"
                className="mx-3 text-sm text-gray-700 hover:underline dark:text-white"
              >
                Ashin Laurel
              </a>
            </div>
            <span className="text-sm font-light text-gray-600 dark:text-white">
              Jun 1, 2020
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;

import { useState } from "react";

const RightBar = () => {
  const [toHide, setToHide] = useState(false);

  return (
    <div
      className={`hidden w-4/12 -mx-8 transition-all ${
        toHide == true ? "hidden" : "lg:block"
      }`}
    >
      <div className="px-8">
        <div className="flex items-center justify-between">
          <h1 className="mb-4 text-xl font-bold text-gray-700">
            Pick Your Poison😅
          </h1>
          <div
            onClick={() => {
              setToHide(true);
            }}
          >
            {" "}
            Hide
          </div>
        </div>

        <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
          <ul className="-mx-4">
            <li className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
                className="object-cover w-10 h-10 mx-4 rounded-full"
              />
              <p>
                <a
                  href="#"
                  className="mx-1 font-bold text-gray-700 hover:underline"
                >
                  Development
                </a>
                <span className="text-sm font-light text-gray-700">
                  -23 Posts
                </span>
              </p>
            </li>
            <li className="flex items-center mt-6">
              <img
                src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
                alt="avatar"
                className="object-cover w-10 h-10 mx-4 rounded-full"
              />
              <p>
                <a
                  href="#"
                  className="mx-1 font-bold text-gray-700 hover:underline"
                >
                  Economics
                </a>
                <span className="text-sm font-light text-gray-700">
                  -52 Posts
                </span>
              </p>
            </li>
            <li className="flex items-center mt-6">
              <img
                src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80"
                alt="avatar"
                className="object-cover w-10 h-10 mx-4 rounded-full"
              />
              <p>
                <a
                  href="#"
                  className="mx-1 font-bold text-gray-700 hover:underline"
                >
                  Life
                </a>
                <span className="text-sm font-light text-gray-700">
                  -73 Posts
                </span>
              </p>
            </li>
            <li className="flex items-center mt-6">
              <img
                src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80"
                alt="avatar"
                className="object-cover w-10 h-10 mx-4 rounded-full"
              />
              <p>
                <a
                  href="#"
                  className="mx-1 font-bold text-gray-700 hover:underline"
                >
                  My Projects
                </a>
                <span className="text-sm font-light text-gray-700">
                  -245 Posts
                </span>
              </p>
            </li>
            <li className="flex items-center mt-6">
              <img
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                alt="avatar"
                className="object-cover w-10 h-10 mx-4 rounded-full"
              />
              <p>
                <a
                  href="#"
                  className="mx-1 font-bold text-gray-700 hover:underline"
                >
                  About Me
                </a>
                {/* <span className="text-sm font-light text-gray-700">
                  Created 332 Posts
                </span> */}
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
      <div className="px-8 mt-10">
        <h1 className="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
        <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center">
            <a
              href="#"
              className="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500"
            >
              Laravel
            </a>
          </div>
          <div className="mt-4">
            <a
              href="#"
              className="text-lg font-medium text-gray-700 hover:underline"
            >
              Build Your New Idea with Laravel Freamwork.
            </a>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
                className="object-cover w-8 h-8 rounded-full"
              />
              <a
                href="#"
                className="mx-3 text-sm text-gray-700 hover:underline"
              >
                Alex John
              </a>
            </div>
            <span className="text-sm font-light text-gray-600">
              Jun 1, 2020
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;

const Footer = () => {
  return (
    <div className=" bg-white mx-6 xl:mx-0 w-full dark:bg-gray-800 rounded-lg shadow-sm my-10">
      <div className="px-10 xl:px-0 xl:max-w-7xl mx-auto text-black dark:text-white py-10">
        <div className="mb-3">
          <h3 className="text-3xl mb-2 font-semibold">
            Thank you for spending your time!{" "}
          </h3>
          <p className="text-xl">
            {" "}
            If you found these articles interesting and helpful, check out my
            other articles too!! Also sharing this page with your friends helps
            a lot 🥳!{" "}
          </p>
        </div>
        <div className=" flex flex-col md:flex-row md:justify-between items-center text-sm text-black  dark:text-white">
          <p className="order-2 md:order-1"> &copy; Ashin Laurel, 2021. </p>
          <div className="order-1 md:order-2">
            <span className="px-2">About me</span>
            <span className="px-2 border-l">Contact me</span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

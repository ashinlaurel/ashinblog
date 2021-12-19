import Link from "next/link";

const Hero = () => {
  // console.log("there there", allPosts);
  return (
    <div className="">
      <div
        className="container mx-auto max-w-5xl flex flex-col  
          "
      >
        <h1 className="font-bold font-sans break-normal text-gray-900 dark:text-gray-100 pt-6 pb-2 text-4xl md:text-5xl">
          Welcome To My Blog !
        </h1>
        <p className="max-w-4xl pt-2 pb-4 text-lg font-normal text-gray-600 dark:text-gray-100">
          Welcome, it&aposs great to have you here. In this era where highly
          stimulating forms of entertainment are taking over people&aposs time,
          I&aposm extremely happy that you took the time to come here. Who told
          blogs are dying eh??😅
        </p>
        <hr />

        {/* <hr className="" /> */}
        <div className="pt-2">
          <p className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-100">
            {/* Published on {moment(thepost.created_at).format("Do MMM YY")} */}
          </p>
          <p className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-100">
            {/* {thepost.reading_time} MIN READ */}
          </p>
        </div>
      </div>

      <div
        className="container mx-auto max-w-5xl flex flex-col  
          "
      >
        <h1 className="font-bold font-sans break-normal text-gray-900 dark:text-gray-100 pt-6 pb-2 text-2xl md:text-3xl">
          Hi Im Ashin Laurel
        </h1>
        <p className="max-w-4xl pt-2  text-lg font-normal text-gray-600 dark:text-gray-100">
          I am a student currently pursing two degrees, Bachelor of Computer
          Science and Masters in Economics. In my free time I develop websites,
          watch movies and listen to too much music (Yup Spotify is better than
          Apple Music).
        </p>

        <p className="max-w-4xl  pb-4 text-lg font-normal text-gray-600 dark:text-gray-100">
          So what am I doing here you ask; Let me explain: I have this quirk,
          whenever I discover something new, I have this unbearable tendency to
          call my friends and introduce it to them. And through this process I
          have realized there is some fun in sharing things that you learn and
          discover. It gives this whole process a humane feeling. This is when I
          thought why not start writing about the things that I observe and
          discover everyday.And guess what after much procrastionation in
          setting this blog up, we are finally here!😅
        </p>

        <div className="pt-2">
          <p className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-100">
            {/* Published on {moment(thepost.created_at).format("Do MMM YY")} */}
          </p>
          <p className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-100">
            {/* {thepost.reading_time} MIN READ */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

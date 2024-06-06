import React from "react";

const testing = () => {
  return (
    <main className="text-lg font-light flex flex-col h-screen">
      <nav className="flex justify-between py-3 px-8 bg-[#ddd]">
        <h4 className="">
          <strong>LessonMate at Demo School</strong>
        </h4>
        <button className="font-extralight text-gray-400">Sign in</button>
      </nav>
      <section className="flex flex-col px-8 grow bg-gray-200">
        <div className="mt-4 bg-teal-400 text-white">
          <p className="p-4">
            Sign up for your{" "}
            <a className="underline" href="">
              free 14-day trial
            </a>{" "}
            or{" "}
            <a className="underline" href="">
              take a tour
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col mt-5 p-5 pb-10 border-2 bg-gray-50">
          {/* Title with <?> and ShowSteps: toggler  */}
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <h3 className="text-xl">New lesson for The Student</h3>
              <span className="inline-flex items-center justify-center h-4 w-4 bg-gray-300 rounded-full text-[14px] text-white font-bold">
                ?
              </span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-400">Show Steps:</p>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  checked
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-400 peer-focus:outline-none   dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white   after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-purple-900"></div>
              </label>
            </div>
          </div>
          {/*  Step 1. Section */}
          <p className="mt-8 p-3 border-2 border-[#ddd] bg-[#f3f3f3] rounded-[0.25em]">
            Step 1. Give your lesson a descriptive title your students can
            easily reference
          </p>
          {/* Title Section */}
          <input
            className="mt-6 py-2 px-2 border-2 border-[#ddd] rounded-[0.25em]"
            type="text"
            placeholder="Title (required)"
          />
          {/* Step 2. Section */}
          <p className="mt-8 p-3 border-2 border-[#ddd] bg-[#f3f3f3] rounded-[0.25em]">
            Step 2. Write notes - method books, page numbers, reminders +
            YouTube
          </p>
          {/* Text Area Section */}
          <div className="mt-8">
            <div className="flex items-center gap-1 mb-2 text-lg font-mono">
              <button className="relative flex items-center justify-center w-8 h-8 p-1 rounded cursor-pointer dark:hover:text-white dark:hover:bg-gray-600">
                <strong>H</strong>
                <i className="absolute bottom-[-3px] right-[7px] text-[5px]">
                  1
                </i>
              </button>
              <button className="relative flex items-center justify-center w-8 h-8 p-1 rounded cursor-pointer dark:hover:text-white dark:hover:bg-gray-600">
                <strong>H</strong>
                <i className="absolute bottom-[-3px] right-[7px] text-[5px]">
                  3
                </i>
              </button>
              <button className="relative flex items-center justify-center w-8 h-8 p-1 rounded cursor-pointer dark:hover:text-white dark:hover:bg-gray-600">
                <strong>B</strong>
              </button>
              <button className="relative flex items-center justify-center w-8 h-8 p-1 rounded cursor-pointer dark:hover:text-white dark:hover:bg-gray-600">
                <strong>
                  <i className="align-baseline">I</i>
                </strong>
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-8 h-8 p-1 rounded cursor-pointer dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 6L21 6.00066M10 12L21 12.0007M10 18L21 18.0007M3 5L5 4V10M5 10H3M5 10H7M7 20H3L6.41274 17.0139C6.78593 16.6873 7 16.2156 7 15.7197C7 14.7699 6.23008 14 5.28033 14H5C4.06808 14 3.28503 14.6374 3.06301 15.5"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-8 h-8 p-1 rounded cursor-pointer dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-8 h-8 p-1 rounded cursor-pointer dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  viewBox="0 -3 20 20"
                  version="1.1"
                >
                  <title>youtube [#168]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-300.000000, -7442.000000)"
                      fill="#000000"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                          id="youtube-[#168]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
            {/* <!-- Text Area --> */}
            <div className="border-2 border-[#ddd] rounded-[0.25em]">
              <textarea
                className="w-full min-h-40 max-h-[40vh] p-2"
                placeholder=""
              ></textarea>
            </div>
            {/* Step 3. Section */}
            <p className="mt-4 p-3 border-2 border-[#ddd] bg-[#eee] rounded-[0.25em]">
              Step 3. Select whether this is a makeup lesson or not
            </p>
            {/* <!-- Makeup Lesson Toggle --> */}
            <div className="flex items-center gap-4 mt-4">
              <span className="font-semibold">Makeup lesson?</span>
              <div className="flex items-center gap-2">
                <label htmlFor="default-radio-1" className=" ">
                  <strong>Yes</strong>
                </label>
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="flex items-center justify-center w-6 h-6 border-2 text-purple-900 bg-gray-300 border-gray-300 after:bg-purple-900 after:content-['']"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="default-radio-2" className="">
                  <strong>No</strong>
                </label>
                <input
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="flex w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 "
                />
              </div>
              <span className="inline-flex items-center justify-center h-4 w-4 bg-gray-300 rounded-full text-[14px] text-white font-bold">
                ?
              </span>
            </div>
          </div>
          {/* Step 4. Section */}
          <p className="mt-4 p-3 border-2 border-[#ddd] bg-[#f3f3f3] rounded-[0.25em]">
            Step 4. Record video(s) and upload files. Everything is saved in
            your Library 😉
          </p>
          {/* Button Group Section */}
          <div className="flex items-center mt-4 gap-4 text-white">
            <button className="flex gap-2 py-[5px] px-8  bg-[#a7babe] shadow-2xl rounded">
              <span className="font-bold text-gray-200">+</span>
              <span>Add New</span>
            </button>
            <button className="flex gap-2 py-[5px] px-8 bg-[#a7babe] shadow-2xl rounded">
              <span className="font-bold text-gray-200">+</span>
              <span>Add Fave</span>
            </button>
            <button className="flex gap-2 py-[5px] px-8 bg-[#e74c3c] shadow-2xl rounded">
              <span className="font-bold text-gray-200">+</span>
              <span>Record Video</span>
            </button>
            <span className="inline-flex items-center justify-center h-4 w-4 bg-gray-300 rounded-full text-[14px] text-white font-bold">
              ?
            </span>
          </div>
          {/* Step 5. Section */}
          <p className="mt-24 p-3 border-2 border-[#ddd] bg-[#f3f3f3] rounded-[0.25em]">
            Step 5. When you're done, hit Post 🚀
          </p>
          {/* Post Lesson Button */}
          <div className="flex items-center pt-[36px] gap-4">
            <button className=" px-[48px] py-2 rounded bg-purple-900 text-white text-2xl">
              Post Lesson
            </button>
            <span className="inline-flex items-center justify-center h-4 w-4 bg-gray-300 rounded-full text-[14px] text-white font-bold">
              ?
            </span>
          </div>
        </div>
      </section>
      {/* Footer section */}
      <footer className="flex justify-between py-3 px-8 bg-[#ddd] text-gray-400">
        <p>© LessonMate 2024 [c41996b]</p>
        <div className="flex gap-4">
          <a href="">Terms</a>
          <a href="">Privacy</a>
        </div>
      </footer>
    </main>
  );
};

export default testing;

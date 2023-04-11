import React, { useState } from "react";

const FloatingBtn = () => {
  return (
    <div className="fixed right-6 bottom-6 group">
      <div
        id="speed-dial-menu-default"
        className="flext flex-col items-center hidden mb-4 space-y-2"
      >
        <button
          type="button"
          data-tooltip-target="tooltip-share"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 -ml-px "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
          </svg>
          <span className="sr-only">Share</span>
        </button>
        <div
          id="tooltip-share"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Share
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          data-tooltip-target="tooltip-print"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Print</span>
        </button>
        <div
          id="tooltip-print"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Print
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          data-tooltip-target="tooltip-download"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Download</span>
        </button>
        <div
          id="tooltip-download"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Download
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          data-tooltip-target="tooltip-copy"
          data-tooltip-placement="left"
          className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path>
            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path>
          </svg>
          <span className="sr-only">Copy</span>
        </button>
        <div
          id="tooltip-copy"
          role="tooltip"
          className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Copy
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
      <button
        type="button"
        dataDialToggle="speed-dial-menu-default"
        ariaControls="speed-dial-menu-default"
        ariaExpanded="false"
        className="flex items-center justify-center text-white bg-blue-600 rounded-full md:w-10 md:h-10 w-14 h-14 hover:bg-blue-800  focus:ring-4 focus:ring-blue-300 focus:outline-none "
      >
        <svg
          ariaHidden="true"
          className="w-8 h-8 transition-transform group-hover:rotate-45"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

const Tools = () => {
  return (
    <div className="flex flex-row w-screen h-10  px-10  gap-3  bg-gray-50 overflow-x-auto scrollbar-hide justify-center items-center grow border-b-2">
      <div className=" flex flex-col  items-center justify-center   cursor-pointer hover:bg-gray-100  px-2">
        <i class="ri-book-read-line text-blue-600 text-center"></i>
        <h1 className="text-[12px] font -mt-1 text-gray-700">Paraphraser</h1>
      </div>

      <div className=" flex flex-col  items-center justify-center   cursor-pointer hover:bg-gray-100  px-2">
        <i class="ri-edit-2-line text-red-600 text-center"></i>
        <h1 className="text-[12px] font -mt-1 text-gray-700">
          Grammar Checker
        </h1>
      </div>
    </div>
  );
};

const UserProfileMenu = () => {
  return (
    <div className="flex justify-end -mt-2 w-screen absolute">
      <div
        className="z-50 my-4 w-56  mx-2 text-base list-none bg-white rounded divide-y divide-gray-100 shadow "
        id="dropdown"
      >
        <div className="py-3 px-4">
          <span className="block text-sm font-semibold text-gray-900">
            Neil sims
          </span>
          <span className="block text-sm font-light text-gray-700 truncate">
            adi@grammeai.com
          </span>
        </div>
        <ul
          className="py-1 font-light text-gray-500 dark:text-gray-400"
          aria-labelledby="dropdown"
        >
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-600 hover:text-gray-50 text-gray-700"
            >
              My profile
            </a>
          </li>
        </ul>

        <ul
          className="py-1 font-light text-gray-500 dark:text-gray-400"
          aria-labelledby="dropdown"
        >
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm hover:bg-gray-600 hover:text-gray-50 text-gray-700"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const Navbar = () => {
  const [showUserProfileMenu, setShowUserProfileMenu] = useState(false);

  const handleUserProfileMenu = () => {
    if (showUserProfileMenu) {
      return setShowUserProfileMenu(false);
    }
    return setShowUserProfileMenu(true);
  };
  return (
    <div>
      <header>
        <nav className="w-screen bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center mb-3 md:mb-0 -gap-3">
              <a href="#" className="flex mr-4  ">
                <img
                  src="https://flowbite.s3.amazonaws.com/logo.svg"
                  className="mr-3 h-8"
                  alt="GrammyAi Logo"
                />
                <span className=" font-mono self-center text-sm md:text-xl font-bold whitespace-nowrap  text-blue-600">
                  GrammeAI
                </span>
              </a>
              <h1 className="text-center tracking-tighter md:text-sm text-[9px] md:-ml-3 -ml-10 md:mt-3 mt-6">
                Paraphraser
              </h1>
            </div>
            <div className="flex items-center  lg:order-2">
              <button
                type="button"
                className=" items-center  text-[11.5px] md:text-sm  justify-center text-white bg-blue-600  bg-opacity-95 hover:bg-blue-800 transition duration-300 focus:ring-4 focus:ring-primary-300 font-medium rounded-full px-3 py-2 mr-2 focus:outline-none "
              >
                Upgrade to Premium
              </button>

              <button
                type="button"
                onClick={handleUserProfileMenu}
                className="flex mx-3 text-sm bg-gray-200 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 hover:bg-opacity-80"
                id="user-menu-button"
                ariaExpanded="true"
                dataDropdownoggle="dropdown"
              >
                <span className="sr-only">Open user menu</span>
                <i class="ri-user-fill px-2 py-2.5 rounded-full ri-lg text-gray-600" />
              </button>
            </div>
          </div>
        </nav>
      </header>
      {showUserProfileMenu && <UserProfileMenu />}
      <Tools />
      <FloatingBtn />
    </div>
  );
};

export default Navbar;

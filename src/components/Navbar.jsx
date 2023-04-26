import React, { useState } from "react";
import { Link } from "react-router-dom";

const FloatingBtn = () => {
  const [showFloatingBtn, setShowFloatingBtn] = useState(false)

  const handleFloatingMenu = () => {
    return showFloatingBtn ? setShowFloatingBtn(false) : setShowFloatingBtn(true)
  }
  return (
    <div className="fixed right-6 bottom-6 group">
      {
        showFloatingBtn&&(
          <div id="speed-dial-menu-text-outside-button" className="flex flex-col items-center  mb-4 space-y-2">
          <button type="button" className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 hover:text-gray-900  shadow-sm   hover:bg-gray-50  focus:ring-4 focus:ring-gray-300 focus:outline-none ">
            <a href="https://lhd9qt2i35z.typeform.com/to/hR3b2WBS" target="_blank">
            <svg aria-hidden="true" className="w-6 h-6 mx-auto mt-px" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
              <span className="absolute block mb-px text-sm font-medium -translate-y-1/2 -left-14 top-1/2 ">Feedback</span>
            </a>
              
          </button>
          <button type="button" className="relative w-[52px] h-[52px] text-gray-500 bg-white rounded-full border border-gray-200 hover:text-gray-900  shadow-sm   hover:bg-gray-50  focus:ring-4 focus:ring-gray-300 focus:outline-none ">
            <a href="https://lhd9qt2i35z.typeform.com/to/k2nTn64f" target="_blank">
            <i className="ri-bug-fill w-6 h-6 mx-auto mt-px "></i>
              <span className="absolute block mb-px text-sm font-medium -translate-y-1/2 -left-14 top-1/2">Bug </span>
            </a>
          </button>
      </div>
        )
      }
     
      <button
      onClick={handleFloatingMenu}
        type="button"
        dataDialToggle="speed-dial-menu-default"
        ariaControls="speed-dial-menu-default"
        ariaExpanded="false"
        className="flex items-center justify-center text-white bg-blue-600 rounded-full md:w-10 md:h-10 h-11 w-11 hover:bg-blue-800  focus:ring-4 focus:ring-blue-300 focus:outline-none "
      >
        <svg
          ariaHidden="true"
          className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:rotate-45"
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
      <Link to="/">
      <div className=" flex flex-col  items-center justify-center   cursor-pointer hover:bg-gray-100  px-2">
        <i className="ri-book-read-line text-blue-600 text-center"></i>
        <h1 className="text-[12px] font -mt-1 text-gray-700">Paraphraser</h1>
      </div>
      </Link>

      <Link to={"writergpt"}>
      <div className=" flex flex-col  items-center justify-center   cursor-pointer hover:bg-gray-100  px-2">
        <i className="ri-quill-pen-line text-emerald-500 text-center"></i>
        <h1 className="text-[12px] font -mt-1 text-gray-700">
          Writergpt
        </h1>
      </div>
      </Link>
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
              <Link to={"/"} className="flex mr-4  ">
                {/* <img
                  src="https://flowbite.s3.amazonaws.com/logo.svg"
                  className="mr-3 h-8"
                  alt="GrammyAi Logo"
                /> */}
                <span className=" self-center text-xl  font-normal whitespace-nowrap tracking-wide text-blue-600">
                  ScholarAI
                </span>
              </Link>
              {/* <h1 className="text-center tracking-tighter md:text-sm text-[9px] md:-ml-3 -ml-10 md:mt-3 mt-6">
                Paraphraser
              </h1> */}
            </div>
            {/* <div className="flex items-center  lg:order-2">
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
                <i className="ri-user-fill px-2 py-2.5 rounded-full ri-lg text-gray-600" />
              </button>
            </div> */}

            <h1 className="bg-gradient-to-b from-blue-600 to-blue-700 px-2 py-1  text-sm text-gray-100  cursor-pointer">Experimantal</h1> 

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

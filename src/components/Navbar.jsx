import React, { useState } from "react";

const Tools = () => {
  return (
    <div className="flex flex-row w-screen h-10  px-10  gap-3  bg-gray-50 overflow-x-auto scrollbar-hide justify-center items-center grow border-b-2">
      <div className=" flex flex-col  items-center justify-center   cursor-pointer hover:bg-gray-100  px-2">
      <i class="ri-book-read-line text-blue-600 text-center"></i>
      <h1 className="text-[12px] font -mt-1 text-gray-700">Paraphraser</h1>
      </div>

      <div className=" flex flex-col  items-center justify-center   cursor-pointer hover:bg-gray-100  px-2">
      <i class="ri-edit-2-line text-red-600 text-center"></i>
      <h1 className="text-[12px] font -mt-1 text-gray-700">Grammar Checker</h1>
      </div>
    </div>
    
  )
}

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
      <Tools/>
    </div>
  );
};

export default Navbar;

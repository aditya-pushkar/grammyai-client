import React, { useState } from "react";

const ParaphraserSection = () => {
  const [currentWritingMode, setCurrentWritingMode] = useState("Standard");
  const modes = [
    "Standard",
    "Fluent",
    "Word Changer",
    "Formal",
    "Simple",
    "Creative",
    "Shorten",
  ];

  const handleChangewritingMode = (e) => {
    setCurrentWritingMode(e.target.value);
  };

  return (
    <div className=" md:h-[30rem] h-[37rem] bg-white shadow mt-20 mx-3 md:mx-28 z-50">
      <section className="flex flex-row gap-36 items-center mx-2 border-b border-gray-100">
        <div className="mr-10 ">
          <h1>Modes:</h1>
        </div>
        <ul className="hidden text-xs  text-center text-gray-700 sm:flex">
          {modes.map((mode, index) => (
            <li className=" w-fit mx-0.5 " key={index}>
              <span
                href="#"
                onClick={() => setCurrentWritingMode(mode)}
                className={`inline-block w-full p-4 ${
                  currentWritingMode === mode ? "border-b-2 border-blue-400" : ""
                } bg-gray-50 hover:text-gray-900 hover:bg-gray-100 cursor-pointer`}
              >
                {mode}
              </span>
            </li>
          ))}
        </ul>
        <div className="sm:hidden">
          <label for="tabs" className="sr-only">
            Select your Mode
          </label>
          <select
            value={currentWritingMode}
            onChange={handleChangewritingMode}
            id="tabs"
            className="bg-gray-50 border border-gray-100 text-gray-700 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
          >
            {modes.map((mode, index) => (
              <option value={mode} key={index}>
                {mode}
              </option>
            ))}
          </select>
        </div>
      </section>
      {/* <div className="relative flex flex-col items-center group">
		<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
			<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
		</svg>
		<div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
			<span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">A top aligned tooltip.</span>
			<div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
		</div>
	</div> */}

      {/*  */}
      <section>
       
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-x-2 my-2  mx-0.5">
          <label for="inputText">
            {/* <span className="block pb-2 text-center text-gray-700 md:hidden">
              Text to paraphrase
            </span> */}
            {/* <span className="hidden pb-2 text-center text-gray-600 md:block">
              Enter the text you want to paraphrase
            </span> */}
            <textarea
              name="inputText"
              className="block w-full p-4 border-2 border-gray-100 resize-none h-96 disabled:opacity-60 sm:text-sm md:text focus:outline-none focus:ring-1  focus:border-blue-400"
              placeholder="Unleash your creativity and rephrase your text by choosing from a variety of paraphrasing modes available above. Once you've written down or pasted your text, hit the Paraphrase button situated below to bring your words to life in a fresh new way."
              spellcheck="false"
            ></textarea>
          </label>
          <label for="outputText">
            {/* <span className="block pb-2 text-center text-gray-600">
              Paraphrased text
            </span> */}
            <textarea
              name="outputText"
              className="block w-full p-4 border-2 border-gray-100  resize-none h-96 disabled:opacity-60 sm:text-sm md:text focus:outline-none focus:ring-1 focus:border-blue-400"
              placeholder="Ta-da! Your newly phrased text will pop up here once the paraphrasing tool has done its magic."
              readonly={true}
              value={""}
            ></textarea>
          </label>
        </div>
        <h1
         className="text-gray-600 text-sm w-fit px-2  mx-2 bg-opacity-30 rounded-full"><span className="text-green-600">0</span>/500 Characters
        </h1>
      </section>

      {/* Submit Btn */}
      <div className="flex items-center justify-center my-10 ">
      <button
       type="button"
       className="px-5 py-2 mb-10 text-white  bg-blue-600 rounded-full hover:bg-blue-700 transform ease-in-out duration-300"
       >
        Paraphrase
      </button>
      </div>
    </div>
    
  );
};

export default ParaphraserSection;

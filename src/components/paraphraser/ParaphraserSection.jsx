import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import URL from "../../BASE_URL";

const ParaphraserSection = () => {
  const [currentWritingMode, setCurrentWritingMode] = useState("Standard");
  const [paraphraserInputText, setParaphraserInputText] = useState("");
  const [paraphraserOutputText, setOutputInputText] = useState("");
  const [totalWords, setTotalWords] = useState(0);
  const [maxWords, setMaxWords] = useState(1000);
  const [errorUplodingFile, setErrorUplodingFile] = useState(false);
  const [isWaitingForResult, setIsWaitingForResult] = useState(false);
  const modes = [
    "Standard",
    "Fluency",
    "Formal",
    "Simple",
    "Creative",
    "Smarter",
  ];

  useEffect(() => {
    if (paraphraserInputText) {
      countWords();
    }
    if (paraphraserInputText.length === 0) {
      setTotalWords(0);
    }
  }, [paraphraserInputText]);

  const countWords = () => {
    let count = 0;
    const wordsArray = paraphraserInputText.split(/\s+/);
    wordsArray.map((words) => {
      count += 1;
    });
    return setTotalWords(count);
  };

  const handleParaphraserTextChange = (e) => {
    setParaphraserInputText(e.target.value);
  };

  const handleChangewritingMode = (e) => {
    setCurrentWritingMode(e.target.value);
  };

  const handleSubmit = () => {
    setIsWaitingForResult(true);
    if(totalWords===0) return alert("Please add some words.")
    if(totalWords>maxWords) return alert("The Word limit is 1000.")
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input_text: paraphraserInputText, total_input_tokens: totalWords, text_mode: currentWritingMode })
    };
    fetch(`${URL}/tool/guest-para/`, requestOptions)
        .then(async response => {
          const res = await response.json()
          setOutputInputText(res.output_text)
          setIsWaitingForResult(false)
        })
        .catch(error=>{
          alert("Something went wrong, please try again later.")
          return setIsWaitingForResult(false)
        })


  };

  const showFile = () => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      var preview = document.getElementById("show-text");
      var file = document.querySelector("input[type=file]").files[0];
      var reader = new FileReader();

      var textFile = /text.*/;
      var txtFile = /txt.*/;
      var docFile = /doc.*/;
      var docxFile = /docx.*/;

      setErrorUplodingFile(false);
      if (file.type.match(textFile || txtFile)) {
        reader.onload = function (event) {
          setParaphraserInputText(event.target.result);
          //  preview.innerHTML = event.target.result;
        };
      } else {
        setErrorUplodingFile(true);
      }
      reader.readAsText(file);
    } else {
      alert("Your browser is too old to support HTML5 File API");
    }
  };

  return (
    <div className="md:h-[31rem] h-[37rem]  bg-white shadow  mx-3 md:mx-28 z-50">
      <section className="flex flex-row md:gap-52 gap-32 items-center mx-2 border-b border-gray-100">
        <div className="mr-10 ">
          <h1>Modes:</h1>
        </div>
        <ul className="hidden text-xs  text-center text-gray-700 sm:flex">
          {modes.map((mode, index) => (
            <li className=" w-fit mx-0.5 " key={index}>
              <span
                onClick={() => setCurrentWritingMode(mode)}
                className={`inline-block w-full p-4 ${
                  currentWritingMode === mode
                    ? "border-b-2 border-blue-400"
                    : ""
                }  hover:text-gray-900 hover:bg-gray-50 cursor-pointer`}
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
              maxLength={totalWords >= maxWords && 0}
              name="inputText"
              onChange={handleParaphraserTextChange}
              className={`block w-full p-4 border-2 ${
                totalWords - 1 >= maxWords
                  ? "border-red-700 focus:border-red-700"
                  : "border-gray-100 focus:border-blue-500"
              }  resize-none h-96 disabled:opacity-60 sm:text-sm md:text focus:outline-none focus:ring-1`}
              placeholder="Unleash your creativity and rephrase your text by choosing from a variety of paraphrasing modes available above. Once you've written down or pasted your text, hit the Paraphrase button situated below to bring your words to life in a fresh new way."
              spellcheck="false"
              value={paraphraserInputText}
            ></textarea>
          </label>
          <label for="outputText">
            {/* <span className="block pb-2 text-center text-gray-600">
              Paraphrased text
            </span> */}
            <textarea
              contentEditable={false}
              name="outputText"
              className={`block w-full p-4 border-2 border-gray-100  resize-none h-96 disabled:opacity-60 sm:text-sm md:text focus:outline-none focus:ring-1 focus:border-blue-500`}
              placeholder="Ta-da! Your newly phrased text will pop up here once the paraphrasing tool has done its magic."
              readonly={true}
              value={paraphraserOutputText}
            ></textarea>
          </label>
        </div>
        <div>
          <div className="flex flex-row items-center  w-full mb-10  px-3 py-1 md:gap-24 gap-5">
            <label
              for="dropzone-file"
              className="flex flex-col  items-center justify-center hover:border-blue-600 rounded-full cursor-pointer bg-transparent"
            >
              <div className="flex flex-row items-center justify-center gap-3 px-2  ">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6  text-blue-500 hover:text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
              </div>
              <input
                onChange={showFile}
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            </label>

            <div>
              <button className="text-sm text-gray-700 font-medium ">
                <span
                  className={`${totalWords - 1 >= maxWords && "text-red-500"}`}
                >
                  {totalWords}
                </span>
                /1000 Words
              </button>
            </div>
            <div>
              {errorUplodingFile && (
                <span className="text-xs text-red-500">
                  It doesn't seem to be a text file!
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Submit Btn */}
      <div className="flex items-center justify-center my-10  ">
        {/* <button
      disabled={isWaitingForResult?true:false}
       type="button"
       className="px-5 py-2 mb-10 text-white  bg-blue-600 rounded-full hover:bg-blue-700 transform ease-in-out duration-300 disabled:opacity-25"
       >
        <span className="w-8 h-8 border-4 border-dashed rounded-full animate-spin"></span>
        Paraphrase
      </button> */}

        <button
        onClick={handleSubmit}
          disabled={isWaitingForResult ? true : false}
          type="button"
          className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2  inline-flex items-center disabled:bg-opacity-80"
        >
          {isWaitingForResult&&(
            <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 mr-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          )}
          
          {!isWaitingForResult?"Paraphrase": "Loading...."}
        </button>
      </div>
    </div>
  );
};

export default ParaphraserSection;

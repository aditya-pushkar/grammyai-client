import React, { useState, useEffect } from "react";
import {Configuration, OpenAIApi} from 'openai';
import ReactGA from 'react-ga4'

import TEXT_MODES from "../../helper/textModes";

const configuration = new Configuration({
  apiKey: "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"
});

delete configuration.baseOptions.headers['User-Agent'];
const openai = new OpenAIApi(configuration);

const ContentRewriterSection = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [totalWords, setTotalWords] = useState(0);
  const [maxWords, setMaxWords] = useState(500);
  const [isWaitingForResult, setIsWaitingForResult] = useState(false);
  const [showAdvanceModePopover, setShowAdvanceModePopover] = useState(false)

  useEffect(() => {
    if (inputText) {
      countWords();
    }
    if (inputText.length === 0) {
      setTotalWords(0);
    }
  }, [inputText]);

  const countWords = () => {
    let count = 0;
    const wordsArray = inputText.split(/\s+/);
    wordsArray.map((words) => {
      count += 1;
    });
    return setTotalWords(count);
  };

  const handleAdvanceModePopover = () => {
    return !showAdvanceModePopover? setShowAdvanceModePopover(true) : setShowAdvanceModePopover(false)
  }

  const handleInputTextChanged = (e) => {
    return setInputText(e.target.value)
  }

  const handleSubmit = async() => {
    setIsWaitingForResult(true);
    setOutputText("")
    if (totalWords === 0) {
      setIsWaitingForResult(false);
      return alert("Please add some words.");
    }
    if (totalWords > maxWords) {
      setIsWaitingForResult(false);
      return alert(`The Word limit is ${maxWords}`);
    }
    // Send data to google analytics
    ReactGA.event({
      category: "plagiazise Remover",
      action: "plagiazise Remover",
      label: "writing mode chosed by user with text length",
      value: totalWords
    })
    try{
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: TEXT_MODES['Humanizer']['INITIAL_PROMPT'] + inputText,
        temperature: TEXT_MODES['Humanizer']['TEMPERATURE'],
        max_tokens: maxWords+50,
        n: 1,
        frequency_penalty: TEXT_MODES['Humanizer']['FREQUENCY_PENALTY'],
        presence_penalty: TEXT_MODES['Humanizer']['PRESENCE_PENALTY']
      });
  
      const outputResult = response.data.choices[0].text.trim().replace(/\s+/g, ' ')
      setIsWaitingForResult(false)
      setOutputText(outputResult)
    }catch{
      setIsWaitingForResult(false)
      return alert("Something went wrong, please try again later.")
    }
  };

  return (
    <div>
    <div className="pt-5 px-3 bg-white shadow-lg   mx-3 md:mx-28 z-50 rounded-3xl ">
      <section className="flex flex-col gap-1">
        <div className=" flex flex-row items-center gap-1 ">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
            disabled
             type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none ring-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 disabled:bg-opacity-10"></div>
            <span className="ml-3 text-sm font-medium text-gray-700">
              Advance Mode
            </span>
          </label>

          <div className="flex flex-row gap-16 items-center">
          <i 
          onClick={handleAdvanceModePopover}
          className="ri-question-line text-gray-500 hover:transition-transform delay-150"></i>
          {showAdvanceModePopover&&(
            <div
            dataPopover="popoverTop"
            dataPopoverPlacement="top"
            className="absolute z-50 md:w-max w-40 md:mt-20 text-xs mt-28 whitespace-normal  break-words rounded-lg  bg-gray-200    p-4 font-sans md:text-sm font-normal text-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
          >
            Coming soon.
          </div>
          )}
          
        </div>
        </div>
        
        <div className="grid grid-cols-1  gap-2 lg:grid-cols-2 gap-x-2 my-2  mx-0.5">
          <label for="inputText ">
            {/* <span className="block pb-2 text-center text-gray-700 md:hidden">
              Text to paraphrase
            </span> */}
            {/* <span className="hidden pb-2 text-center text-gray-600 md:block">
              Enter the text you want to paraphrase
            </span> */}
            <textarea
            onChange={handleInputTextChanged}
              maxLength={totalWords >= maxWords && 0}
              name="inputText"
              className={`block w-full p-4 border-2 ${
                totalWords - 1 >= maxWords
                  ? "border-red-700 focus:border-red-700"
                  : "border-gray-100 focus:border-blue-500"
              }  resize-none h-96 disabled:opacity-60 sm:text-sm md:text focus:outline-none focus:ring-1 rounded-xl`}
              placeholder="Once you've written down or pasted your text, hit the Generate button situated below to bring your words to life in a fresh new way."
              spellcheck="false"
              value={inputText}
            ></textarea>
          </label>
          <label for="outputText">
            {/* <span className="block text-center text-gray-600">
              Paraphrased text
            </span> */}
            <textarea
              contentEditable={false}
              name="outputText"
              className={`block w-full p-4 border-2 border-gray-100  resize-none h-96 disabled:opacity-60 sm:text-sm md:text focus:outline-none focus:ring-1 focus:border-blue-500 rounded-xl`}
              placeholder="Your newly generated text will pop up here once the tool has done its magic."
              readonly={true}
              value={outputText}
            ></textarea>
          </label>
        </div>
        <div>
          <div className="flex flex-row items-center justify-evenly w-full mb-5 px-3 py-1 gap-5 md:gap-24 ">
            <div>
              <button className="text-sm text-gray-700 font-medium ">
                <span
                  className={`${totalWords - 1 >= maxWords && "text-red-500"}`}
                >
                  {totalWords}
                </span>
                /500 Words
              </button>
            </div>
            <div className="flex flex-row gap-1 ">
            <a
            href="https://lhd9qt2i35z.typeform.com/to/hR3b2WBS"
            target="_blank"
             className="underline  text-blue-700  text-[9px] md:text-xs hover:tracking-wide cursor-pointer duration-200 ">
              Feedback About Your Experince
            </a>
            <a 
            href="https://lhd9qt2i35z.typeform.com/to/k2nTn64f"
            target="_blank"
            className="underline  text-blue-700 text-[9px] md:text-xs hover:tracking-wide cursor-pointer duration-200 ">
              Bug Report
            </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="flex flex-col gap-1 items-center justify-center mt-7">
    <button
    onClick={handleSubmit}
      disabled={isWaitingForResult ? true : false}
      type="button"
      className="text-white w-fit bg-gradient-to-b from-blue-600 to-blue-700 bg-opacity-30 hover:bg-blue-800  font-medium text-sm px-10 py-2 text-center mr-2  inline-flex items-center disabled:bg-opacity-80"
    >
      {isWaitingForResult && (
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

      {!isWaitingForResult ? "Generate" : "Loading...."}
    </button>
    <p className="space-x-2 md:w-96 px-7 mt-2 text-center md:text-[13px] text-[9px] underline text-gray-500  ">
      If you've been waiting for a while, the server is likely busy.
      Please be patient and know that they're doing their best!
    </p>
    <p className="space-x-2 md:w-96 px-7 text-center md:text-[13px] text-[9px] underline text-red-600 mt-1 ">
    If the plagiarism report is more than 0%, please regenerate your data.
    </p>
  </div>
  </div>
    
  );
};

export default ContentRewriterSection;

// No one likes copied content. Make sure your content is original, and not plagiarized from another source. This will help to ensure that your readers trust your content, and will keep coming back for more.
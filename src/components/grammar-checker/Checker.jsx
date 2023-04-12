import React,  {useState, useEffect} from "react";


const Checker = () => {
  const [checkerWords, setCheckerWords] = useState("")
  const [totalWords, setTotalWords] = useState(0)

  useEffect(()=>{
    if(checkerWords){
      countWords()
    }
  }, [checkerWords])

  const handleChange = (e) => {
    setCheckerWords(e.target.value)
  }

  const countWords = () => {
    let count = 0
    const wordsArray =  checkerWords.split(" ")
    wordsArray.map((words)=>{
      count +=1
    })
    return setTotalWords(count)

  }


  return (
    <div>
      <div className=" h-full bg-white shadow  mx-3 md:mx-28 mb-10">
        <label for="inputText">
          <textarea
          onChange={handleChange}
            name="inputText"
            className="block w-full p-4 border-2 border-gray-100 resize-none h-96 disabled:opacity-60 sm:text-sm md:text focus:outline-none focus:ring-1  focus:border-blue-400"
            placeholder="Free grammar checker."
            spellcheck="false"
          ></textarea>
        </label>

        <div>
          <div class="flex flex-row items-center  w-full mb-10  px-3 py-1 gap-24">
            <label
              for="dropzone-file"
              class="flex flex-col  items-center justify-center  h-8 w-8 border-2 border-blue-500  rounded-full cursor-pointer bg-transparent"
            >
              <div class="flex flex-row items-center justify-center gap-3 px-2  ">
                <svg
                  aria-hidden="true"
                  class="w-4 h-4  text-blue-500"
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
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
            <div>
            <button className="text-sm text-gray-700"><span className="text-green-600">{totalWords}</span> Words</button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Checker;

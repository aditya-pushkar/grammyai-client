import React from "react";

const About = () => {
  const MODES = [
    {
      mode: "Standard",
      des: "Paraphrases your text to make it easier to understand.",
      iconClass: "",
    },
    {
      mode: "Fluency",
      des: "Enhances the fluency and naturalness of your writing.",
      iconClass: "",
    },
    {
      mode: "Formal",
      des: "Transforms your text into more professional language suitable for formal writing.",
      iconClass: "",
    },
    {
      mode: "Simple",
      des: "Simplifies your text for an easy-to-read version.",
      iconClass: "",
    },
    {
      mode: "Creative",
      des: "Adds a touch of creativity to your writing.",
      iconClass: "",
    },
    {
      mode: "Smarter",
      des: "Rewords your text to use more advanced vocabulary and sentence structures.",
      iconClass: "",
    },
  ];
  return (
    <div>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Are you tired of spending hours trying to rephrase your writing?
            </h2>
            <p className="text-gray-500 sm:text-xl ">
              Look no further! Our{" "}
              <span className="text-gray-800 font-semibold underline">
                paraphrasing tool
              </span>{" "}
              is here to make your life easier. Our tool offers multiple{" "}
              <span className="font-bold text-blue-600 underline">modes</span>{" "}
              to suit your needs:
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
            {MODES.map((mode, key) => (
              <div key={key}>
                {/* <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-10 lg:w-10 bg-gradient-to-b from-blue-500 to-blue-600">
                <svg className="w-5 h-5 text-white lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            </div> */}
                <h3 className="mb-2 text-xl font-bold text-gray-700">
                  {mode.mode}
                </h3>
                <p className="text-gray-500 ">{mode.des}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 md:text-3xl text-2xl tracking-tight font text-blue-600 underline">
            <h2>
              And the best part? All of the premium features offered by other
              sites are available for free on our site without any ads!
            </h2>
          </div>

          <div className="py-8  mx-auto max-w-screen-xl sm:py-16 ">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                With our tool, you can:
              </h2>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-700">Save time</h3>
                <p className="text-gray-500 ">
                  Our paraphrasing tool can rephrase your writing in seconds.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-700">
                  Maintain originality
                </h3>
                <p className="text-gray-500 ">
                  Our tool paraphrases your writing while retaining its original
                  meaning and intent.
                </p>
              </div>

              <div className="">
                <h3 className="mb-2 text-xl font-bold text-gray-700">
                  Access it anywhere
                </h3>
                <p className="text-gray-500 ">
                  Our tool is accessible online, so you can use it from
                  anywhere, at any time. <span className="underline">All the premium features offered by
                  other sites are provided for free on our site, including:</span>
                </p>
                <div className="px-3 mt-3 text-gray-500 space-y-1">
                <dl>Multiple modes to choose from.</dl>
                  <dl>Advanced AI algorithms for accurate and natural-sounding results.</dl>
                  <dl>Unlimited usage with no hidden fees or charges.</dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from "react";

const About = () => {
  const MODES = [
    {
      mode: "Standard",
      des: "Paraphrases your content to make it easier to understand.",
      iconClass: "",
    },
    {
      mode: "Fluency",
      des: "Enhances the fluency and naturalness of your writing.",
      iconClass: "",
    },
    {
      mode: "Formal",
      des: "Transforms your content into more professional language suitable for formal writing.",
      iconClass: "",
    },
    {
      mode: "Simple",
      des: "Simplifies your content for an easy-to-read version.",
      iconClass: "",
    },
    {
      mode: "Creative",
      des: "Adds a touch of creativity to your writing.",
      iconClass: "",
    },
    {
      mode: "Creative Pro",
      des: "Rewrite your whole content while maintaining the originality and intent of the content.",
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

          <div className=" flex  w-80 overflow-x-scroll md:w-full md:items-center md:justify-center">
           <div className="">
           <table className="overflow-x-auto min-w-full divide-y-2 divide-gray-200 text-sm w-10">
              <thead className="text-center ">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-10">
                    Paraphrasing Mode
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Description
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Price
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 ">
                {MODES.map((mode, key) => (
                  <tr className="odd:bg-gray-50" key={key}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-700">
                      {mode.mode}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {mode.des}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      Free
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
           </div>
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
                <h3 className="mb-2 text-xl font-bold text-gray-700">
                  Save time
                </h3>
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
                  anywhere, at any time.{" "}
                  <span className="underline">
                    All the premium features offered by other sites are provided
                    for free on our site, including:
                  </span>
                </p>
                <div className="px-3 mt-3 text-gray-500 space-y-1">
                  <dl>Multiple modes to choose from.</dl>
                  <dl>
                    Advanced AI algorithms for accurate and natural-sounding
                    results.
                  </dl>
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

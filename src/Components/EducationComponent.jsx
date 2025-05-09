import React from "react";

const EducationComponent = () => {
  return (
    <div>
      <div>
        {/* div 1 */}
        <div>
          <h4 className="text-5xl text-blue-500 font-bold">Education</h4>
          <section id="education" class="text-white py-8 px-4">
            <div class="border-l-3 border-blue-500 pl-4 relative">
              <div class="absolute w-4 h-4 bg-blue-500 -left-2 top-0 rotate-45"></div>

              <h3 class="text-xl font-semibold text-white">
                Bachelor of Engineering (B.E)
              </h3>
              <p class="text-lg text-gray-300">
                PSN Institute of Technology and Science
              </p>
              <p class="text-sm text-gray-400 italic">2021 – 2024</p>
            </div>

            {/* Education 2 */}

            <div className="border-l-3 border-blue-500 pl-4 relative py-12">
              <div className="absolute w-4 h-4 bg-blue-500 -left-2 top-12 rotate-45"></div>

              <h3 className="text-xl font-semibold text-white">HSC</h3>
              <p className="text-lg text-gray-300">
                Punitha Arullappar HIgher Secondary School
              </p>
              <p className="text-sm text-gray-400">2020</p>
            </div>

            {/* Education 3 */}

            <div className="border-l-3 border-blue-500 pl-4 relative ">
              <div className="absolute w-4 h-4 bg-blue-500 -left-2 bottom-0 rotate-45"></div>

              <h3 className="text-xl font-semibold text-white">SSLC</h3>
              <p className="text-lg text-gray-300">
                Punitha Arullappar HIgher Secondary School
              </p>
              <p className="text-sm text-gray-400">2018</p>
            </div>
          </section>
        </div>

        <div>{/* For image */}</div>

        <div>{/* div 3 */}</div>
      </div>
    </div>
  );
};

export default EducationComponent;

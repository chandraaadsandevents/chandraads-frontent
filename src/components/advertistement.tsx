import React from "react";

const AdvertisingPage: React.FC = () => {
  return (
    <div className="w-full bg-white py-16">

      {/* ===== TOP SECTION ===== */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Your Advertising Simplified
        </h1>

        <div className="w-24 h-1 bg-red-700 mx-auto mt-3 mb-6"></div>

        <p className="text-gray-600 text-lg">
          All your advertising needs under one roof—delivered seamlessly across multiple channels
        </p>
      </div>

      {/* ===== MAIN SECTION ===== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 mt-20 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80"
            className="rounded-3xl shadow-2xl w-full max-w-2xl"
            alt="advertising"
          />
        </div>

        {/* RIGHT TEXT BLOCK */}
        <div>

          <h2 className="text-3xl font-bold text-gray-900">
            Connect Your Brand to the World
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed">
            With two decades of expertise, we deliver maximum value and ensure complete
            satisfaction across all advertising mediums.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            We partner with leading publications, TV channels, and digital platforms to amplify
            your brand's presence and deliver measurable results.
          </p>

          {/* ===== FEATURES ===== */}
          <div className="mt-8 space-y-5">

            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center">
                <span className="text-red-700 text-2xl">🖥️</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">
                  Multi-Channel Approach
                </h4>
                <p className="text-gray-600 text-sm">
                  TV, print, digital, radio, and outdoor advertising
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center">
                <span className="text-red-700 text-2xl">🎯</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">
                  Targeted Campaigns
                </h4>
                <p className="text-gray-600 text-sm">
                  Reach your ideal audience with precision
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center">
                <span className="text-red-700 text-2xl">📊</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">
                  Measurable Results
                </h4>
                <p className="text-gray-600 text-sm">
                  Track ROI and campaign performance effectively
                </p>
              </div>
            </div>

          </div>

          {/* ===== QUOTE BOX ===== */}
          <div className="bg-red-50 border-l-4 border-red-700 p-6 rounded-xl mt-10">
            <p className="italic text-gray-800 text-lg">
              "With two decades of expertise, we deliver maximum value and ensure complete satisfaction"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingPage;

import React from "react";
import { Monitor, Target, BarChart2, Users, Globe, CalendarCheck } from "lucide-react";

const AdvertisingPage: React.FC = () => {
  return (
    <div className="w-full bg-white">

      {/* ===== TOP SECTION ===== */}
      <div className="text-center max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-gray-900">
          Your Advertising Simplified
        </h1>
        <div className="w-24 h-1 bg-red-700 mx-auto mt-3 mb-6 rounded"></div>
        <p className="text-gray-600 text-lg">
          All your advertising needs under one roof—delivered seamlessly across multiple channels
        </p>
      </div>

      {/* ===== MAIN SECTION ===== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 mt-5 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80"
            className="rounded-3xl shadow-2xl w-full max-w-2xl hover:scale-105 transition-transform duration-300"
            alt="advertising"
          />
        </div>

        {/* RIGHT TEXT BLOCK */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
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
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center">
                <Monitor className="text-red-700 w-7 h-7" />
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
                <Target className="text-red-700 w-7 h-7" />
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
                <BarChart2 className="text-red-700 w-7 h-7" />
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

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center">
                <Users className="text-red-700 w-7 h-7" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">
                  Audience Engagement
                </h4>
                <p className="text-gray-600 text-sm">
                  Engage customers through personalized strategies
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

      {/* ===== HOW WE WORK SECTION ===== */}
      <div className="max-w-7xl mx-auto mt-32 px-6">
       

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow duration-300">
            <Globe className="w-12 h-12 text-red-700 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 text-xl">Research & Strategy</h4>
            <p className="text-gray-600 mt-2 text-sm">
              Analyze the market, define goals, and craft the perfect strategy.
            </p>
          </div>

          <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow duration-300">
            <CalendarCheck className="w-12 h-12 text-red-700 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 text-xl">Execution</h4>
            <p className="text-gray-600 mt-2 text-sm">
              Launch campaigns across all channels with precision and expertise.
            </p>
          </div>

          <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow duration-300">
            <BarChart2 className="w-12 h-12 text-red-700 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 text-xl">Optimization</h4>
            <p className="text-gray-600 mt-2 text-sm">
              Measure performance and continuously optimize for best results.
            </p>
          </div>
        </div>
      </div>

     

    </div>
  );
};

export default AdvertisingPage;

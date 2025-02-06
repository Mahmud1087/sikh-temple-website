import React from "react";
import { motion } from "framer-motion";

const EducationFund: React.FC = () => {
  return (
    <div className="p-6 sm:p-12 bg-blue-50 min-h-screen">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-blue-700 text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        The Education Fund of Siri Guru Singh Sabha Mombasa
      </motion.h1>

      <motion.p
        className="text-lg text-gray-800 text-center sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        “The Education Fund of Siri Guru Singh Sabha, Mombasa” was established under Clause 2(c) of the Constitution 
        “To promote religious, cultural, educational, medical, physical, and intellectual advancement of the Sikhs” 
        as an “Endowment and General Fund”.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Aim Section */}
        <div className="rounded-lg bg-yellow-200 p-6 shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Our Aim</h2>
          <ul className="list-disc text-gray-700 space-y-2 text-lg">
            <li>Provide bursaries to those with financial difficulties.</li>
            <li>Award scholarships to high-achieving students.</li>
            <li>Assist parents in enrolling children in better schools.</li>
            <li>Support adults seeking education enhancement.</li>
            <li>Application forms available from Committee Members.</li>
          </ul>
        </div>

        {/* Awards Section */}
        <div className="rounded-lg bg-yellow-200 p-6 shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Awards</h2>
          <ul className="list-disc text-gray-700 space-y-2 text-lg">
            <li>Sh.100,000 for 3 "A"s in "A" Levels.</li>
            <li>Sh.50,000 for 9+ "A"s in "O" Levels.</li>
            <li>Recognition for excellence in various fields.</li>
            <li>Awards are based on cumulative year-end results.</li>
          </ul>
        </div>

        {/* Scholarships Section */}
        <div className="rounded-lg bg-yellow-200 p-6 shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Scholarships</h2>
          <ul className="list-disc text-gray-700 space-y-2 text-lg">
            <li>Recognizes outstanding academic performance.</li>
            <li>Scholarships are one-time payments.</li>
            <li>High achievers may receive educational assistance.</li>
            <li>Awards are given irrespective of financial status.</li>
          </ul>
        </div>

        {/* Bursaries Section */}
        <div className="rounded-lg bg-yellow-200 p-6 shadow-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Bursaries</h2>
          <ul className="list-disc text-gray-700 space-y-2 text-lg">
            <li>Bursaries are paid directly to learning institutions.</li>
            <li>Renewal requires submission of:
              <ul className="list-decimal ml-5 space-y-1">
                <li>Updated application form</li>
                <li>Previous term’s school report</li>
                <li>Invoice from the school</li>
              </ul>
            </li>
            <li>Applications must be submitted 7 days in advance.</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="rounded-lg bg-yellow-200 p-6 shadow-md text-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Contact Information</h2>
          <p className="text-lg text-gray-800">
            <strong>Address:</strong> P.O. Box 83550 - 80100 Mombasa<br />
            <strong>Tel:</strong> +254 722 415378<br />
            <strong>Email:</strong>{" "}
            <a href="mailto:sefmombasa@gmail.com" className="text-blue-500 underline">
              sefmombasa@gmail.com
            </a>
          </p>
        </div>

        {/* Breaking News Section */}
        <div className="rounded-lg bg-yellow-200 p-6 shadow-md text-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Breaking News</h2>
          <p className="text-lg text-gray-800">
            The Education Fund now offers awards for high achievers from Year One to University!
            Vocational course support is also available.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-yellow-200 h-48 rounded shadow-md flex items-center justify-center text-gray-600 text-lg font-semibold">
            Image Placeholder
          </div>
          <div className="bg-yellow-200 h-48 rounded shadow-md flex items-center justify-center text-gray-600 text-lg font-semibold">
            Image Placeholder
          </div>
          <div className="bg-yellow-200 h-48 rounded shadow-md flex items-center justify-center text-gray-600 text-lg font-semibold">
            Image Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationFund;

import React from "react";
import { motion } from "framer-motion";

const DonationsPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-5xl w-full bg-yellow-400 rounded-lg shadow-lg p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Left Section */}
        <div>
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Support Us Through Donations
          </motion.h1>
          <motion.p
            className="text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Your generous contributions make a real difference. Every donation helps us to maintain and improve our services. Thank you for your support!
          </motion.p>
          <motion.h2
            className="text-xl font-semibold text-blue-500 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Important Notes
          </motion.h2>
          <motion.ul
            className="list-disc pl-5 text-gray-700 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {[
              "Include your name as a reference when making a donation.",
              "Contact us for a receipt with your donation details.",
              "Reach out to our support team for any questions.",
            ].map((note, index) => (
              <motion.li
                key={index}
                initial={{ x: -10 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {note}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right Section */}
        <div>
          <motion.h2
            className="text-xl font-semibold text-blue-500 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Bank Details
          </motion.h2>
          <motion.p
            className="text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Use the following details to make your donation:
          </motion.p>
          <motion.ul
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {[
               { label: "Bank Name", value: "BANK OF BARODA (K) LTD" },
               { label: "Account Name", value: "S.G.S.S. MAIN A/C" },
               { label: "Account Number", value: "95820100001825" },
               { label: "Bank Code", value: "06" },
               { label: "Branch Code", value: "002" },
               { label: "SwiftCode", value: "BARBKENAMOM" },
               { label: "Branch Name", value: "DIGO ROAD KIZINGO" },
            ].map((detail, index) => (
              <motion.li
                key={index}
                className="bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="font-semibold text-blue-600">
                  {detail.label}:
                </span>{" "}
                {detail.value}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
};

export default DonationsPage;

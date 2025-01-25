import { motion } from "framer-motion";

const MedicalFund: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="p-8 bg-gradient-to-r from-orange-100 to-blue-100 rounded-2xl shadow-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-5xl font-extrabold text-blue-700 mb-8"
        variants={itemVariants}
      >
        Medical Fund of Siri Guru Singh Sabha
      </motion.h1>

      <motion.section className="mb-10" variants={itemVariants}>
        <h2 className="text-3xl font-semibold text-orange-600 mb-4">
          Establishment
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          The Medical Fund was established as an “Endowment Fund” under Clause
          2 (c) of the then Sabha Constitution, “To promote religious, cultural,
          educational, medical, physical, and intellectual advancement of the
          Sikhs.” It was initiated on the birth anniversary of Siri Guru Nanak
          Dev Ji on 29th November 1993, formally launched at Vaisakhi 1994, and
          became operative from 1st August 1994. The fund started with a
          subscribed capital of Kshs 4.1 million in April 1994.
        </p>
      </motion.section>

      <motion.section className="mb-10" variants={itemVariants}>
        <h2 className="text-3xl font-semibold text-orange-600 mb-4">
          Objectives
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed">
          <li>Encourage every Sabha member to subscribe to the Medical Fund.</li>
          <li>Provide medical information, education, and communication to Sabha members.</li>
          <li>
            Offer healthcare for members as governed by its Constitution and
            Bylaws.
          </li>
          <li>
            Collaborate with health institutions, professionals, and
            organizations with similar objectives.
          </li>
          <li>
            Establish and manage health institutions for its members.
          </li>
        </ul>
      </motion.section>

      <motion.section className="mb-10" variants={itemVariants}>
        <h2 className="text-3xl font-semibold text-orange-600 mb-4">
          Member Benefits
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed">
          <li>
            Maximum medical benefit per year: Kshs 250,000.00 (excluding certain
            conditions).
          </li>
          <li>Additional critical illness benefit: Kshs 200,000.00.</li>
          <li>
            Member contribution to claims:
            <ul className="list-disc ml-6">
              <li>20% for In-Patient and Out-Patient services.</li>
              <li>20% for doctors and specialists’ fees.</li>
              <li>
                60% of retail price for chronic illness medicines, supplements,
                and vitamins.
              </li>
            </ul>
          </li>
          <li>
            Emergency dental treatment benefit: Up to Kshs 20,000.00.
          </li>
          <li>
            50% coverage for other dental treatments (non-cosmetic), up to Kshs
            50,000.00.
          </li>
          <li>
            50% coverage for optical care, up to Kshs 30,000.00.
          </li>
        </ul>
      </motion.section>

      <motion.p
        className="text-lg text-gray-900 font-medium text-center mt-10"
        variants={itemVariants}
      >
        Join the Medical Fund today and contribute to the well-being of the
        community. Together, we can make a difference.
      </motion.p>
    </motion.div>
  );
};

export default MedicalFund;

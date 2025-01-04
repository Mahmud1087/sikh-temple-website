import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AffiliatesPage: React.FC = () => {
  const { affiliateId } = useParams<{ affiliateId: string }>();

  const affiliatesContent: Record<
    string,
    { title: string; description: string }
  > = {
    'medical-fund': {
      title: 'Medical Fund',
      description:
        'The Medical Fund supports underprivileged individuals in accessing essential healthcare services. Your contributions make this possible.',
    },
    'educational-fund': {
      title: 'Educational Fund',
      description:
        'The Educational Fund is dedicated to providing scholarships and resources for students to achieve their academic dreams.',
    },
    'sikh-youth-of-mombasa': {
      title: 'Sikh Youth of Mombasa',
      description:
        'Sikh Youth of Mombasa focuses on youth empowerment, organizing community activities, and fostering leadership.',
    },
  };

  const affiliate = affiliatesContent[affiliateId || ''];

  if (!affiliate) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center p-8 min-h-screen text-center bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">
          Affiliate Not Found
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          The affiliate you are looking for does not exist.
        </p>
        <Link
          to="/affiliates"
          className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Back to Affiliates
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="p-8 min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <motion.h1
          className="text-4xl font-bold text-blue-600 mb-4"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {affiliate.title}
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {affiliate.description}
        </motion.p>
        <Link
          to="/affiliates"
          className="inline-block px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Back to Affiliates
        </Link>
      </div>
    </motion.div>
  );
};

export default AffiliatesPage;

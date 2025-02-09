import React, { Suspense, lazy } from 'react';
import { useParams, Link } from 'react-router-dom';

const affiliatesComponents: Record<string, React.LazyExoticComponent<React.FC>> = {
  'medical-fund': lazy(() => import('../affiliates/MedicalFund')),
  'education-fund': lazy(() => import('../affiliates/EducationFund')),
  'sikh-youth-of-mombasa': lazy(() => import('../affiliates/SikhYouthofMombasa')),
};

const AffiliatesPage: React.FC = () => {
  const { affiliateId } = useParams<{ affiliateId: string }>();

  const AffiliateComponent = affiliateId ? affiliatesComponents[affiliateId] : null;

  if (!AffiliateComponent) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Affiliate Not Found</h1>
        <p>The affiliate you are looking for does not exist.</p>
        <Link
          to="/contact"
          className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Contact US
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <AffiliateComponent />
          <Link
            to="/contact"
            className="inline-block mt-6 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </Suspense>
    </div>
  );
};

export default AffiliatesPage;

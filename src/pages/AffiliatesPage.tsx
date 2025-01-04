import { useParams } from 'react-router-dom';

const AffiliatesPage: React.FC = () => {
  const { affiliateId } = useParams<{ affiliateId: string }>();

  const affiliatesContent: Record<string, { title: string; description: string }> = {
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
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Affiliate Not Found</h1>
        <p>The affiliate you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{affiliate.title}</h1>
      <p className="text-lg text-gray-700">{affiliate.description}</p>
    </div>
  );
};

export default AffiliatesPage;

import React from 'react';

type HomePageProps = {
  title?: string;
  content?: string;
};

const HomePage: React.FC<HomePageProps> = ({
  title = 'Welcome to Gurdwara Siri Guru Singh Sabha Mombasa',
  content = 'Discover our community and events.',
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-orange-600 mb-4">{title}</h1>
      <p className="text-lg text-gray-700 text-center max-w-md">{content}</p>
    </div>
  );
};

export default HomePage;

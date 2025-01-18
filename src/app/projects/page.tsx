import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="py-16 container mx-auto">
        <h1 className="text-3xl font-bold mb-6">More Projects</h1>
        <p className="text-lg text-gray-700">Detailed information about my projects...</p>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;

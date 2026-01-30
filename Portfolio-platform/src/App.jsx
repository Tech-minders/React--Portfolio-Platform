import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';

function App() {
  // Initializing state with 4 sample projects
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      title: 'E-Commerce Dashboard', 
      description: 'A high-performance analytics view built with React and Chart.js.' 
    },
    { 
      id: 2, 
      title: 'Weather Tracker', 
      description: 'Real-time weather updates using OpenWeather API and Geolocation.' 
    },
    { 
      id: 3, 
      title: 'Recipe Finder', 
      description: 'A dynamic search tool for thousands of recipes using styled-components.' 
    },
    { 
      id: 4, 
      title: 'Task Master', 
      description: 'A productivity app featuring drag-and-drop task management.' 
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  function addProject(project) {
    setProjects([...projects, project]);
  }

  function handleSearch(term) {
    setSearchTerm(term);
  }

  // Logic to filter through projects 
  const filteredProjects = projects.filter(function(p) {
    return (
      p.title.toLowerCase().includes(searchTerm) || 
      p.description.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Portfolio Showcase
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A dynamic view of my technical journey and latest creations.
          </p>
        </header>

        {/* Search and Form Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
          <div className="max-w-2xl mx-auto space-y-6">
            <ProjectForm onAddProject={addProject} />
            <div className="border-t border-gray-100 pt-6">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
        </div>

        {/* Project Display Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">My Projects</h2>
          <ProjectList projects={filteredProjects} />
        </section>
      </div>
    </div>
  );
}

export default App;

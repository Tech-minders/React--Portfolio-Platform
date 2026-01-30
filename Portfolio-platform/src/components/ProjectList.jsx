import React from 'react';

function ProjectList({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {projects.map(function(project) {
        return (
          <div 
            key={project.id} 
            className="p-5 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              {project.title}
            </h4>
            <p className="text-gray-600 text-sm ">
              {project.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;

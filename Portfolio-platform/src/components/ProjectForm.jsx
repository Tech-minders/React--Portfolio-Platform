import React, { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({ title: '', description: '' });

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    
    onAddProject({ ...formData, id: Date.now() });
    setFormData({ title: '', description: '' });
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="mb-8 p-6 bg-white border border-gray-200 rounded-md shadow-sm"
    >
      <h3 className="text-xl font-bold mb-4 text-gray-800">Add New Project</h3>
    
      <div className="space-y-4">
        <input 
          type="text"
          placeholder="Project Title" 
          value={formData.title} 
          onChange={function(e) { setFormData({...formData, title: e.target.value}) }} 
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <textarea 
          placeholder="Project Description" 
          value={formData.description} 
          onChange={function(e) { setFormData({...formData, description: e.target.value}) }} 
          className="w-full p-2 border border-gray-300 rounded h-24 "
        />
        
        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded "
        >
          Add Project
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;


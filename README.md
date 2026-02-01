##Portfolio Showcase
A dynamic, responsive project management dashboard built with React and Tailwind CSS. This application allows users to showcase their technical journey by adding, viewing, and searching through a collection of projects in real-time.

##Features
- Project Management: Easily add new projects via a structured form.
- Live Search: Filter through your portfolio instantly using the search bar (matches titles and descriptions).
- Responsive Grid: A modern UI that adapts from mobile devices to extra-wide screens using Tailwind's grid system.
- State Persistence: Managed via React's useState hook for seamless data updates.

##Tech Stack
- Frontend: React.js
- Styling: Tailwind CSS
- Icons/Layout: Custom CSS & Flexbox/Grid

##Component Structure
- App.js: The main orchestrator holding the state for projects and search terms.
- ProjectForm.js: A controlled component for capturing new project titles and descriptions.
- ProjectList.js: A presentational component that maps through filtered data to display cards.
- SearchBar.js: A utility component to handle user input for real-time filtering.

```
├── App.jsx
├── assets
├── components
│   ├── ProjectForm.jsx
│   ├── ProjectList.jsx
│   └── SearchBar.jsx
├── index.css
└── main.jsx
```
##Getting Started
Clone the repository:
```
bash
git clone 
```

Install dependencies:
```
bash
npm install
```


##Usage
To add a project, simply fill out the Project Title and Description in the form at the top of the page. Use the Search Bar to find specific projects by keyword. The dashboard comes pre-loaded with four sample projects to demonstrate the layout.

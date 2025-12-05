Image Upload Assignment
Student: Jashleen Kaur
Course: Internet tools
Assignment 4 – Image Upload, Search, and Frontend Integration
Overview

This project implements a full image management system using a Node.js backend and a React frontend.
The application supports two main features:

Searching for predefined images (tom, jerry, dog) stored in the backend.

Uploading new images from the frontend and storing them on the server.

The backend is built using Express and Multer.
The frontend is built using Create React App and communicates with the backend using fetch API calls.

Features Completed: 

Backend (Node.js + Express)

Implemented /api/getImage?name= route to return existing images.

Implemented /api/upload route using Multer for file uploads.

Configured server to serve static images from the public folder.

Added CORS support.

Added .gitignore to exclude node_modules and build folders.

Tested backend on http://localhost:3000.

Frontend (React)

Created React application inside the frontend folder.

Built Search UI allowing users to type a name and view the matching backend image.

Built Upload UI allowing users to select a file and send it to the backend.

Displayed success messages and uploaded images.

Connected React to backend API using fetch.

Handled file selection, form submission, and state updates.

Tested frontend on http://localhost:3001.

## How to Run
1. Open terminal → run backend:
   cd backend
   node server.js

2. Open second terminal → run frontend:
   cd frontend
   npm start

Day-by-Day Progress (Commit History Summary)
Day 1

Added professor’s Example2 backend starter code.

Added .gitignore to remove node_modules.

Installed backend dependencies: multer and cors.

Implemented /api/upload route.

Kept /api/getImage route functional.

Day 2 Morning

Created React frontend using Create React App.

Implemented Search UI and connected it to backend image route.

Day 2 Evening

Implemented React Upload UI.

Connected upload form to backend /api/upload.

Tested upload and verified new images appear in backend.

Day 3 Finalization

Prepared README documentation (this file).

Verified backend and frontend run correctly.

Prepared GitHub repository for submission.

What Works

Searching predefined images.

Uploading new images through React interface.

Displaying uploaded results.

Backend and frontend successfully communicate.
MY Github link: https://github.com/jashleenkaur/react-image-assignment.git
Conclusion

This project demonstrates the full workflow of backend file handling, API integration, frontend React UI development, and live communication between both layers.
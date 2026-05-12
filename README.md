# 📊 Project & Task Management Dashboard (React)

A modern, responsive Project & Task Management Dashboard built using React.js.

This project demonstrates real-world frontend development practices including reusable components, Context API for state management, API integration, routing, custom hooks, and clean UI design.

---

## 🚀 Overview

This application helps users manage projects and tasks efficiently. It includes task tracking, project listing, filtering, searching, pagination, and dynamic routing for task details.

It is built using scalable React architecture and follows best practices such as:
- Component reusability  
- Separation of concerns  
- Centralized state management  
- API abstraction layer  
- Clean folder structure  

---

## 🛠 Tech Stack

- React.js (Functional Components + Hooks)
- React Router DOM
- Context API
- Tailwind CSS
- Fetch API
- LocalStorage (for persistence)
- JavaScript (ES6+)

---

## ✨ Features

### 📊 Dashboard
- Displays total projects
- Displays total tasks
- Shows completed vs pending task summary

---

### 📁 Projects Module
- List of all projects
- Search projects by name
- Filter by status (Active / Completed)
- Sort projects alphabetically
- Each project includes:
  - Name
  - Description
  - Number of tasks
  - Status

---

### ✅ Tasks Module
- Task list with:
  - Title
  - Assigned user
  - Due date
  - Status (Completed / Pending)

Features:
- Add new task with validation
- Edit existing tasks
- Toggle task completion status
- Search tasks
- Filter tasks
- Pagination
- Task detail navigation (/tasks/:id)

---

### 📄 Task Detail Page
- Displays full task information using dynamic routing

---

## 🧠 State Management

- Implemented using React Context API
- Global state includes:
  - Tasks
  - Projects
  - Loading state
  - Error handling

### Flow:
- API data is fetched inside Context Provider  
- Data is normalized before storing  
- Components consume state using useContext  
- Updates handled via setState functions  

---

## ⚙️ Custom Hooks

- `useFetch` hook created for reusable API logic
- Handles loading, error, and data state centrally

---

## 📂 Project Structure

src/
├── components/
│   ├── Navbar.js
│   ├── TaskCard.js
│   └── TaskForm.js
│
├── context/
│   └── AppContext.js
│
├── pages/
│   ├── Dashboard.js
│   ├── Projects.js
│   ├── Tasks.js
│   └── TaskDetail.js
│
├── services/
│   └── taskService.js
│
├── hooks/
│   └── useFetch.js
│
├── App.js
├── index.css
└── index.js

---

## 🔌 API Integration

- API used: https://jsonplaceholder.typicode.com/todos
- Data fetched using Fetch API
- Data transformed into structured task format
- API logic separated into service layer for better maintainability

---

## 📌 Assumptions

- Projects are static (mock data)
- Tasks are fetched from API
- No backend database is used
- All state updates are handled on the frontend
- Focus is on frontend implementation

---

## 🎯 Future Improvements

- Authentication system
- Backend integration (Node.js / Firebase)
- Role-based access control
- Drag and drop task management
- Advanced analytics dashboard

---

## 👨‍💻 Purpose

This project demonstrates:
- React architecture design
- State management using Context API
- API handling and abstraction
- Custom hooks usage
- Clean and scalable folder structure
- Real-world frontend development patterns

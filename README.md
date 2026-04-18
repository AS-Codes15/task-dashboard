
# 📊 Project & Task Management Dashboard (React)

A modern and responsive Project & Task Management Dashboard built using React.js.  
It demonstrates scalable frontend architecture using reusable components, Context API for state management, API integration, routing, and clean UI design.

---

## 🚀 Overview

This application helps users manage projects and tasks efficiently. It includes task tracking, project listing, filtering, searching, pagination, and dynamic routing for task details.

It is built with real-world React development practices such as:
- Component reusability
- Separation of concerns
- Centralized state management
- API abstraction

---

## 🛠 Tech Stack

- React.js (Functional Components + Hooks)
- React Router DOM
- Context API
- Tailwind CSS
- Fetch API
- LocalStorage (optional persistence)
- JavaScript (ES6+)

---

## ✨ Features

### 📊 Dashboard
- Total projects count
- Total tasks count
- Completed vs pending tasks summary

---

### 📁 Projects Module
- Display list of projects
- Search projects by name
- Filter by status (Active / Completed)
- Sort projects alphabetically
- Each project shows:
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
- Toggle task status
- Search tasks
- Filter tasks
- Pagination
- Task detail navigation (/tasks/:id)

---

### 📄 Task Detail Page
- Displays full task information using dynamic routing

---

## 🧠 State Management

- Uses React Context API
- Global state includes:
  - Tasks
  - Projects
  - Loading state
  - Error state

Flow:
- API fetch happens in Context Provider
- Data is normalized before storing
- Components consume state via useContext
- Updates handled using setState functions

---

## 📂 Project Structure

src/
│
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

## ⚙️ Installation & Setup

1. Clone repository  
git clone https://github.com/AS-Codes15/task-dashboard.git

2. Install dependencies  
npm install

3. Start development server  
npm start

4. Build for production  
npm run build

---

## 🔌 API Integration

- API used: https://jsonplaceholder.typicode.com/todos
- Data fetched using Fetch API
- Data transformed into structured task format
- API logic separated into service layer

---

## 📌 Assumptions

- Projects are static (mock data)
- Tasks are fetched from API
- No backend database used
- State updates happen in frontend only
- Focus is frontend implementation

---

## 🎯 Future Improvements

- Authentication system
- Backend integration (Node / Firebase)
- Role-based access control
- Drag & drop tasks
- Advanced analytics dashboard

---

## 👨‍💻 Purpose

This project demonstrates:
- React architecture
- State management
- API handling
- Clean folder structure
- Real-world frontend design patterns

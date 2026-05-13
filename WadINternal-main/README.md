# 📘 WAD Internal Weekly Development Guide

![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Language](https://img.shields.io/badge/Language-JavaScript%20%7C%20Java%20%7C%20Node.js-blue?style=for-the-badge)
![Database](https://img.shields.io/badge/Database-MySQL-orange?style=for-the-badge)
![Frontend](https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20React-ff69b4?style=for-the-badge)
![Backend](https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge)

---

## 🌐 Week 1–4: Frontend Basics

### 🚀 Run with Live Server
- Open project in **VS Code**
- Create `index.html`, `style.css`, `script.js`
- Right-click `index.html`
- Select **Open with Live Server**
- Browser auto-opens project
- Make changes → Save → Auto reload happens ⚡

---

## ☕ Week 5: Java + MySQL CRUD App (Eclipse)

### 🔧 Eclipse Setup
- Open **Eclipse**
- Go to: `File → New → Java Project`
- Create project → Finish

### 📦 Package & Class Setup
- `src → Right-click → New → Package`
- Example: `com.app`
- Right-click package → New → Class
- Class name: `CRUDApp`
- Paste CRUD Java code

### 🔗 Add MySQL Connector
- Right-click project → **Build Path**
- Configure Build Path → Libraries
- Add External JAR → MySQL Connector
- Apply & Close

### 🗄️ MySQL Setup
```sql
CREATE DATABASE studentdb;
USE studentdb;



Run Application
Run Java program in Eclipse
Verify CRUD operations in database
🧾 Week 6: XML Practice (Error Handling)
Open XML file
Remove commented sections
Introduce syntax errors for practice
Validate structure manually or via IDE warnings
⚙️ Week 10: Node.js CRUD API (Express)
📦 Setup
npm init
npm install express
📄 Create Server
Create server.js
Add Express CRUD API code
🚀 Run Server
node server.js
🌐 API Testing (Postman)
Base URL: http://localhost:PORT
🔍 Endpoints
GET /students
POST /students
PUT /students/:id
DELETE /students/:id
🔐 Week 11: JWT Authentication API
⚙️ Install Dependencies
npm init
npm install express jsonwebtoken bcryptjs
📄 Server Setup
Create server.js
Add authentication & login logic
🚀 Run Server
node server.js
🔑 Login API (Postman)
POST /login
{
  "username": "admin",
  "password": "password123"
}
🔐 Token Usage
Copy JWT token
Go to Authorization → Bearer Token
Paste token
Access protected routes
⚛️ Week 12: React App Setup
🚀 Run Project
npm install
npm run dev

🌐 Open:

http://localhost:5173
📊 Week 13: React + Charts Project
📦 Setup
cd WAD13
npm install
npm install chart.js react-chartjs-2
🚀 Run
npm run dev
🌐 Open
http://localhost:5173
📈 Features
Interactive charts 📊
Data visualization
Dynamic UI updates
🚀 Week 14: Final React Project
▶️ Run Project
npm install
npm run dev
🌐 Open App
http://localhost:5173
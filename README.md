# 🎓 University Search App  

## 📌 Project Overview  
A full-stack web application that allows users to **search for universities in India** using an external API. Users can mark universities as **favorites**, store them in a database, and view their saved list without calling the external API again.  

---

## 🚀 Features  

✅ **Search Universities** – Fetch universities in India from an external API.  
✅ **Display Results** – Show university details in a table with clickable links.  
✅ **Favorite Universities** – Mark universities as favorites and save them to a database.  
✅ **View Favorites** – Display all saved universities without calling the API again.  

---

## 🛠️ Tech Stack  

### **Backend:**  
- **Node.js** + **Express.js** – API & server  
- **MySQL** – Database storage  
- **Sequelize** – ORM for database management  

### **Frontend:**  
- **React.js** – UI framework  
- **Bootstrap 5** – Styling  

### **Other Tools:**  
- **Git** – Version control  

---

## 📂 Project Structure  
```
/university-search-app
│── backend/            # Node.js & Express server
│   ├── src/
│       ├── routes/         # API endpoints
│       ├── models/         # Database models
│       ├── controllers/    # Business logic
│       ├── config/         # Database connection setup
│   ├── index.js            # Entry point
│
│── frontend/           # React app
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── pages/      # Search & Favorites pages
│   │   ├── App.js      # Main component
│   │   ├── index.js    # React entry point
│
│── README.md           # Documentation
│── .gitignore          # Git ignored files
```

---

## 📖 API Endpoints  

### **External API:**  
🔹 `GET https://university-domains-list-api.herokuapp.com/search?country=India` – Fetch universities in India  

### **Backend API:**  
🔹 `GET /api/universities` – Fetch universities from the external API  
🔹 `POST /api/favourites` – Save a university to favorites  
🔹 `GET /api/favourites` – Get all saved favorites  

---

## 🔧 Setup Instructions  

### **Prerequisites:**  
✔️ Node.js & npm installed  
✔️ MySQL database set up  

### **Backend Setup:**  
```sh
cd backend
npm install
npm start
```

### **Frontend Setup:**  
```sh
cd frontend
npm install
npm start
```

### **Database Setup:**  
1️⃣ Create a MySQL database.  
2️⃣ Update the `.env` file with database credentials.  
3️⃣ Run migrations using Sequelize:  
```sh
npx sequelize-cli db:migrate
```

---

## 📷 Screenshots  

### **🔎 Search Page**  
![alt text](image.png) 

### **⭐ Favorites Page**  
![alt text](image-1.png) 


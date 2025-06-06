# 🎮 MovieVerse - Movie Rating & Review Platform

MovieVerse is a full-stack movie review application built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It allows users to discover movies, rate and review them, manage watchlists, and provides an admin panel for managing the movie database and users.

---

## 🌐 Live Demo

* 🔗 **Frontend** (Vercel): [movie-verse.vercel.app](https://movie-verse-app-c4yp.vercel.app/)
* ⚙️ **Backend API**: [movie-verse-api.vercel.app](https://movie-verse-app-khaki.vercel.app/)
* 🛠️ **GitHub Repo**: [github.com/Abh1xxx/MovieVerse-APP](https://github.com/Abh1xxx/MovieVerse-APP)

---

## 🎥 Demo Videos

* 🎽️ **Project Walkthrough**: [Watch here](https://drive.google.com/file/d/1gDQPrgI4_1nAYy4WxFERVyb60Ioy7R6t/view?usp=sharing)
* 🎮 **Admin - Create Movie Demo**: [Watch here](https://drive.google.com/file/d/1-m8UqvwjXfS88n43IFdTwROHp8NbN9Hm/view?usp=sharing)

---

## ✨ Features

### 👤 User

* Register & Login (JWT Authentication)
* View Movie Listings & Details
* Add, Edit & Delete Reviews
* Add/Remove Movies from Watchlist
* View Personal Dashboard

### 🛠️ Admin

* Create, Edit & Delete Movies
* Manage Users
* Review Moderation
* Admin Analytics Dashboard

---

## 🛠️ Tech Stack

* **Frontend**: React.js, Tailwind CSS, DaisyUI, React Router
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Mongoose ODM)
* **Authentication**: JWT (JSON Web Tokens)
* **File Upload**: Cloudinary
* **Hosting**: Vercel (Frontend & Backend)

---

## 📁 Project Structure

```
MOVIE-RATING-REVIEW-WEBSITE/
├── client/             # Frontend (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── Layouts/
│   │   ├── Routes/
│   │   └── assets/
│   └── ...
├── server/             # Backend (Node.js + Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utilities/
│   └── ...
```

---

## 🧪 How to Run Locally

### 📦 Clone Repository

```bash
git clone https://github.com/Abh1xxx/MovieVerse-APP.git
cd MovieVerse-APP
```

### ▶️ Frontend Setup

```bash
cd client
npm install
npm run dev
```

### 🔁 Backend Setup

```bash
cd server
npm install
npm run dev
```

> Make sure to configure `.env` files for both frontend and backend. Example environment variables:

```env
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 📧 Developer Info

* **👨‍💻 Name**: Abhiram K Rajan
* **📬 Email**: [abhirammain01@gmail.com](mailto:abhirammain01@gmail.com)

---

## 🙌 Acknowledgements

* Vercel for hosting
* MongoDB Atlas
* Cloudinary for media storage
* Open Source community ❤️

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

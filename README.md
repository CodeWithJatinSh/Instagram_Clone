# 📸 Instagram Clone (Mini-Project)

![Project Status](https://img.shields.io/badge/Status-Learning%20Project-blue?style=flat-square)
![Tech Stack](https://img.shields.io/badge/Stack-Node.js%20%7C%20Express%20%7C%20EJS-green?style=flat-square)

## 📖 Project Overview

This repository contains a **mini-project** designed to simulate the core functionality of a social media platform. 

The primary goal of building this application was to deconstruct and master **RESTful API architecture** and **Server-Side Rendering** using EJS. It serves as a practical implementation of CRUD (Create, Read, Update, Delete) operations in a Node.js environment.

---

## 🛠️ Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Runtime** | **Node.js** | The backend execution environment. |
| **Framework** | **Express.js** | Used for routing and middleware management. |
| **Templating** | **EJS** | Embedded JavaScript for rendering dynamic views on the server. |
| **Styling** | **CSS3** | Custom styling for the UI (located in `public/`). |
| **Database** | **Data Storage** | *Note: Replace this with MongoDB or Array mock-db based on your code* |

---

## 🎯 Key Learning Objectives

This project was built to strictly adhere to standard architectural patterns. My focus was on:

### 1. RESTful Routing
I implemented a resource-based routing structure to handle user posts. The routes map directly to standard HTTP verbs:

* **GET /posts** - View all posts (`home.ejs`)
* **GET /posts/new** - Form to create a new post (`newpost.ejs`)
* **POST /posts** - Create the post on the server
* **GET /posts/:id** - View specific details of a post (`show.ejs`)
* **GET /posts/:id/edit** - Form to edit a post (`editpost.ejs`)
* **PATCH/PUT /posts/:id** - Update the post
* **DELETE /posts/:id** - Remove the post

### 2. EJS & Dynamic Views
I utilized **EJS** to pass data from the server (`index.js`) to the client-side views.
* **File Structure:** As seen in the `views` folder, I separated concerns by creating distinct templates for each REST action.
* **Data Injection:** Dynamic rendering of usernames, captions, and images.

---

## 📂 Project Structure

A look at how the codebase is organized to maintain separation of concerns:

```text
INSTAGRAM_CLONE/
├── node_modules/       # Dependencies
├── public/             # Static assets (CSS, Client-side JS, Images)
│   ├── uploads/        # User uploaded content
│   ├── Poststyle.css   # Specific styles for post cards
│   └── style.css       # Global styles
├── views/              # EJS Templates (The View Layer)
│   ├── editpost.ejs    # Edit form
│   ├── home.ejs        # Main feed
│   ├── newpost.ejs     # Creation form
│   ├── show.ejs        # Single post view
│   └── welcome.ejs     # Landing page
├── index.js            # Main server entry point & Route definitions
├── package.json        # Project metadata & scripts
└── package-lock.json   # Dependency tree lock
```
-----
## 🚀 How to Run Locally

Follow these steps to get the project running on your local machine.

### Prerequisites
* **Node.js** installed on your machine.

### Steps

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/CodeWithJatinSh/instagram-clone.git](https://github.com/CodeWithJatinSh/instagram-clone.git)
    ```

2.  **Navigate to the project directory**
    ```bash
    cd instagram-clone
    ```

3.  **Install dependencies**
    ```bash
    npm install
    ```

4.  **Start the server**
    ```bash
    node index.js
    ```
    *(You should see a console message confirming the server is running, e.g., "Listening on port 8080")*

5.  **Open in Browser**
    Visit `http://localhost:8080` (or the port configured in your `index.js`).

---

## 🔮 Future Improvements

This project was a stepping stone to master the basics. To evolve this into a production-ready application, the following features are on the roadmap:

* **Database Integration:** Transition from local memory to **MongoDB** (using Mongoose) for persistent data storage.
* **Authentication:** Implement **Passport.js** for secure User Signup, Login, and Session management.
* **Cloud Storage:** Integrate **Cloudinary** or **AWS S3** to handle image uploads professionally.
* **Relationships:** Create a One-to-Many relationship model to allow users to comment on posts.

---

## 👨‍💻 About Me

My name is **Jatin Sohanvi**. I am a passionate developer focused on Backend Development and Architecture. I enjoy building systems from the ground up to understand the core mechanics of the web. This project represents my effort to master the "Why" and "How" behind RESTful APIs.

* **GitHub:** https://github.com/CodeWithJatinSh
* **LinkedIn:** https://www.linkedin.com/in/jatin-sohanvi-7007591b7/
* **Email:** jatin.msc.cs@gmail.com

---
*Built with ❤️ and JavaScript.*

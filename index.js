// Importing the express framework
const express = require('express');
// Importing the uuid library for generating unique IDs
const { v4: uuidv4 } = require('uuid');
// Creating an instance of an express application
const app = express();

// Port on which the server will run
const port = 3000;

// Importing path module to work with file and folder paths
const path = require('path');

// Importing multer for handling file uploads
const multer = require('multer');

// For storing uploaded images in public/uploads
const upload = multer({ dest: "public/uploads/" });

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Setting EJS as the template/view engine
app.set('view engine', 'ejs');

// Setting the directory where the EJS view files are stored
app.set("views", path.join(__dirname, "views"));

// Serving static files inside public folder
app.use(express.static(path.join(__dirname, "public")));


// ------------------------------------
// POSTS ARRAY
// ------------------------------------
let posts = [
    {   
        id: uuidv4(),
        username: "john_doe",
        caption: "Enjoying the sunny weather! #sunshine #vacation",
        imageUrl: "uploads/JDPOST.jpg",
        likes: 120
    },
    {   
        id: uuidv4(),
        username: "john_doe",
        caption: "Enjoying the sunny weather! #sunshine #vacation",
        imageUrl: "uploads/JDPOST.jpg",
        likes: 120
    }
];


// ------------------------------------
// ROUTES
// ------------------------------------
app.get('/', (req, res) => {
    console.log("Server is running");
    res.send("Hello from the other side");
});

app.get('/posts', (req, res) => {
    res.render('home.ejs', { posts });
});

app.get('/posts/new', (req, res) => {
    res.render('newpost.ejs');
});


// HANDLE NEW POST FORM SUBMISSION
app.post("/posts", upload.single("image"), (req, res) => {
    const { username, caption } = req.body;

    // Save only the filename (NOT full path)
    const imageUrl = "uploads/" + req.file.filename;

    posts.push({uuidv4,username, caption, imageUrl, likes: 100});

    console.log("New post added:", newPost);

    res.redirect("/posts");
    console.log(posts);
});

app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);
    if (post) {
        res.render('show.ejs', { post });
    } else {
        res.status(404).send("Post not found");
    }
});

// ------------------------------------
// START SERVER
// ------------------------------------
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Importing the express framework
const express = require('express');
// Importing the uuid library for generating unique IDs
const { v4: uuidv4 } = require('uuid');
// Creating an instance of an express application
const app = express();

// Importing method-override to support PUT and DELETE methods via forms
const methodOverride = require('method-override');
// Using method-override middleware
app.use(methodOverride('_method'));

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
    res.render('welcome.ejs');
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
    const imageUrl = "uploads/" + req.file.filename;

    const newPost = {
        id: uuidv4(),
        username,
        caption,
        imageUrl,
        likes: 100
    };

    posts.push(newPost);

    console.log("New post added:", newPost);

    res.redirect("/posts");
});


app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id == id);
    if (post) {
        res.render('show.ejs', { post });
    } else {
        res.status(404).send("Post not found");
    }
});

app.get('/posts/:id/edit', (req, res) => {
    const { id } = req.params;

    const post = posts.find(p => p.id == id);

    if (post) {
        res.render('editpost.ejs', { post });
        console.log("Editing post:", post);
    } else {
        res.status(404).send("Post not found");
    }
});

app.patch('/posts/:id/edit', upload.single("image"), (req, res) => {
    const { id } = req.params;
    const { username, caption } = req.body;
    const post = posts.find(p => p.id == id);

    if (post) {
        post.username = username;
        post.caption = caption;
        if (req.file) {
            post.imageUrl = "uploads/" + req.file.filename;
        }
        res.redirect(`/posts/${id}`);
        console.log("Post updated:", post);
    } else {
        res.status(404).send("Post not found");
    }
});

app.delete('/posts/:id',(req, res) => {
    let {id}= req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect('/posts');
});

// ------------------------------------
// START SERVER
// ------------------------------------
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

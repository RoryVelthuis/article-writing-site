const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Route to fetch article by slug
app.get('/articles/:slug', (req, res) => {
    const { slug } = req.params;
    // Example article data
    const article = {
        title: `Article with slug: ${slug}`,
        content: `This is the content of the article with slug: ${slug}.`
    };
    res.json(article);
    console.log('Article request');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// server.js
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

const viewsPath = path.join(__dirname, 'views');
const indexPath = path.join(viewsPath, 'index.ejs');

console.log(`Checking for views directory at: ${viewsPath}`);
console.log(`Checking for index.ejs file at: ${indexPath}`);

if (fs.existsSync(indexPath)) {
    console.log('SUCCESS: The index.ejs file was found!');
} else {
    console.error('ERROR: The index.ejs file was NOT found. Please check your file name and folder structure.');
}

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (req, res) => {
    res.render('index', { name: "Shubham Kumar" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
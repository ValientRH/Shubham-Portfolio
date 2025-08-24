// build.js
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// 1. Define paths
const templatePath = path.join(__dirname, 'views', 'index.ejs');
const outputPath = path.join(__dirname, 'dist', 'index.html');
const distDir = path.join(__dirname, 'dist');

// 2. Data for your template
const data = {
    name: "Shubham Kumar"
};

console.log('Starting build process...');

// 3. Ensure the 'dist' directory exists
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
    console.log('Created dist directory.');
}

// 4. Read the EJS template
fs.readFile(templatePath, 'utf8', (err, template) => {
    if (err) {
        console.error('Error reading template:', err);
        return;
    }
    
    // 5. Render the template with data
    const html = ejs.render(template, data);
    
    // 6. Write the final HTML to the dist folder
    fs.writeFile(outputPath, html, (err) => {
        if (err) {
            console.error('Error writing HTML file:', err);
            return;
        }
        console.log('Successfully generated index.html!');
    });
});
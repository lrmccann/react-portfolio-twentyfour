const express = require('express');
const app = express();
const cors = require("cors")
const PORT = process.env.PORT || 3000;
const path = require('path');
const fs = require("fs");

app.use(cors());

const corsOptions = {
    origin: ["http://localhost:3006", "http://localhost:3000"],
    credentials: true
}

app.use(cors(corsOptions));

// app.get('/', (req, res) => {
//     console.log(req.route.path, "the request to look out for logan");
//     // res.json({message : "helloooo hooooomee"});
//     const filePath = path.resolve(__dirname, '../build', 'index.html')
//     fs.readFile(filePath, 'utf8', function(err, data){
//         if(err){
//             return console.error(err);
//         }
//         // $OG_TITLE
//         data = data.replace(/\$OG_TITLE/g, 'Home Page');
//         // $OG_DESCRIPTION
//         data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
//         // $OG_KEYWORDS
//         data = data.replace(/\$OG_KEYWORDS/g, ["Home", "Developer", "FrontEnd", "React", "Vue"]);
//         // $OG_IMAGE
//         // data = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png)
//         res.send(data);
//     })
// });

// app.get('/about', (req, res) => {
//     const filePath = path.resolve(__dirname, '../build', 'index.html')
//     fs.readFile(filePath, 'utf8', function(err, data){
//         if(err){
//             return console.error(err);
//         }
//         data = data.replace(/\$OG_TITLE/g, 'About Page');
//         data = data.replace(/\$OG_DESCRIPTION/g, "About page description");
//         data = data.replace(/\$OG_KEYWORDS/g, ["About", "Developer", "FrontEnd", "React", "Vue", "Content Management Systems", "Shopify", "WordPress"]);
//         // data = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png)
//         res.send(data)
//     })
// });

// app.get('/skills', (req, res) => {
//     const filePath = path.resolve(__dirname, '../build', 'index.html')
//     fs.readFile(filePath, 'utf8', function(err, data){
//         if(err){
//             return console.error(err);
//         }
//         data = data.replace(/\$OG_TITLE/g, 'Skills Page');
//         data = data.replace(/\$OG_DESCRIPTION/g, "Skills page description");
//         data = data.replace(/\$OG_KEYWORDS/g, 
//             ["Skills", "PHP", "Javascript", "React", "Vue", 
//             "Webpack", "Shopify", "WordPress", "Next.js",
//             "Node.js", "Nest.js", "Python", "Flask", "GraphQL", "MongoDB",
//             "MySQL", "Amazon Web Services", "Git", "Jira", "Klayvio",
//             "Octane", "Mail Chimp", "Adobe Analytics", "Google Analytics",
//             "SemRush", "Facebook Pixel", "TikTok Pixel", "HubSpot"]);
//         // data = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png)
//         res.send(data)
//     })
// });

// app.get('/experience', (req, res) => {
//     const filePath = path.resolve(__dirname, '../build', 'index.html')
//     fs.readFile(filePath, 'utf8', function(err, data){
//         if(err){
//             return console.error(err);
//         }
//         data = data.replace(/\$OG_TITLE/g, 'Experience Page');
//         data = data.replace(/\$OG_DESCRIPTION/g, "Experience page description");
//         data = data.replace(/\$OG_KEYWORDS/g, ["Experience", "Resume", "FrontEnd", "Senior FrontEnd Developer", "Senior Front-End Developer", "Webex", "Webex by Cisco", "Almond Cow", "Adorama", "Leadership", "CMS", "Stakeholder Management"]);
//         // data = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png)
//         res.send(data)
//     })
// });

// app.get('/projects', (req, res) => {
//     const filePath = path.resolve(__dirname, '../build', 'index.html')
//     fs.readFile(filePath, 'utf8', function(err, data){
//         if(err){
//             return console.error(err);
//         }
//         data = data.replace(/\$OG_TITLE/g, 'Projects Page');
//         data = data.replace(/\$OG_DESCRIPTION/g, "Projects page description");
//         data = data.replace(/\$OG_KEYWORDS/g, ["Projects", "Experience", "Webex", "Webex Blog", "Socio Events", "Adorama", "Scuba.com", "Sunny Sports", "Almond Cow", "CPaaS Solutions", "CMS", "WordPress", "AEM", "Shopify"]);
//         // data = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png)
//         res.send(data)
//     })
// });

// app.get('/contact', (req, res) => {
//     const filePath = path.resolve(__dirname, '../build', 'index.html')
//     fs.readFile(filePath, 'utf8', function(err, data){
//         if(err){
//             return console.error(err);
//         }
//         data = data.replace(/\$OG_TITLE/g, 'Contact Page');
//         data = data.replace(/\$OG_DESCRIPTION/g, "Contact page description");
//         data = data.replace(/\$OG_KEYWORDS/g, ["Contact", "Logan McCann", "Email", "Name", "Message"]);
//         // data = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png)
//         res.send(data)
//     })
// });


// app.use(express.static(path.resolve(__dirname, '../build')));

// app.get('*', function(request, response) {
//     const filePath = path.resolve(__dirname, '../build', 'index.html');
//     response.sendFile(filePath);
//   });
const routeData = {
    "/": {
        "title": "Home",
        "description": "Home Page Description",
        "keywords": ["Home", "Developer", "FrontEnd", "React", "Vue"],
        "image" : ""
    },
    "/about": {
        "title": "About",
        "description": "About Page Description",
        "keywords": ["About", "Developer", "FrontEnd", "React", "Vue", "Content Management Systems", "Shopify", "WordPress"],
        "image" : ""
    }
}

const indexPath  = path.resolve(__dirname, '..', 'build', 'index.html');
app.get('/*', (req, res, next) => {
    // console.log(req, "whole req");
    console.log(req.originalUrl, "og url?")
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }else if(req.originalUrl === "/"){
            htmlData = htmlData.replace(
                "<title>$OG_TITLE</title>",
                `<title>Home</title>`
            )
            .replace('$OG_TITLE', routeData['/'].title)
            .replace('$OG_DESCRIPTION', routeData['/'].description)
            .replace('$OG_KEYWORDS', routeData['/'].keywords)
            .replace('$OG_IMAGE', routeData['/'].image)
            res.send(htmlData);
        }else if(req.originalUrl === "/about"){
            htmlData = htmlData.replace(
                "<title>$OG_TITLE</title>",
                `<title>About</title>`
            )
            .replace('$OG_TITLE', routeData['/about'].title)
            .replace('$OG_DESCRIPTION', routeData['/about'].description)
            .replace('$OG_KEYWORDS', routeData['/about'].keywords)
            .replace('$OG_IMAGE', routeData['/about'].image)
            res.send(htmlData);
        }
        // res.send("asdlkasdklasjdlkasjdaskldjaslkd");
        // TODO get post info

        // TODO inject meta tags
    });
});





app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
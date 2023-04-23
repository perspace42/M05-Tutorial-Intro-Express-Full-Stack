const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine','ejs');


// listen for requests
app.listen(3000);

app.get('/',(req,res) => {
    //Sends content to browser (automatically sets Content-Type: text/html;)
    //res.send('<p>home page</p>');

    //sends the file to the browser
    //when a relative path is used root must be provided to show what directory is a relative too
    //res.sendFile('./views/index.html', {root: __dirname});
    const blogs = [
        {title: "Yoshi finds eggs", snippet: 'Lorem ipsum dolor sit amte consectetur'},
        {title: "Mario finds stars", snippet: 'Lorem ipsum dolor sit amte consectetur'},
        {title: "How to defeat bowser", snippet: 'Lorem ipsum dolor sit amte consectetur'},
    ];
    res.render('index',{title: 'Home', blogs});
});

app.get('/about',(req,res) => {
    //Sends content to browser (automatically sets Content-Type: text/html;)
    //res.send('<p>about page</p>');

    //sends the file to the browser
    //when a relative path is used root must be provided to show what directory is a relative too
    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about',{title: 'About'});

});

app.get('/blogs/create', (req,res) =>{
    res.render('create',{title: 'Create a new Blog'});
})

//404 page
app.use((req,res) => {
    //remember to add '/url', to the parameters of use if uncommenting this code
    // the line /url is if the url is any other previously undefined url
    //res.sendFile('./views/404.html', {root: __dirname});

    //another way to do the 404 page (if status is 404, send error page)
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404',{title: '404'});
});


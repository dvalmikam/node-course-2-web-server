const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
  var now = new Date().toString();
  console.log(`${now}:${req.method} ${req.url}`);
  next();
});

hbs.registerHelper('getCurrentYEar', ()=>{
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase();
});
app.get('/',(request, response)=>{
// response.send('Hello Express!');
response.render('home.hbs',{
  pageTitle:'Home',

  welcomeMessage:'Hello Express!'
});
});

app.get('/about',(request, response)=>{
response.render('about.hbs',{
  pageTitle:'About'

});
});

app.get('/projects',(request, response)=>{
response.render('projects.hbs',{
  pageTitle:'projects'

});
});

app.get('/bad',(request, response)=>{
response.send({
error:'Error'
});
});

app.listen(port,()=>{
  console.log('Server is running');
});

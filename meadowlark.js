const express = require('express')
const expressHandlebars = require('express-handlebars')
const fortune = require('./lib/fortune')
const app = express()
const handlers =require('./lib/handlers')


// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000
app.use(express.static(__dirname + '/public'))

app.get('/',handlers.home)
//app.get('/', (req, res) => res.render('home'))
//app.get('/about', (req, res) => res.render('about'))

app.get('/about',handlers.about)
/*
app.get('/about', (req, res) => {
  res.render('about', { fortune: fortune.getFortune() })
})*/


// custom 404 page
app.use(handlers.notFound)
/*app.use((req, res) => {
  res.status(404)
  res.render('404')
})*/

// custom 500 page
app.use(handlers.serverError)
/*
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500)
  res.render('500')
})*/


/*
app.get('/', (req, res) => {
  res.type('text/plain')
  res.send('Meadowlark Travel');
})

app.get('/about', (req, res) => {
  res.type('text/plain')
  res.send('About Meadowlark Travel')
})

// custom 404 page
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not Found')
})

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})
*/

/*
app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`))
*/

  if(require.main === module) {
    app.listen(port, () => {
      console.log( `Express started on http://localhost:${port}` +
        '; press Ctrl-C to terminate.' )
    })
  } else {
    module.exports = app
  }
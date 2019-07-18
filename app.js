const express  = require('express');
const bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
const app = express();
//Routing imports
const router =  require('./routes/route');

app.use(bodyParser.json());

//Routing here 
app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`The server is listning on  port: ${PORT}`)
);
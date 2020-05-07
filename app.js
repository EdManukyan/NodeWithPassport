const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Project Views
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Project Routes
app.use('/', require('./routes/index'));

app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`App is running on port ${PORT}`));

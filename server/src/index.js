const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const countRouter = require('./routes/count');

const app = express();
const PORT = process.env.PORT || 9001;

app.use(morgan('dev'));
app.use(cors());
app.use('/count', countRouter);

app.listen(PORT, () => {
  console.log(`back-end server listening on port ${PORT}`);
});




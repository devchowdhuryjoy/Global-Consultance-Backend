const app = require('./app');
const cors = require('cors');

const port = 8000;

app.use(cors({
    origin: 'http://localhost:5173',
}));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
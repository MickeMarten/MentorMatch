import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors())
app.use(express.json())

const userList = [];

// // Funktion som svarar på get-req


app.get('/userData', (req, res) => {
    res.json(userList);

});


app.post('/userData', (req, res) => {
    const userData = req.body;
    console.log('Recived data:', userData);
    userList.push(userData);

})



app.listen(3000, () => {
    console.log('Ready for instructions')
})



import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
const app = express();
app.use(cors())
app.use(express.json())

const userList = [];
const filePath = './userData.txt';
// // Funktion som svarar på get-req


app.get('/userData', (req, res) => {
    res.json(userList);

});


app.post('/userData', async (req, res) => {
    const userData = req.body;
    console.log('Recived data:', userData);
    userList.push(userData);
    saveUserDataToFile();

})



async function saveUserDataToFile() {
    // (1.vilket object som ska göras om, 2.idk, 3.hur många mellanslag/indentation)
    const jsonData = JSON.stringify(userList, null, 2);
    await fs.writeFile(filePath, jsonData);
    console.log('Data stored in hq.')
}

app.listen(3000, () => {
    console.log('Ready for instructions')
})



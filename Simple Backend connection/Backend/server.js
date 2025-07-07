import express from "express"
import cors from "cors";


const app = express();


const PORT = 5000;

app.use(cors());

app.use(express.json());

app.post('/submit', (req, res) => {

    const { firstname, lastname, email } = req.body;

    console.log("recieved data", req.body);

    res.json({
        message: 'data recieved succefully',
        data: {
            firstname,
            lastname,
            email
        }
    })
})

app.listen(PORT, () => {
    console.log("server is running on the http://localhost:", + PORT);
})

